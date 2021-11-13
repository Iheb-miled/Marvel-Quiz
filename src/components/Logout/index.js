import React, {useState, useEffect,useContext} from 'react'
import { FirebaseContext } from '../Firebase';
import { Link } from 'react-router-dom';


const Logout = (props) => {
    const [checked, setChecked] = useState(false);
    const firebase = useContext(FirebaseContext);

    useEffect(()=>{

        if(checked){
            console.log("deconnexion")
            firebase.logOutUser();
     
            // props.history.push('/home');
            
        }
    },[checked,firebase]);
    const handleChange=event=>{
        setChecked(event.target.checked)
    }

    return (
        <div className="logoutContainer">
            <label  className="switch">
                <input type="checkbox" 
                onChange={handleChange}
                checked={checked}/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default Logout
