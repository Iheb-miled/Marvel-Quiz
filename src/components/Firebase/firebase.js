import app from 'firebase/app';
import 'firebase/auth'
const config = {
    apiKey: "AIzaSyC4rRtEww-RDey3A7F5yJ_lab-N5oL-Fo4",
    authDomain: "marvel-quiz-21.firebaseapp.com",
    projectId: "marvel-quiz-21",
    storageBucket: "marvel-quiz-21.appspot.com",
    messagingSenderId: "485412274074",
    appId: "1:485412274074:web:e051b64093b89a12074423"
};
class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }

    //inscription 
    signUpUser = (email, password) => {
        return this.auth.createUserWithEmailAndPassword(email, password);
    }

    //connexion 
    loginUser = (email, password) => {
        return this.auth.signInWithEmailAndPassword(email, password);
    }



    //logOut 
    logOutUser = () => {
        return this.auth.signOut();
    }



            //autre version :

            // logOutUser = () =>
            //      this.auth.signOut(); // c'est comme { return this.auth.signOut();}

}

export default Firebase;
