import s from './balls.module.scss'



const Balls:React.FC = () => {

    return(
        <ul className={s.list}>
        <li className={s.list_item}></li>
        <li className={s.list_item}></li>
        <li className={s.list_item}></li>
        <li className={s.list_item}></li>
        <li className={s.list_item}></li>
        </ul>
    )
}

export default Balls