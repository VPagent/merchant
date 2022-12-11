import Balls from '../Balls'
import DesktopPagination from '../DesktopPagination'
import s from './sideBar.module.scss'



const SideBar:React.FC = () => {

    return(
        <div className={s.sideBar}>
            <DesktopPagination />
            <div className={s.footer}>
                <h2 className={s.footer_title}>5X</h2>
                <p className={s.footer_text}>
                    Acquiring a new customer is 5x more
                    costly than making an unhappy customer happy
                </p>
            </div>
            <Balls />
        </div>
    )
}

export default SideBar