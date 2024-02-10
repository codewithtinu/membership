import {useState} from  'react';
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // sign in fn
    const signIn = (e) => {
        e.preventDefault();
        console.log(username, password);
    }
    return (
        <>
            <div style={{textAlign: 'center'}}>
                <h3>Login</h3>
                <form onSubmit={signIn}>
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

export  default Login;