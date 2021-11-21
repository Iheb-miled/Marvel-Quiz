import React from 'react'

const Quiz = (props) => {
    const pseudo = props.userData.pseudo;
    return (
        <div>
           <h2>Pseudo: {pseudo}</h2> 
        </div>
    )
}

export default Quiz
