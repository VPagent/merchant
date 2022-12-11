import s from './useDesktop.module.scss'
import Button from 'react-bootstrap/Button';
import {BsFillCheckCircleFill} from 'react-icons/bs';
import { useGlobalState } from '../../globalState/store';
import {useNavigate} from 'react-router-dom';
import Modal from '../Modal';

type Props = {
    toClose: Function
}

const UseDesktop:React.FC<Props> = ({toClose}) => {
    const [email, setEmail] = useGlobalState('email')
    const [name, setName] = useGlobalState('name')
    const [password, setPassword] = useGlobalState('password')
    const [shopResponse, setShopResponse] = useGlobalState('shopResponse')
    const [googleToken, setGoogleToken] = useGlobalState('googleToken')
    const [welcome, setWelcome] = useGlobalState('welcome') 
    const [step, setStep] = useGlobalState('step')

    const handleClickLogOut = () => {
        setEmail('')
        setName('')
        setPassword('')
        setShopResponse(null)
        setGoogleToken('')
        setWelcome(null)
        setStep(1)
    }

    return(
        <Modal>
            <div className={s.wrapper}>
                {shopResponse?.shop_logo_url 
                ?  <img src={shopResponse.shop_logo_url} alt={shopResponse.shop_name} className={s.icon}/>
                :  <BsFillCheckCircleFill size={80} className={s.iconDef}/>}
                <h2 className={s.title}>Use your desktop to access Chad</h2>
                <p className={s.text}>
                    Chad doesn’t support mobile browsers. 
                    To access your dashboard, login from your 
                    laptop or desktop computer.
                </p>
                <Button variant="primary" className={s.btn} onClick={() => toClose()}>Ok</Button>
                <p className={s.text_link}>Not {email}?{' '}<span className={s.text_link_click} onClick={handleClickLogOut}>Logout</span></p>
            </div>
        </Modal>
    
    )
}

export default UseDesktop