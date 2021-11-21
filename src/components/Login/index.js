import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';

const Login = (props) => {
    const [error, setError] = useState("")
    const firebase = useContext(FirebaseContext);
    const data = {
        email: '',
        password: ''
    }
    const [login, setLoginData] = useState(data)
    const { email, password } = login;
    const handleChange = (e) => {

        setLoginData({ ...login, [e.target.id]: e.target.value });
    }
    const handleSubmit = (e) => {

        e.preventDefault();
        const { email, password } = login;
        firebase.loginUser(email, password).then(user => {
            setError('')
            props.history.push('/welcome')
        }).catch(e => {
            console.log("eeror", e.message)
            setError(e)
        })
    }
    const errorMsg = error !== '' && <span>{error.message}</span>
    const btn = email !== '' && password !== '' && password.length > 5 ? <button >Connexion</button> : <button disabled>Connexion</button>

    return (
        <div className='signUpLoginBox'>
            <div className="slContainer">
                <div className="formBoxLeftLogin">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                        {errorMsg}
                        <h2>Connexion</h2>

                        <form onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <input onChange={handleChange} type="email" value={email} id="email" autoComplete="off" required />  {/* autoComplete disable to save data in memory */}
                                <label htmlFor="email"> Email</label>
                            </div>
                            <div className="inputBox">
                                <input onChange={handleChange} type="password" value={password} id="password" autoComplete="off" required />  {/* autoComplete disable to save data in memory */}
                                <label htmlFor="password"> Password</label>

                            </div>
                            {btn}
                        </form>
                        <div className="linkContainer">
                            <Link className="simpleLink" to="/forget-password">
                                Mots de passe oublié?</Link>
                               <br />
                                <Link className="simpleLink" to="/sign-up">
                                Nouveau sur Marvel-quiz ? S'inscrire Maintenant</Link>
                
                        </div>
                 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
