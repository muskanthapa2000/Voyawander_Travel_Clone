import React, { useContext, useState } from 'react'
// import './Style1.css';
import { AuthContent } from './ContextApi';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

 const SignUp = () => {

    const{arr,setArr,setCheck}=useContext(AuthContent)
    const[log,setLog]=useState({
      name:"",
      email:"",
      phone:"",
      password:"",
    })
    const navigate = useNavigate();
    console.log(log)

    const saveData =(e)=>{
        e.preventDefault()
     let logData=arr.filter((el)=>{
       return el.email===log.email||el.phone===log.phone
     })
     if(logData.length>=1){
        alert("All ready register")
     }else{
        setArr([...arr,log])

        alert("Successfully")
        setCheck(true);
        navigate("/login")
        
     }
    }
    console.log(arr)


  return (
    <div className='body'>
    <div class="container">
    <div class="title">Registration</div>
    <div class="content">
      <form onSubmit={saveData}>
        <div class="user-details">
          <div class="input-box">
            <span class="details">Full Name</span>
            <input type="text" placeholder="Enter your name" id="name"name="name"value={log.name} required onChange={(e)=>setLog({...log, [e.target.name]:e.target.value})}/>
          </div>
          <div class="input-box">
            <span class="details">Username</span>
            <input type="text" placeholder="Enter your username" required/>
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input type="text" placeholder="Enter your email" id="email" name="email"value={log.email} required onChange={(e)=>setLog({...log, [e.target.name]:e.target.value})}/>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" placeholder="Enter your number" name="phone"value={log.phone} required onChange={(e)=>setLog({...log, [e.target.name]:e.target.value})}/>
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="text" placeholder="Enter your password"id="password" name="password"value={log.password} required onChange={(e)=>setLog({...log, [e.target.name]:e.target.value})} />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="password" placeholder="Confirm your password" required id="conform-password"/>
          </div>
        </div>
        <div class="gender-details">
          <input type="radio" name="gender" id="dot-1"/>
          <input type="radio" name="gender" id="dot-2"/>
          <input type="radio" name="gender" id="dot-3"/>
          <span class="gender-title">Gender</span>
          <div class="category">
            <label for="dot-1">
            <span class="dot one"></span>
            <span class="gender">Male</span>
          </label>
          <label for="dot-2">
            <span class="dot two"></span>
            <span class="gender">Female</span>
          </label>
          <label for="dot-3">
            <span class="dot three"></span>
            <span class="gender">Trans-gender</span>
            </label>
          </div>
        </div>
        <div class="button">
          <input type="submit" value="Register"id="register"/>
        </div>
      </form>
      Already a member? <Link style={{textDecoration:"none"}} to={"/login"}>Login</Link>
    </div>
  </div>
  </div>
  )
}

export default SignUp;