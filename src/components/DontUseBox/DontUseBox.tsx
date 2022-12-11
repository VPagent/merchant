import Form from 'react-bootstrap/Form';
import s from './dontUseBox.module.scss';
import Button from 'react-bootstrap/Button';
import { ChangeEvent, FormEvent, useState } from 'react';
import ResponseReceived from '../ResponseReceived';
import { toast } from 'react-toastify';

type Props = {
    toOpen: Function
}


const DontUseBox:React.FC<Props> = ({toOpen}) => {

    const [value, setValue] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev)
    }
    
    const onFormSubmit = (e:FormEvent) => {
        e.preventDefault()
        if(value === ("other" || "Select platform")){
            return toast.warning("You must to choose between platforms")
        }
        setIsModalOpen(prev => !prev)
        toast.warning("Chad Beta is currently only available on Shopify.")
    }
    
    const handleChangeSelect = (e:ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value)
    } 

    return(
        <>
        {isModalOpen ? <ResponseReceived onClose={handleOpenModal} text={"platform"}/>
        :<> <h1 className={s.title}>Don’t use Shopify?</h1>
        <p className={s.text}>
            Chad Beta is currently only available on Shopify.
            We’ll send you an email when Chad becomes available on your platform.
        </p>
        <Form onSubmit={onFormSubmit} className={s.form}>
        <Form.Group>
            <Form.Label className={s.form_label}>Platform</Form.Label>
            <Form.Select onChange={handleChangeSelect} className={s.form_input}>
                <option value="other" defaultValue={"Select platform"} hidden>Select platform</option>
                <option value="salesforse">Salesforse</option>
                <option value="ecwid">Ecwid</option>
                <option value="other">Other</option>
            </Form.Select>
        </Form.Group>
        <Button variant="primary" type='submit' className={s.form_btn}>Submit</Button>
        <p className={s.form_text}>Actualy use Shopify? <span className={s.form_span} onClick={() => toOpen()}>Connect</span></p>
      </Form></>}
        </>
    )
}


export default DontUseBox