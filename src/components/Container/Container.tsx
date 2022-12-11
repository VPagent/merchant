import s from './container.module.scss'
import { ReactNode } from "react"



type Props = {
    children: ReactNode
}


const Container:React.FC<Props> = ({children}) => {

    return(
        <div className={s.container}>
            {children}
        </div>
    )
}

export default Container