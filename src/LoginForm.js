import { useEffect, useState } from "react";
import { auth, googleAuthProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import Account from "./Account";
import './LoginForm.css';

const LoginForm = () => {

    const [value,setValue] = useState('')
        const handleClick =()=>{
            signInWithPopup(auth,googleAuthProvider).then((data)=>{
                setValue(data.user.email)
                localStorage.setItem("email",data.user.email)
            })
        }

        useEffect(()=>{setValue(localStorage.getItem('email'))})

    return (
        <div className="login">
            {value?<Account/>:
            <button className="login-btn" onClick={handleClick}><p> Login With</p> <img width={18} height={18} src="/img/gmail-icon.png" /></button>
            }
        </div>
    );
}

export default LoginForm;
