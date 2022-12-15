
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";


const Login = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const {login, error, isLoading} = useLogin();
  

    // --> Tänne koodi mikä hoitaa loggauksen
    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, pass);
    }



    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">salasana</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button id = "login" type="submit" disabled = {isLoading}>Kirjaudu sisään</button>
                {error && <div className="error">{error}</div>}
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Ei vielä tunnusta? Rekisteröidy heti<Link to="/signup"> täällä.</Link></button>
            
        </div>
    )
}

export default Login