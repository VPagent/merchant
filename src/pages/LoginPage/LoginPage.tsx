import s from './loginPage.module.scss'
import LoginForm from '../../components/LoginForm'
import { useGlobalState } from '../../globalState/store'
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import UseDesktop from '../../components/UseDesktop';
import { toast } from 'react-toastify';



const LoginPage:React.FC = () => {

    const [regEmail] = useGlobalState('email')
    const [regPassword] = useGlobalState('password')
    const [isLogIn, setIsLogIn] = useGlobalState('isLogIn')
    const navigate = useNavigate()

    const handleFormSubmit = (email:string, password:string) => {
        if(regEmail === email && regPassword === password){
            setIsLogIn(true)
            navigate('/')
            return
        }
        return toast.warning('You dont have account, please go to register')
    }
    return(
        
            <>
            <h1 className={s.title}>Welcome back</h1>
            <p className={s.text}>
                Feeling ready to take on the day? Chad is too!
            </p>
             <LoginForm onFormSubmit={handleFormSubmit}/>
            </>
    )
}

export default LoginPage