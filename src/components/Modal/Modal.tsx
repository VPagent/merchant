import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import Container from '../Container'
import s from './modal.module.scss'

type Props = {
    children: ReactNode
}

// const portal = document.getElementById('portal')!


const Modal:React.FC<Props> = ({children}) => {

    return(

        // <div className={s.backDrop}>
       
            <div className={s.modal}>
                {children}
            </div>
        // </div>      
    )
}


export default Modal