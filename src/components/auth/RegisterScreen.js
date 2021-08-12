import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import validator from 'validator'
import { startRegisterWithEmailPasswordName } from '../../actions/auth'
import { removeError, setError } from '../../actions/ui'
import { useForm } from '../../hooks/useForm'



export const RegisterScreen = () => {

    const dispatch = useDispatch()
    const { msgError } = useSelector( (state) => state.ui)
    

    const [formValues, handleInputChange] = useForm({
        name:'',
        email: '',
        password: '',
        password2: ''
    })

    const {name, email, password, password2} = formValues

    const handleRegister = (e) => {
        e.preventDefault()

        if (isFormValid()) {
            dispatch( startRegisterWithEmailPasswordName(name, email, password) )
        }

    }

    const isFormValid = () => {

        if (name.trim().length === 0) {
            dispatch( setError("Name cannot be empty."))
            return false 
        }
        if ( !validator.isEmail(email)) {
            dispatch( setError("Email format is invalid."))
            return false 
        }
        if ( (password !== password2) || password.length <= 5) { 
            dispatch( setError("Passwords don't match or are invalid."))
            return false 
        }
        dispatch( removeError() )
        return true
    }

    return (
        <div>
            <h3 className="auth__title">Register</h3>

            <form 
                onSubmit={handleRegister}
                className="animate__animated animate__fadeIn animate__faster"
            >

                {
                    msgError &&
                    (<div className="auth__alert-error">
                        {msgError}
                    </div>)
                }
                <input
                    onChange={handleInputChange}
                    value={name}
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                />

                <input
                    onChange={handleInputChange}
                    value={email}
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                />

                <input
                    onChange={handleInputChange}
                    value={password}
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                />

                <input
                    onChange={handleInputChange}
                    value={password2}
                    className="auth__input"
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

                <Link className="link" to="/auth/login">
                    Already registered?
                </Link>

            </form>
        </div>
    )
}
