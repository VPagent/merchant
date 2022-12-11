import s from './loginForm.module.scss'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ChangeEvent, FormEvent, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {BiHide, BiShow} from 'react-icons/bi'

type Props = {
    onFormSubmit: Function
}

const LoginForm:React.FC<Props> = ({onFormSubmit}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shown, setShown] = useState(true)

    const navigate = useNavigate()

    const handleChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
        switch(e.target.name){
            case "email":
                return setEmail(e.target.value);
            case "password":
                return setPassword(e.target.value);
            default: console.log("error in switch")
        }
    }
    const handleFormSubmit = (e:FormEvent) => {
        e.preventDefault()
        if(!email && !password){
            return alert('All fields must be filled')
        }
        onFormSubmit(email, password)
    }
    
    const handleClickToRegister = () => {
        navigate("/register")
    }
    return(
        <>
        <Form className={s.form} onSubmit={handleFormSubmit}>
            <Form.Group className={s.form_group}  controlId="formBasicEmail">
                <Form.Label className={s.form_group_label}>Email</Form.Label>
                <Form.Control 
                  className={s.form_group_input} 
                  type="email" 
                  name="email"
                  placeholder="megachad@trychad.com" 
                  onChange={handleChangeInput}
                  value={email}
                />
            </Form.Group>
            <Form.Group  className={s.form_group}  controlId="formBasicPassword">
                <Form.Label className={s.form_group_label}>Password</Form.Label>
                <Form.Control 
                  className={s.form_group_input} 
                  type={shown ? 'password' : 'text' } 
                  name="password" 
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
            <Button variant="primary" type="submit" className={s.form_btn}>
                Login
            </Button>
        </Form>
        <p className={s.text}>
            Don’t have an account? 
            <span className={s.text_link} onClick={handleClickToRegister}>
                Join the waitlist
            </span>
        </p>
    </>
    )
}

export default LoginForm