import { Navigate } from 'react-router-dom'
import {isLogin} from '../Utils'

function PrivateRoute ({children}){

    return (
        <>
            {isLogin() ? children : <Navigate to='/login'/>}
        </>
    )
}

export default PrivateRoute