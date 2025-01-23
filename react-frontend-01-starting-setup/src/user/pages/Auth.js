import React from 'react';
import './Auth.css'
import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import {VALIDATOR_EMAIL, VALIDATOR_MINLENGTH} from "../../shared/util/validators";
import {useForm} from "../../shared/hooks/form-hook";
import Button from "../../shared/components/FormElements/Button";

const Auth = () => {
    const [formState, inputHandler] = useForm({
        email: {
            value: '',
            isValid: false,
        },
        password: {
            value: '',
            isValid: false,
        }
    }, false);

    const authSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    }
    return (
        <Card className="authentication">
            <h2>Login required</h2>
            <hr/>

            <form onSubmit={authSubmitHandler}>
                <Input
                    element="input"
                    id='email'
                    type="email"
                    label="Email"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText={'Please enter valid email address'}
                    onInput={inputHandler}
                />
                <Input
                    element="input"
                    id='password'
                    type="password"
                    label="Password"
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText={'Please enter valid password'}
                    onInput={inputHandler}
                />
                <Button type="submit" disable={!formState.isValid}>Login</Button>
            </form>
        </Card>
    )
}

export default Auth;
