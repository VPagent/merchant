import { useEffect, useState } from "react"
import Container from "../../components/Container"
import DontUseBox from "../../components/DontUseBox"
import StorePageText from "../../components/StorePageText"
import { useGlobalState } from "../../globalState/store"



const ConnectStorePage:React.FC = () => {

    const [useShopify, setUseShopify] = useState(true)
    const [email] = useGlobalState('email')
    const [step, setStep] = useGlobalState('step')

    useEffect(() => {
        if(!email){
            setStep(1)
        }
    }, [email])
    
    const handleOpenUtilities = () => {
        setUseShopify(prev => !prev)
    }
    return(
        <>
            {useShopify ? <StorePageText  toOpen={handleOpenUtilities}/>
             : <DontUseBox toOpen={handleOpenUtilities}/>}
        </>
    )
}

export default ConnectStorePage