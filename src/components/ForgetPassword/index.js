import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../Firebase";


const ForgetPassword = (props) => {
    const firebase = useContext(FirebaseContext)
    const [counter, setCounter] = useState(5);
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);
    const [sendSucess, setsendSucess] = useState(null);
    const [recepter, setRecepter] = useState(null);
    useEffect(() => {
        sendSucess!=null&&counter > 0 && setTimeout(() => setCounter(counter - 1), 1000)&&
        setsendSucess(`An email has been sent to ${recepter} , redirection in ` + counter+"...");
        counter == 0 && props.history.push("/login");
        return () =>{}
    }, [counter,sendSucess]);

    const handleSubmit = (e) => {
        e.preventDefault();
        firebase.resetPassword(email).then(() => {
            setError(null);
            setEmail("");
            setsendSucess(`An email has been sent  to ${recepter} , redirection in ` + counter+"...");
        }).catch(error => {
            setError(error.message);
            setsendSucess(null);
            setEmail("");
            
        })
    }
    const errorMessage = error && <div><span>{error}</span></div>
    const sucess = sendSucess && <div><span className="success">{sendSucess}</span></div>
    const btn = email ? <button >Send</button> : <button disabled>Send</button>
    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftForget">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                        {errorMessage}
                        {sucess}
                        <h2>MOT DE PASSE OUBLIÉ</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <input type="email" onChange={e => {setEmail(e.target.value);setRecepter(e.target.value) }} value={email} id="email" autoComplete="off" required />
                                <label htmlFor="email">Email</label>
                            </div>
                            {btn}
                        </form>
                        <div className="linkContainer">
                            <Link className="simpleLink" to="/login">
                                Connectez-vous </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgetPassword
