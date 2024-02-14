import {useState} from  'react';
import Axios from "axios"
import { Link } from 'react-router-dom';
const Register = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // sign in fn
    const signUp = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:2821/api/signup",{name,username,password})
        .then((data)=>console.log(data.data))
        .catch((err)=>console.log(err))
    }
    return (
        <>
            <div style={{textAlign: 'center'}}>
                <h3>Register</h3>
                <form onSubmit={signUp}>
                <input type = "text" placeholder = "Full Name"
                value = {name}
                onChange={(e) => setName(e.target.value)}/><br/>
                <input type = "text" placeholder = "Username/Email"
                value = {username}
                onChange={(e) => setUsername(e.target.value)}/><br/>
                <input type = "password" placeholder = "Password"
                value = {password}
                onChange={(e) => setPassword(e.target.value)} /><br/><br/>
               <button type="submit">Signup</button>
                </form>
            </div>
        </>
    )
}

export  default Register;