import React, { useState, Fragment, useContext, useEffect } from 'react';
import Logout from '../Logout';
import Quiz from '../Quiz';
import { FirebaseContext } from '../Firebase';

const Welcome = (props) => {
    const firebase = useContext(FirebaseContext);
    const [userSession, setUserSession] = useState(null);
    const [userData, setUserData] = useState({});
    const [error,setError]=useState(null)
    useEffect(() => {
        //verifer si il y'a un user connecté au moment de montage de composant
        let listener = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : props.history.push('/')
        })
        !!userSession &&  firebase.user(userSession.uid).get().then(data=>{
            if(data && data.exists){
            setUserData(data.data());}
        }).catch(error=>{
            setError(error.message)
        })

//arreter le listener une fois qu'on à démonter le composant 
        return () => {
            //componentwillUnmount
            listener()
        }
    },[userSession])
    return userSession === null ? (
        <Fragment>
            <div className="loader">
                <p> Loading ... </p>
            </div>
        </Fragment>
    ) : (
        
        <div className="quiz-bg">
            <div className='container'>
                <Logout />
                <Quiz userData={userData}/>
            </div>
        </div>
    )

}

export default Welcome;
