import React from "react";
import './LoginForm.css';

function Account(){
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div className="login">            
            <button className="login-btn" onClick={logout}><p>Logout</p></button>
        </div>
    );
}
export default Account;