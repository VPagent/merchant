import {Routes, Route} from 'react-router-dom'
import { lazy } from 'react'

const HomePage = lazy(() => import('../../pages/HomePage'))
const RegisterPage = lazy(() => import('../../pages/RegisterPage'))
const ConnectStorePage = lazy(() => import('../../pages/ConnectStorePage'))
const ConnectGooglePage = lazy(() => import('../../pages/ConnectGooglePage'))
const LoginPage = lazy(() => import('../../pages/LoginPage'))

const ClientRoutes:React.FC = () => {

    return(
        
        <Routes>
            <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/connectStore" element={<ConnectStorePage />} />
                <Route path="/connectGoogle" element={<ConnectGooglePage />} />
                <Route path="/login" element={<LoginPage />} />
        </Routes>
       
    )
}

export default ClientRoutes