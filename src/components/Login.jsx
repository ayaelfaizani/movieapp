///IMGS:
import { useState } from 'react';
import loginbg from '../../images/login.jpg';

///----CSS:
import '../../styles/form.css';
import '../../styles/main.css';

///Links:
import { Link } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    

    const handelSubmit = e=>{
        e.preventDefault();
    }
    
  return (
    <div className="form">
        <img src={loginbg} alt="" />
        <form action="" onSubmit={handelSubmit} method="post">
            <input type="text" onChange={setUsername} placeholder='Email or Username'/>
            <input type="password" onChange={setPassword} placeholder='Password'/>
            <button type="submit">Login</button>
            <p>Don't have an account? <Link  to={'/signup'}>Sign up</Link ></p>
        </form>
    </div>
    
  )
}
