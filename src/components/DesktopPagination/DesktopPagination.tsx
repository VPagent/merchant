import { useGlobalState } from '../../globalState/store'
import clsx from 'clsx';
import s from './desktopPagination.module.scss'
import {BsFillCheckCircleFill} from 'react-icons/bs';
import { SyntheticEvent, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import {IoChevronBack, IoChevronForward} from 'react-icons/io5'
import { addDisabledToNext, addDisabledToPrev } from '../../helpers/addDisabled';


const DesktopPagination:React.FC = () => {

    const [step, setStep] = useGlobalState('step')
    const [email] = useGlobalState('email')
    const [shopResponse] = useGlobalState('shopResponse')
    const [googleToken] = useGlobalState('googleToken')
    const [welcome] = useGlobalState('welcome')

    const navigate = useNavigate()

    useEffect(() => {
        if(step === 1){
            navigate("/register")
        }
        if(step === 2){
            navigate('/connectStore')
        }
        if(step === 3){
            navigate('/connectGoogle')
        }
    }, [step])

    const changeStep = (e:SyntheticEvent<HTMLButtonElement>) => {
        switch(e.currentTarget.name){
            case "prev":
                return setStep(prev => prev - 1);
            case "next":
                return setStep(prev => prev + 1);
            default: console.log("error in Switch")
        }
    }

    return(
        <>
        <ul className={s.list}>
            <li className={s.list_item}>
                {email ? 
                <span className={clsx(step === 1 ? s.list_checked : s.list_done)}>
                    <BsFillCheckCircleFill className={s.list_icon} size={32}/>
                    <span className={clsx(step >= 2 ? `${s.list_bridge}` + ` active` : s.list_bridge)}></span>
                </span> :
                <span className={clsx((step >= 1) ? `${s.list_mark}` + ` active` : s.list_mark)}>
                    <span className={clsx(step >= 2 ? `${s.list_bridge}` + ` active` : s.list_bridge)}></span>
                </span>}
                <p className={clsx(step >= 1 ? `${s.list_text}` + ` active` : s.list_text)}>Welcome</p>
            </li>
            <li className={s.list_item}>
                {shopResponse ?
                <span className={clsx(step === 2 ? s.list_checked : s.list_done)}>
                    <BsFillCheckCircleFill className={s.list_icon} size={32} />
                    <span className={clsx(step >= 3 ? `${s.list_bridge}` + ` active` : s.list_bridge)}></span>
                </span> :
                <span className={clsx(step >= 2 ? `${s.list_mark}` + ` active` : s.list_mark)}>
                    <span className={clsx(step >= 3 ? `${s.list_bridge}` + ` active` : s.list_bridge)}></span>
                </span>}
                <p className={clsx(step >= 2 ? `${s.list_text}` + ` active` : s.list_text)}>Connect your Shopify store</p>
            </li>
            <li className={s.list_item}>
                {googleToken ?
                <span className={clsx(step === 3 ? s.list_checked : s.list_done)}>
                    <BsFillCheckCircleFill className={s.list_icon} size={32} />
                    <span className={clsx(step === 4 ? `${s.list_bridge}` + ` active` : s.list_bridge)}></span>
                </span> :
                <span className={clsx(step >= 3 ? `${s.list_mark}` + ` active` : s.list_mark)}>
                    <span className={clsx(step === 4 ? `${s.list_bridge}` + ` active` : s.list_bridge)}></span>
                </span>}
                <p className={clsx(step >= 3 ? `${s.list_text}` + ` active` : s.list_text)}>Connect your customer support email</p>
                </li>
            <li className={s.list_item}>
                {welcome ?
                <span className={clsx(step === 4 ? s.list_checked : s.list_done)}>
                    <BsFillCheckCircleFill className={s.list_icon} size={32} />
                </span> :
                <span className={clsx(step === 4 ? `${s.list_mark}` + ` active` : s.list_mark)}>
                </span>}
                <p className={clsx(step === 4 ? `${s.list_text}` + ` active` : s.list_text)}>Done</p>
                </li>
        </ul>
        {email && (step !== 4) &&
            <div className={s.controls}>
                <button type='button' name="prev" disabled={addDisabledToPrev(email, shopResponse, step)}className={s.btn} onClick={changeStep}>
                    <IoChevronBack  className={s.icon} /> 
                    <span>Back</span>
                </button>
                <button type='button' name="next" disabled={addDisabledToNext(email, shopResponse, step)} className={s.btn} onClick={changeStep}>
                    <span>Next</span> 
                    <IoChevronForward  className={s.icon}/>
                </button>
            </div>}
        </>
    )
}

export default DesktopPagination


