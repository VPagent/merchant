import s from './readyToGo.module.scss'
import Button from 'react-bootstrap/Button';
import {BsFillCheckCircleFill} from 'react-icons/bs';
import {useNavigate} from 'react-router-dom';
import Modal from '../Modal';


const ReadyToGo:React.FC = () => {
    
    const navigate = useNavigate()

    const handleClickOnOk = () => {
        navigate("/login")
    }
    

    return(
        <Modal>
            <div className={s.wrapper}>
            <BsFillCheckCircleFill size={80} className={s.icon}/>
                <h2 className={s.title}>You’re ready to go!</h2>
                <p className={s.text}>
                    Chad doesn’t support mobile browsers.
                    To access your dashboard, login from your laptop or desktop computer.
                </p>
                <Button variant="primary" className={s.btn} onClick={handleClickOnOk}>Ok</Button>
            </div>
        </Modal>
    )
}


export default ReadyToGo