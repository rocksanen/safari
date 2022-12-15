
import Login from "./login"
import Register from "./Register"
import { useState } from "react";
import '../../styles/login.css';

const SignInUp = ({visible}) => {

    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => setCurrentForm(formName);
    
    if(!visible) return null

    return <>{currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}</>
    
}

export default SignInUp