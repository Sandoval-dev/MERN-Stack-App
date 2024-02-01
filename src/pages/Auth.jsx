import React, { useState } from 'react'
import { loginAction, registerAction } from './../redux/actions/auth'
import {useDispatch} from 'react-redux'

const Auth = () => {

    const [signUp, setSignUp] = useState(true)
    const [authData, setAuthData] =useState({username:"", email:"", password:""})
    const dispatch = useDispatch()

    const onChangeFunc = (e) => {

        setAuthData({...authData, [e.target.name] : e.target.value})
        
    }

    const authFunch = () => {
        if(signUp) {
            dispatch(registerAction(authData))
        }else{
            dispatch(loginAction(authData))
        }
    }
    console.log(authData)
    return (
        <div className='w-full h-screen bg-gray-200 flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-50'>
            <div className='w-1/3 bg-white p-3'>
                <h1 className='text-2xl font-bold text-indigo-600 text-center'> {signUp ? "REGISTER" : "LOGIN"}</h1>
                <div className='flex flex-col space-y-3 m-3'>
                    {signUp && <input value={authData.username} name='username' onChange={onChangeFunc} type='text' className='input-style' placeholder='Username' />}
                    <input type='text' value={authData.email} name='email' onChange={onChangeFunc} className='input-style' placeholder='Email' />
                    <input type='password' value={authData.password} name='password' onChange={onChangeFunc} className='input-style' placeholder='Password' />

                </div>
                <div className='text-red-500 text-xs cursor-pointer mb-4 m-3'>
                    {
                        signUp ? <span onClick={() => setSignUp(false)}>Do you have been already login?</span> : <span onClick={() => setSignUp(true)}>Click for Sign Up.</span>
                    }
                </div>
                <div onClick={authFunch} className='w-full p-2 text-center bg-indigo-600 text-white rounded-md cursor-pointer hover:bg-indigo-800 mt-2'>{signUp ? "Kayıt Ol" : "Giriş Yap"}</div>
            </div>
        </div>
    )
}

export default Auth