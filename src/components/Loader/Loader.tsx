import {PulseLoader} from 'react-spinners'
import s from './loader.module.scss'



const Loader: React.FC = () => {

    return(

        <div className={s.loader}>
            <PulseLoader color="#32ABF2" />
        </div>

    )
}

export default Loader