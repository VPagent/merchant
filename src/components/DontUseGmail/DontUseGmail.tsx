import s from './dontUseGmail.module.scss'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ChangeEvent, FormEvent, useState } from 'react';
import ResponseReceived from '../ResponseReceived';
import { toast } from 'react-toastify';

type Props = {
    toOpen: Function
}

const DontUseGmail:React.FC<Props> = ({toOpen}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [value, setValue] = useState('')

    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev)
    }

    const onFormSubmit = (e:FormEvent) => {
        e.preventDefault()
        if(value === "other"){
            return toast.warning("You must to choose between platforms")
        }
        setIsModalOpen(prev => !prev)
        toast.warning("Chad Beta is currently only integrated with Gmail.")

    }

    const handleChangeSelect = (e:ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value)
    }

    return(
        <div className={s.wrapper}>
            {isModalOpen ? <ResponseReceived onClose={handleOpenModal} text={"email client"} />
            : <>
            <h1 className={s.title}> Don’t use Gmail?</h1>
            <p className={s.text}>
                Chad Beta is currently only integrated with Gmail.
                We’ll send you an email when Chad becomes compatible 
                with your support ticket platform.
            </p>
            <Form  className={s.form} onSubmit={onFormSubmit}>
                <Form.Group>
                    <Form.Label className={s.form_label}>Platform</Form.Label>
                    <Form.Select className={s.form_input} onChange={handleChangeSelect} >
                        <option value="other" defaultValue={"other"} hidden>Select platform</option>
                        <option value="Microsoft Outlook">Microsoft Outlook</option>
                        <option value="Yahoo">Yahoo</option>
                        <option value="other">Other</option>
                    </Form.Select>
                </Form.Group>
        <Button variant="primary" type='submit' className={s.form_btn}>Submit</Button>
        <p className={s.form_text}>Actually use Gmail? <span onClick={() => toOpen()} className={s.form_text_link}>Connect</span></p>
      </Form>
      </>}
        </div>

    )
}

export default DontUseGmail