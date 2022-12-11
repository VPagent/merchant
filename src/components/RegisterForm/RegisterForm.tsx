import s from '../RegisterForm/registerForm.module.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from 'react-router-dom';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useGlobalState } from '../../globalState/store';
import {BiHide, BiShow} from 'react-icons/bi'

type Props = {
    onFormSubmit: Function
}

const RegisterForm:React.FC<Props> = ({onFormSubmit}) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [step, setStep] = useGlobalState('step')
    const [regEmail] = useGlobalState('email')
    const [regName] = useGlobalState('name')
    const [regPassword] = useGlobalState('password')
    const [shown, setShown] = useState(true)

    const navigate = useNavigate()
    useEffect(() => {
        if(regEmail){
            setEmail(regEmail)
            setName(regName)
            setPassword(regPassword)
        }
    }, [regEmail, regName, regPassword])

    const handleChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
        switch(e.target.name){
            case "email":
                return setEmail(e.target.value);
            case "name":
                return setName(e.target.value);
            case "password":
                return setPassword(e.target.value);
            default: console.log("error in switch")
        }
    }
    const handleFormSubmit = (e:FormEvent) => {
        e.preventDefault()
        if(!email || !name || !password){
            return alert("All fields must be filled")
        }
        onFormSubmit(email, name, password)
        setStep(2)
        navigate("/connectStore")
    }

    return(
        <>
        <Form className={s.form} onSubmit={handleFormSubmit}>
            <Form.Group className={s.form_group} controlId="formBasicEmail">
                <Form.Label className={s.form_label}>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    name="email"
                    className={s.form_input} 
                    placeholder="megachad@trychad.com" 
                    onChange={handleChangeInput}
                    value={email}
                />
            </Form.Group>
      <Form.Group className={s.form_group} controlId="formBasicText">
        <Form.Label className={s.form_label}>Your name</Form.Label>
        <Form.Control 
            type="text" 
            name="name" 
            className={s.form_input} 
            placeholder="Mega Chad"
            onChange={handleChangeInput}
            value={name}
        />
      </Form.Group>
      <Form.Group className={s.form_group} controlId="formBasicPassword">
        <Form.Label className={s.form_label}>Password</Form.Label>
        <Form.Control 
            type={shown ? 'password' : 'text' } 
            name="password" 
            className={s.form_input} 
            placeholder="Enter password"
            onChange={handleChangeInput}
            value={password} 
        />
        <span  className={s.iconWrapper}onClick={() => setShown(prev => !prev)}>
            {shown ?
             <BiHide size={16}/>
             : <BiShow size={16}/>}
        </span>
      </Form.Group>
      <Button variant="primary" type="submit" className={s.form_createBtn}>
        Create account
      </Button>
    </Form>
    <p className={s.text}>Already have an account? <Link to='/login' className={s.text_link}>Login</Link></p>
      </>
    )
}


export default RegisterForm