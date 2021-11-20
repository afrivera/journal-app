import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
// import Swal from 'sweetalert2';


import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {
    
    const dispatch = useDispatch();

    //para sacar datos del state
    const {msgError} = useSelector(state => state.ui)
    // console.log(msgError);

    const [formValues, handleInputChanges] = useForm({
        name: 'Andres',
        email: 'andres@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const {name, email, password, password2} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if(isFormValid() ){
            // console.log(name, email, password, password2);
            dispatch( startRegisterWithEmailPasswordName( email, password, name ) );
        }
    }

    const isFormValid = () => {
        //TODO:
        if(name.trim().length === 0){
            dispatch(setError('name is required'))
            // console.log('name is required');
            return false
        }else if(!validator.isEmail(email) ){
            dispatch(setError('Email is no Valid'))
            // console.log('Email is no Valid');
            return false
        }else if(password !== password2 || password.length < 5) {
            dispatch(setError('password should be al least 6  characters and match each other'))
            // console.log('password should be al least 6  characters and match each other');
            return false
        }

        dispatch( removeError() );

        return true

    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            {
                msgError &&
                (
                    
                    <div className="auth__alert-error">{msgError}</div>
                )
            }
            <form onSubmit={ handleRegister }>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChanges}
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChanges}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    autoComplete="off"
                    value={ password }
                    onChange={ handleInputChanges}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    className="auth__input"
                    autoComplete="off"
                    value={ password2 }
                    onChange={ handleInputChanges}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>
                
                <Link to="/auth/login" className="link" >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
