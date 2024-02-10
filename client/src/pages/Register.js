import {useState} from  'react';
const Register = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // sign in fn
    const signUp = (e) => {
        e.preventDefault();
        console.log(name, username, password);
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
                <button type="submit">Login</button>
                </form>
            </div>
        </>
    )
}

export  default Register;