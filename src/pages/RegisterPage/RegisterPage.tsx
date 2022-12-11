import s from './registerPage.module.scss'
import RegisterForm from "../../components/RegisterForm"
import { useGlobalState } from "../../globalState/store"
import { useEffect } from 'react'


const RegisterPage:React.FC = () => {

    const [email, setEmail] = useGlobalState("email")
    const [name, setName] = useGlobalState("name")
    const [password, setPassword] = useGlobalState("password")
    const [welcome, setWelcome] = useGlobalState("welcome")
    const [step, setStep] = useGlobalState('step')

    useEffect(()=>{
        setStep(1)
        if(welcome){
            setWelcome(null)
        }
    }, [welcome, setStep])
    
    const formSubmit = ( email:string, name:string, password:string) => {
        setEmail(email)
        setName(name)
        setPassword(password)
    }

    return(
            <>
            <h1 className={s.title}>Welcome to Chad</h1>
            <p className={s.text}>Go live in 10 minutes! Our self-service widget empowers your customers to manage orders and track shipments 24/7 without driving you crazy.</p>
            <RegisterForm onFormSubmit={formSubmit} />
            </>
    )
}

export default RegisterPage