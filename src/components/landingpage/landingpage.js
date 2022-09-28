import React from "react";
import Div100vh from 'react-div-100vh';
import me from '../../images/me.png';

let Landingpage = () => {
    return (
    <>
    <Div100vh>
        <h1 className="myH1">Landingpage</h1>
        <img
              src={me}
              width="auto"
              height="100"
              alt="Stefan Brunotte"
            />
    </Div100vh>
    </>
    )
};

export default Landingpage;