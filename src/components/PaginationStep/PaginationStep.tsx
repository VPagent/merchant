import { useGlobalState } from '../../globalState/store'
import s from './paginationStep.module.scss'
import {IoChevronBack, IoChevronForward} from 'react-icons/io5'
import { SyntheticEvent, useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import { addDisabledToNext, addDisabledToPrev } from '../../helpers/addDisabled';

// IoChevronBack


const PaginationStep:React.FC = () => {
    const [step, setStep] = useGlobalState('step')
    const [email] = useGlobalState('email')
    const [shopResponse] = useGlobalState('shopResponse')
    const [googleToken] = useGlobalState('googleToken')

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

    const calcWidth = () => {
        if(step === 1){
            return "25%"
        }
        if(step === 2){
            return "50%"
        }
        if(step === 3){
            return "75%"
        }
    }
    // const addDisabledToPrev = () => {
    //     if(step === 2 && email){
    //         return false
    //     }
    //     if(step === 3 && shopResponse){
    //         return false
    //     }
    //     return true
    // }

    // const addDisabledToNext = () => {
    //     if(step === 1 && email){
    //         return false
    //     }
    //     if(step === 2 && shopResponse){
    //         return false
    //     }
    //     return true
    // }

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
        <div className={s.box}>
            <p className={s.text}>Step {step} of 4</p>
            <div className={s.pagination}>
                <div className={s.range} style={{width : calcWidth()}}></div>
            </div>
            {email &&
                <div className={s.controls}>
                    <button type='button' name="prev" disabled={addDisabledToPrev(email, shopResponse, step)}className={s.btn} onClick={changeStep}>
                        <IoChevronBack  className={s.icon} /> 
                        <span>Prev</span>
                    </button>
                    <button type='button' name="next" disabled={addDisabledToNext(email, shopResponse, step)} className={s.btn} onClick={changeStep}>
                        <span>Next</span> 
                        <IoChevronForward  className={s.icon}/>
                    </button>
                </div>}
        </div>
    )
}

export default PaginationStep