import React, {useState} from 'react';
import './Auth.css'
import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import {VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../../shared/util/validators";
import {useForm} from "../../shared/hooks/form-hook";
import Button from "../../shared/components/FormElements/Button";

const Auth = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [formState, inputHandler, setFormData] = useForm({
        name: {
            value: '',
            isValid: false,
        },
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

    const switchModeHandler = event => {
        if(!isLoginMode) {
            setFormData({
                ...formState.inputs,
                name: undefined
            }, formState.inputs.email.isValid && formState.inputs.password.isValid);
        } else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false,
                }
            })
        }
        setIsLoginMode(prevMode => !prevMode);
    }
    return (
        <Card className="authentication">
            <h2>Login required</h2>
            <hr/>

            <form onSubmit={authSubmitHandler}>
                {!isLoginMode && (
                    <Input
                        element="input"
                        id='name'
                        type="text"
                        label="Name"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText={'Please enter a name '}
                        onInput={inputHandler}
                    />
                )}
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
                <Button type="submit" disable={!formState.isValid}>{isLoginMode? 'Login' : 'Signup'}</Button>
                <Button inverse onClick={switchModeHandler}>SWITCH TO {isLoginMode? 'SIGNUP' : 'LOGIN'}</Button>
            </form>
        </Card>
    )
}

export default Auth;
