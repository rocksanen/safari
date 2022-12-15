import SignInUp from "./SignInUp"
import { Link } from "react-router-dom"
import { useAuthContext } from "../../hooks/useAuthContext"

const LoginBar = ({setSideOpen, sideOpen}) => {

    const {user} = useAuthContext();

    return(

        <div className="login-side-panel">
            <div className="login-side-panel-toggle-wrapper">
                <div className="login-side-panel-toggle"
                    onClick={() => setSideOpen(!sideOpen)}>
                    {!user ? <p className="logintext">{sideOpen ? '> Login' : '< Login' }<Link to="/login"></Link></p> : 'Kirjautunut' }
                </div>
            </div>
            {!user && <SignInUp visible={sideOpen}/>}
        </div>
    )



}


export default LoginBar