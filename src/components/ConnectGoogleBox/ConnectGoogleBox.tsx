import s from './connectGoogleBox.module.scss'
import {BsCheckLg} from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import { getGoogle, register } from '../../services/API';
import { useGlobalState } from '../../globalState/store';
import { useEffect, useState } from 'react';
import ReadyToGo from '../ReadyToGo';
import SocialIcon from '../../images/SocialIcon2x.png';
import { toast } from 'react-toastify';

type Props = {
    toOpen: Function
}

const ConnectGoogleBox:React.FC<Props> = ({toOpen}) => {

    const [email] = useGlobalState('email')
    const [name] = useGlobalState('name')
    const [password] = useGlobalState('password')
    const [shopResponse] = useGlobalState('shopResponse')
    const [googleToken, setGoogleToken] = useGlobalState('googleToken')
    const [welcome, setWelcome] = useGlobalState('welcome')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [step, setStep] = useGlobalState('step')
    
    useEffect(() => {

        if(googleToken && shopResponse){
            const body = {
                "name": name,
                "email": email,
                "password": password,
                "shop_token": shopResponse?.token,
                "google_token": googleToken
            }
            register(body).then(res => setWelcome(res))
        }
    }, [googleToken])

    const handleClickConnect = () => {   
        getGoogle()
        .then(res => setGoogleToken(res.token))
        .then(() => {
            setIsModalOpen(true)
            setStep(4)})
        .catch((error:any) => console.log(error.message))
        .finally(() =>  toast.success('Customer support email has been added'))

    }

    return(
        <div className={s.wrapper}>
            {(isModalOpen && googleToken && welcome) ? <ReadyToGo /> 
            : <>
            <h1 className={s.title}>Connect to customer support email</h1>
            <p className={s.text}>
                Allows Chad to send automated responses
                on your behalf from your usual support mailbox
            </p>
            <ul className={s.list}>
                <li className={s.list_Item}>
                    <span><BsCheckLg className={s.list_icon}/></span>
                    <h2 className={s.list_title}>
                        Contextual responses
                    </h2>
                    <p className={s.list_text}>
                        Custom responses to any support situation from 
                        “where’s my stuff?” to “I want a refund”
                    </p>
                </li>
                <li className={s.list_Item}>
                    <span><BsCheckLg className={s.list_icon}/></span>
                    <h2 className={s.list_title}>
                        Reply from anywhere
                    </h2>
                    <p className={s.list_text}>
                        Respond to your customers via email or Chad 
                        chat—it’s all saved in the same thread
                    </p>
                </li>
                <li className={s.list_Item}>
                    <span><BsCheckLg className={s.list_icon}/></span>
                    <h2 className={s.list_title}>
                        Categorical inbox tags
                    </h2>
                    <p className={s.list_text}>
                        Tags your emails by category so you know what
                        to expect before even opening an email
                    </p>
                </li>
            </ul>
            <Button variant="primary" className={s.btn} onClick={handleClickConnect}>
                <span className={s.btn_icon}>
                    <img src={SocialIcon} alt="google" className={s.googleIcon}/>
                </span>
                <span className={s.btn_text}>Connect Gmail account</span>
            </Button>
            <button type="button" onClick={() => toOpen()} className={s.linkBtn}>I don’t use Gmail</button>
            </>}
        </div>
    )
}

export default ConnectGoogleBox