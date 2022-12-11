import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";


const Register = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const {signup, error, isLoading} = useSignup()

    // --> Tänne koodi mikä hoitaa rekisteritymisen
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, pass, name);
        await signup(email,pass,name)
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" id="name" onChange={(e) => setName(e.target.value)} placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button id = "register" type="submit" disabled={isLoading}>Register</button>
            {error && <div className="error">{error}</div>}
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login <Link to="/login">here.</Link></button>
        
    </div>
    )
}


export default Register