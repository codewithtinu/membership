import { useState } from "react";

const Forgot = () => {

    const [email, setEmail] = useState("");
    const resetLink = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <>
            <div style={{textAlign: 'center'}}>
                <h1 className="display-4">Forgot Password?</h1>
                <form onSubmit = {resetLink}>
                    <input 
                     type = "email"
                     placeholder= "Email Address"
                     onChange = {(e) => setEmail(e.target.value)}
                     value = {email}
                     /> <br/><br/>
                     <button 
                        type="submit"
                     >Send Reset Link</button>
                </form>
            </div>
        </>
    )
}

export default Forgot;