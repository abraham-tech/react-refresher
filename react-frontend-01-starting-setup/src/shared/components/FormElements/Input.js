import React, {useReducer} from 'react';
import './Input.css';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {...state, value: action.payload, isValid: true};
        default:
            return state;
    }
}
const Input = (props) => {
    const [inputState, dispatch] = useReducer(inputReducer,{value: '', isValid: false});
    const onChangeHandler = event => {
        event.preventDefault();
        dispatch({type:'CHANGE', payload: event.target.value});

    }

    const element = props.element === 'input' ?
    <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={onChangeHandler}
        value={inputState.value}
    /> :
    <textarea
        id={props.id}
        type={props.type}
        rows={props.rows || 3}
        onChange={onChangeHandler}
        value={inputState.value}
    />;


    return <div className={`form-control ${!inputState.isValid && 'form-control--invalid'} ${props.className}`}>
        <lable htmlFor={props.id}>{props.label}</lable>
        {element}
        {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
}
export default Input;