import s from './infoBox.module.scss'
import {BsLinkedin, BsGithub, BsFillTelephoneFill} from 'react-icons/bs'
import {HiMail} from 'react-icons/hi'


const InfoBox:React.FC = () => {

    return(
        <div>
            <h2 className={s.title}>This application was developed by Pasha Voloshin</h2>
            <div className={s.link_box}>
                    <a href="https://www.linkedin.com/in/pavel-voloshin-406697228/"
                    className={s.link}>
                        <BsLinkedin className={s.icon} size={40}/>
                    </a>
                    <a href="https://github.com/VPagent" 
                    className={s.link}>
                        <BsGithub className={s.icon} size={40}/>
                    </a>
                    <a href="mailto:vpagent13@gmail.com" className={s.link} type='email'>
                        <HiMail className={s.icon} size={40}/>
                    </a>
                    <a href="tel:+380934535663" className={s.link} type='tel'>
                        <BsFillTelephoneFill className={s.icon} size={40}/>
                    </a>
                    <p className={s.location}>Kyiv Ukraine</p>
                </div>
        </div>
    )
}

export default InfoBox