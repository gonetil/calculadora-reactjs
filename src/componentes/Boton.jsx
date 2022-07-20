import React from 'react';

import '../css/Boton.css';

function Boton(props) {
    const click = () => props.handleClick(props.children);

    return (
        <div 
            className={ `boton-contenedor ${ ( (isNaN(props.children)) && (props.children != '.') && (props.children != '=') ) ? 'operador' : '' }`.trimEnd()} 
            onClick={click}>
            { props.children }
        </div>

    );
}

export default Boton;