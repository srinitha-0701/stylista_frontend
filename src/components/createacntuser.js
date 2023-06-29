import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import './Useracnt.css';
import { Link } from 'react-router-dom';


const Createacntuser = () => {
  const [register,setRegister]=useState({
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    mobileNumber:"",
    gender:"",
    dateOfBirth:"",
    password:"",
    conformpassword:"",
  });
  const {firstname,lastname,username,email,mobileNumber,gender,dateOfBirth,password,conformpassword}= register;
  const onInputChange = (e) => {
    setRegister({...register,[e.target.name] : e.target.value});
  };

  const onSubmit = async (e)=>{
    e.preventDefault();
    await axios.post(`http://localhost:5000/sign/post`,register)
    .then((res)=>{
      console.log('successful')
     
    })
    
  }
  return (
      <div className='usercontainer'>
        <h1>STYLISTA</h1>
        <form action=''>
          <h2>Create Account</h2>
          <div className='form-group'>
            <label htmlFor="">Firstname</label>
            <input type='text'  className="form-control" required="required" name="firstname" value={firstname} onChange={onInputChange}></input>
          </div>
          <div className="form-group">
            <label htmlFor=''>Lastname</label>
            <input type='text' className="form-control" required="required" name='lastname' value={lastname} onChange={onInputChange}></input>
          </div>
          <div className="form-group">
            <label htmlFor=''>Username</label>
            <input type='text' className="form-control" required="required" name='username' value={username} onChange={onInputChange}></input>
          </div>
          <div className='form-group'>
            <label htmlFor=''>Email</label>
            <input type='email' className='form-control' required="required" name='email' value={email} onChange={onInputChange}></input>
          </div>
          <div className='form-group'>
            <label htmlFor=''>Mobile number</label>
            <input type='number' className='form-control' required="required" name='mobileNumber' value={mobileNumber} onChange={onInputChange}></input>
          </div>
          <div className='form-group'>
            <label htmlFor=''>Gender</label>
            <select className='form-control' id="gender" name='gender' value={gender} onChange={onInputChange}>
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">others</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor=''>Date of Birth</label>
            <input type="date" value={dateOfBirth} onChange={onInputChange} className='form-control' name="dateOfBirth"/>
          </div>
          <div className='form-group'>
            <label htmlFor=''>Password</label>
            <input type='password' className='form-control' required="required" name='password' value={password} onChange={onInputChange}></input>
          </div>
          <div className='form-group'>
            <label htmlFor=''>Confirm Password</label>
            <input type='password' className='form-control' required="required" name='conformpassword' value={conformpassword} onChange={onInputChange}></input>
          </div>
          <div className="userregister">
            <button onClick={onSubmit} className="user-signup-btn" type="submit" value="Register">Sign up</button>
          </div>
          <p className='backsignin'>Already have an account? <Link style={{textDecoration:'none',fontSize:15}} to='/Userlogin'>Login In</Link> </p>
        </form>
      </div>
  )
}

export default Createacntuser