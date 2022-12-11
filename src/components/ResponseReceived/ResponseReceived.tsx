import s from './responseReceived.module.scss'
import Button from 'react-bootstrap/Button';
import {BsFillCheckCircleFill} from 'react-icons/bs';
import Modal from '../Modal';

type Props = {
    onClose: Function,
    text: string
}

const ResponseReceived:React.FC<Props> = ({onClose, text}) => {

    
    return(
        <Modal>
            <div className={s.wrapper}>
                <BsFillCheckCircleFill size={80} className={s.icon}/>
                <h2 className={s.title}>Response received</h2>
                <p className={s.text}>
                    Thank you for your interest in Chad!
                    We’ll be hard at work building integrations
                    to support your {text}.
                </p>
                <Button variant="primary" className={s.btn} onClick={() => onClose()}>Done</Button>
            </div>
        </Modal>
    )
}

export default ResponseReceived