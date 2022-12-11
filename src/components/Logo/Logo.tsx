import s from './logo.module.scss'
import  ChadLogoRetina  from '../../images/ChadLogo2x.png'

const Logo:React.FC = () => {

    return(
        <p className={s.logo}>
            <img src={ChadLogoRetina} alt="logo" className={s.image}/>
            <span>Chad</span>
        </p>
    )
}

export default Logo