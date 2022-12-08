import SignInUp from "./SignInUp"

const LoginBar = ({setSideOpen, sideOpen}) => {


    return(

        <div className="login-side-panel">
            <div className="login-side-panel-toggle-wrapper">
                <div className="login-side-panel-toggle"
                    onClick={() => setSideOpen(!sideOpen)}>
                    {sideOpen ? '>' : '< Login'}
                </div>
            </div>
            <SignInUp visible={sideOpen}/>
        </div>
    )



}


export default LoginBar