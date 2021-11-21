import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase'

const SignUp = (props) => {
    const firebase = useContext(FirebaseContext);
    // firebase.SignUp
    const data = {
        pseudo: "",
        email: "",
        password: "",
        confirmPassword: '',

    }
    const [signUpData, setsignUpData] = useState(data);
    const [error, setError] = useState("")
    const { pseudo, email, password, confirmPassword } = signUpData;
    const [successSignup, setSuccessSignup] = useState("")
    console.log("succes", successSignup);
    const handleChange = (e) => {
        setsignUpData({ ...signUpData, [e.target.id]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();    // preventDefault pour ne pas réfraichir la page // eviter le rechargement de page 
        const { email, password } = signUpData;
        firebase.signUpUser(email, password).then(authuser => {
            firebase.user(authuser.user.uid).set({
                pseudo,
                email,
                password
            })

        }).then(() => {
            setSuccessSignup("Your account is successfully created");
            setsignUpData({ ...data }); // data toujours vide il ne se remplit pas car c'est l'état initiale 
            setError("");
            props.history.push("/welcome")
        }).catch(err => {
            setError(err)
            setsignUpData({ ...data }); // data toujours vide il ne se remplit pas car c'est l'état initiale 
            setSuccessSignup("")
        });

    }
    // Error managment 
    const errorMsg = error !== '' && <span>{error.message}</span>
    const successCreation = successSignup !== '' && <span className="success">{successSignup}</span>


    const btn = pseudo !== '' && email !== '' && password !== '' && password === confirmPassword ? <button >Inscription</button> : <button disabled>Inscription</button>
    return (
        <div className='signUpLoginBox'>
            <div className="slContainer">
                <div className="formBoxLeftSignup">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                        {errorMsg}
                        <h2>Inscription</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <input onChange={handleChange} value={pseudo} type="text" id="pseudo" autoComplete="off" required />  {/* autoComplete disable to save data in memory */}
                                <label htmlFor="pseudo"> Pseudo</label>
                            </div>
                            <div className="inputBox">
                                <input onChange={handleChange} type="text" value={email} id="email" autoComplete="off" required />  {/* autoComplete disable to save data in memory */}
                                <label htmlFor="email"> Email</label>
                            </div>
                            <div className="inputBox">
                                <input onChange={handleChange} type="password" value={password} id="password" autoComplete="off" required />  {/* autoComplete disable to save data in memory */}
                                <label htmlFor="password"> Password</label>
                            </div>
                            <div className="inputBox">
                                <input onChange={handleChange} type="password" value={confirmPassword} id="confirmPassword" autoComplete="off" required />  {/* autoComplete disable to save data in memory */}
                                <label htmlFor="confirmPassword"> Password confirm</label>
                            </div>
                            {btn}
                            {successCreation}
                        </form>
                        <div className="linkContainer">
                            <Link className="simpleLink" to="/login">
                                Déja Inscrit ? Connectez-vous
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
