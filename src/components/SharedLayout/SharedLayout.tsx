import { ReactNode, Suspense } from 'react'
import Loader from '../Loader'
import { useGlobalState } from '../../globalState/store'
import Container from '../Container'
import Logo from '../Logo'
import PaginationStep from '../PaginationStep'
import s from './sharedLayout.module.scss'
import { useMediaQuery } from 'react-responsive'
import SideBar from '../SideBar'

type Props = {
    children: ReactNode
}

const SharedLayout:React.FC<Props> = ({children}) => {
    
    const isDesktop = useMediaQuery({query: '(min-width: 1440px)'})
    const [step] = useGlobalState('step')

    return(
        <div className={s.wrapper}>
        {isDesktop && <SideBar />}
        <Suspense fallback={<Loader />}>
        <section className={s.section}>
            <div className={s.shared}>
                <Container>
                    <Logo />
                    {step !== 4 && !isDesktop && <PaginationStep />}
                    {children}
                </Container>
            </div>
        </section>
        </Suspense>
        </div>
    )
}


export default SharedLayout