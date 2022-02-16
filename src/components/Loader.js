import React from 'react';
import spinner from "./assests/spinner.gif"
const Loader = () => {
    return (
        <div>
            <img src={spinner} alt="loader" />
            <h1 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Loading</h1>
        </div>
    );
};

export default Loader;