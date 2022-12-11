import s from './storeConnected.module.scss'
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import { useGlobalState } from '../../globalState/store';
import {useNavigate} from 'react-router-dom';
import {BsFillCheckCircleFill} from 'react-icons/bs';
import Modal from '../Modal';

type Props = {
    toOpenAnother: Function
}

const StoreConnected:React.FC<Props> = ({toOpenAnother}) => {

    const [isContinue, setIsContinue] = useState(false)
    const [shopResponse] = useGlobalState('shopResponse')
    const [step, setStep] = useGlobalState('step')
    const navigate = useNavigate()
    
    const handleClickContinue = () => {
        if(isContinue){
            setStep(3)
            navigate('/connectGoogle')
        }
        setIsContinue(true)

    }

    return shopResponse && (
        <Modal>
            <div className={s.wrapper}>
                <div className={s.image_wrapper}>
                    <img src={shopResponse.shop_logo_url} alt="img" className={s.image}/>
                    <BsFillCheckCircleFill  className={s.image_icon} size={24}/>
                </div>
                <h2 className={s.title}>{!isContinue ? "Store Connected": `${shopResponse.shop_name} already connected`}</h2>
                {!isContinue && <p className={s.text}>
                    Chad is now able to manage customer support requests for {shopResponse.shop_name}.
                </p>}
                <Button variant="primary" className={s.btn} onClick={handleClickContinue}>Continue</Button>
                <p className={s.linkBtn}>Wrong store? <span className={s.spanBtn} onClick={() => toOpenAnother()}>Connect another one</span></p>
            </div>
        </Modal>
    )
}


export default StoreConnected