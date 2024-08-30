import React,{useState} from 'react'
import './Register.css'
const Register = () => {



    const[errors,setErrors]=useState({
        user:false,
        email:false,
        password:false,
    });
    const[inputs,setInputs] = useState({user:"",email:"",password:""});
    const register=(e)=>{
        e.preventDefault();
        console.log(e.target.value);
        console.log(inputs);
        let newErr={
            user:false,
            email:false,
            password:false,
        }
        if(inputs.user === ""){
            newErr.user=true;
        }
        if(inputs.email === ""){
            newErr.email=true;
        }
        if(inputs.password === ""){
            newErr.password=true;
        }
        setErrors(newErr);
        console.log(errors);
    }

    const handleChange=(e)=>{
        console.log(e.target.value);
        setInputs({...inputs,[e.target.name]:e.target.value});
    }
  return (
   <>
   <div className='container_form'>
        <h5>Registeration Form</h5>
        <form onSubmit={register}>

        <div>
            <input type="text" placeholder='enter userName' name="user" onChange={handleChange}/>
            { errors.user ? <p className='err'>user required</p> : '' }
        </div>
        <div>
            <input type="email" placeholder='enter Email' name="email" onChange={handleChange}/>
            { errors.email ? <p className='err'>Email required</p> : '' }
        </div>
        <div>
            <input type="password" placeholder='enter password' name="password" onChange={handleChange}/>
            { errors.password ? <p className='err'>Password Required</p> : '' }
        </div>
        <div>
            <button>Register</button>    <a href="Login">Login Form</a>
        </div>
     
        </form>
   </div>
   </>
  )
}

export default Register