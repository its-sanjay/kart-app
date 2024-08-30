import React,{useState} from 'react'
import './Register.css';
const Login = () => {

    let errors = {required:{user:false,password:false}};
    const[error,setError]=useState(errors)
    const [inputs,setInputs]=useState({user:"",password:""});

    const handleChange=(e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value});
    }
    function loginFun(e){
        e.preventDefault();
        console.log("works");
        console.log("inputs",inputs);
        let newErrors = { required: { user: false, password: false } };
        if(inputs.user === ""){
            newErrors.required.user=true;
        }
        if(inputs.password === ''){
            newErrors.required.password=true;
        }
        setError(newErrors);
        console.log(error);
    }


  return (
    <>
    <div className='container_form'>
        <form onSubmit={loginFun}>
        <h5>Login Form</h5>
         <div>
             <input type="text" placeholder='enter userName' name="user" onChange={handleChange}/>
             {
                error.required.user ? 
                 <p className='err'>user name Required</p>
                : ''
             }

         </div>
         <div>
             <input type="password" placeholder='enter password' name="password" onChange={handleChange}/>
             {
            error.required.password ?
             <p className='err'>password Required</p>
             : ''
             }
         </div>
         <div>
             <button>Login</button>   <span> <a href="Register">Sign In</a></span> 
         </div>
        </form>
    </div>
    </>
  )
}

export default Login