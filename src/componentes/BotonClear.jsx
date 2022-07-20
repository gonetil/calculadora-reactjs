import React from "react";
import '../css/BotonClear.css';

const BotonClear = (props) => (
    <div className='botonClear' onClick={() => props.handleClick()}>{props.children}</div>
)

export default BotonClear;