///IMGS:
import { useState } from 'react';
import loginbg from '../../images/login.jpg';
///----CSS:
import '../../styles/form.css';
import '../../styles/main.css';
///Links:
import { Link } from 'react-router-dom';
// import Login from './Login';

export default function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handelSubmit = e=>{
        e.preventDefault();
    }

  return (
    <div className="form">
    <img src={loginbg} alt="" />
    <form action="" onSubmit={handelSubmit} method="post">
        <input type="text" onChange={setFirstName} placeholder='First Name'/>
        <input type="text" onChange={setLastName} placeholder='Last Name'/>
        <input type="text" onChange={setEmail} placeholder='Email'/>
        <input type="text" onChange={setUsername} placeholder='Username'/>
        <input type="password" onChange={setPassword} placeholder='Password'/>
        <input type="password" onChange={setConfirmPassword} placeholder='Confirm your Password'/>
        <button type="submit">Sign Up</button>
        <p>Do have an account? <Link to={'/login'}>Login</Link></p>
    </form>
</div>
  )
}
