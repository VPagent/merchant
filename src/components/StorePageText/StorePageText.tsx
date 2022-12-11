import s from './storePageText.module.scss'
import Button from 'react-bootstrap/Button';
import {BsCheckLg} from 'react-icons/bs';
import { useGlobalState } from '../../globalState/store';
import { getShopify } from '../../services/API';
import { useState } from 'react';
import StoreConnected from '../StoreConnected';
import { toast } from 'react-toastify';

type Props = {
    toOpen: Function,
}

const StorePageText:React.FC<Props> = ({toOpen}) => {
    const [name] = useGlobalState('name')
    const [shopResponse, setShopResponse] = useGlobalState('shopResponse')
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    const handleConnectStore = () => {
        getShopify(name)
        .then(res => {
            setShopResponse(res)
        })
        .catch((error:any) => toast.dark(error.message))
        .finally(() => {
            setIsModalOpen(prev => !prev)
            toast.success('Store has been connected')
        })
    }

    return(
        <>
        {isModalOpen ? <StoreConnected toOpenAnother={toOpen}/> 
            : <><h1 className={s.title}>Connect to Shopify Store</h1>
            <p className={s.text}>Installs the Chad widget in your Shopify store and sets it up to display
                your customer’s order information and self-serve options.
            </p>
            <ul className={s.list}>
                <li className={s.list_item}>
                    <span><BsCheckLg className={s.list_icon} size={12}/></span>
                    <h2 className={s.list_title}>
                        Track orders and shipping
                    </h2>
                    <p className={s.list_text}>
                        Global coverage with 600+ couriers supported
                    </p>
                </li>
                <li className={s.list_item}>
                    <span><BsCheckLg className={s.list_icon} size={12}/></span>
                    <h2 className={s.list_title}>
                        Manage orders
                    </h2>
                    <p className={s.list_text}>
                        Allow customers to track, return, exchange, 
                        or report problems with their orders
                    </p>
                </li>
                <li className={s.list_item}>
                    <span><BsCheckLg className={s.list_icon} size={12}/></span>
                    <h2 className={s.list_title}>
                        Process returns and exchanges
                    </h2>
                    <p className={s.list_text}>
                        Automatically checks your store policy and existing inventory 
                        before resolving or escalating each request
                    </p>
                </li>
            </ul>
            <div className={s.controls}>
                <Button variant="primary" className={s.controls_btn} onClick={handleConnectStore}>Connect store</Button>
                <button className={s.controls_linkBtn} onClick={() => toOpen()}>I don’t use Shopify</button>
            </div>
            </>}
        </>        
    )
}


export default StorePageText