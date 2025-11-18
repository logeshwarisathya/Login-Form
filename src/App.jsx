import { useFormik } from "formik"
import validateInput from './FormSchema';
import { date } from "yup";
import './index.css';
import { useState } from "react";


const initialdata={
    username:"",
    password:"",
}

const App = ()=>{
    let [showPassword, setShowPassword]= useState(false)
    const fdatas = useFormik({
        initialValues: initialdata,
        validationSchema: validateInput,
        onSubmit:(date)=>data.value,
    })

let {handleChange, handleSubmit,values,errors,touched}=fdatas
console.log(errors)
console.log(values)


  return (
    <div className='form-container' >
        <form onSubmit={handleSubmit} >
            <h2>Login</h2>
            <div className="input">
                <input type="text" 
                       name='username' 
                       placeholder='Email' 
                       onChange={handleChange}
                       />
                     {touched ? <p className="error">{errors.username}</p>:null}


                <input type={showPassword ? 'text' : 'password'}
                    name='password' 
                    placeholder='Password' 
                    onChange={handleChange}
                    />
                    {touched ? <p className="error">{errors.password}</p>:null}
                    
            </div>
            <div className="checkbox">
                <input type="checkbox" onClick={()=>setShowPassword(!showPassword)} /><p>{!showPassword ? 'show password' : 'hide password'}</p>
            </div>
            
            <button type='submit'>Sign In</button>
            <p>Forgot <a>Username / Password</a>?</p>
            <p>Don't have an account? <a>Sign Up</a></p>

        </form>
    </div>
  )
}
export default App















