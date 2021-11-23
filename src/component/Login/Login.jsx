import React from 'react'
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder="Password" name={'password'} component={'input'}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type="checkbox"/> Remember me
            </div>
            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const onSubmit = (formData) => {
    console.log(formData)
}

const Login = (props) => {
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login