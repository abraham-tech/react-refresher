import React from 'react';
import './Input.css';

const Input = (props) => {
    const element = props.element === 'input' ?
    <input id={props.id} type={props.type} placeholder={props.placeholder} /> :
    <textarea id={props.id} type={props.type} rows={props.rows || 3} />;
    return <div className={`form-control ${props.className}`}>
        <lable htmlFor={props.id}>{props.label}</lable>
        {element}

    </div>
}
export default Input;