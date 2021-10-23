import React, { useRef, useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
const Landing = () => {
    const [btn, setBtn] = useState(false)
    const refWolverine = useRef(null)
    useEffect(() => {
        refWolverine.current.classList.add("startingImg") // ajouter la classe startingImg
        setTimeout(() => {
            refWolverine.current.classList.remove("startingImg")
            setBtn(true);
        }, 1000);
    }, []); // cette fonction s'execute 
    // après le return en bas
    // une fois l'element welcomePage est monté on ajoute la classe startingImg à coté de welcomePage
    const setLeftImg = () => {
        refWolverine.current.classList.add("leftImg")
    }
    const setRightImg = () => {
        refWolverine.current.classList.add("rightImg")
    }
    // const outLeftImg = () => {
    //     refWolverine.current.classList.remove("leftImg")
    // }
    // const outRightImg = () => {
    //     refWolverine.current.classList.remove("rightImg")
    // }
    // Ou on peut supprimer leftImg rightImg par une seule fonction qu'on appel clearImg;
    const clearImg = () => {
        if (refWolverine.current.classList.contains("rightImg")) {
            refWolverine.current.classList.remove("rightImg")
        } else
            if (refWolverine.current.classList.contains("leftImg")) {
                refWolverine.current.classList.remove("leftImg")
            }
    }


    const display = btn && (
        <Fragment>
            <div
                onMouseOut={clearImg}
                // onMouseOut={outLeftImg}
                onMouseOver={setLeftImg}
                className="leftBox">
                <Link className="btn-welcome" to="/sign-up">
                    Inscription
                </Link>
            </div>
            <div
                onMouseOut={clearImg}
                // onMouseOut={outRightImg}
                onMouseOver={setRightImg}
                className="rightBox">
                <Link className="btn-welcome" to="/login">
                    connexion
                </Link>
            </div>
        </Fragment>)
    return (
        <main ref={refWolverine} className="welcomePage">
            {display}
        </main>
    )
}

export default Landing
