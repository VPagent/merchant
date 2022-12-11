import { useEffect, useState } from "react"
import { useGlobalState } from "../../globalState/store"
import {useNavigate} from 'react-router-dom'
import UseDesktop from "../../components/UseDesktop"
import { toast } from 'react-toastify';
import { useMediaQuery } from 'react-responsive'
import InfoBox from "../../components/InfoBox";



const HomePage:React.FC = () => {
    const [welcome] = useGlobalState("welcome")
    const [isModalOpen, setIsModalOpen] = useState(true)
    const isDesktop = useMediaQuery({query: '(min-width: 1440px)'})

    const navigate = useNavigate()

    useEffect(() => {  
        if(!welcome){
            return navigate("/register")
        }
        toast.success(`${welcome.message}`)
    }, [welcome])

    const handleCloseModal = () => {
        if(isDesktop){
            return setIsModalOpen(false)
        }
        toast.warning('Chad doesn’t support mobile browsers. Use your desktop to access Chad')
    }
    
    return(
        <>
            {isModalOpen ? <UseDesktop toClose={handleCloseModal} />
            : <InfoBox />}
        </>
    )
}

export default HomePage