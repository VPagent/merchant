import { useEffect, useState } from "react"
import ConnectGoogleBox from "../../components/ConnectGoogleBox"
import Container from "../../components/Container"
import DontUseGmail from "../../components/DontUseGmail"
import { useGlobalState } from "../../globalState/store"


const ConnectGooglePage:React.FC = () => {

    const [isUse, setIsUse] = useState(true)
    const [email] = useGlobalState('email') 
    const [step, setStep] = useGlobalState('step')

    useEffect(() => {
        if(!email){
            setStep(1)
        }
    }, [email])
    const handleClickToOpen = () => {
        setIsUse(prev => !prev)
    }

    return(
        <>
                {isUse ? <ConnectGoogleBox toOpen={handleClickToOpen} />
                 : <DontUseGmail toOpen={handleClickToOpen}/>}
        </>
    )
}


export default ConnectGooglePage