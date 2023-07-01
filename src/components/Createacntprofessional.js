import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import './Useracnt.css';
import { Link } from 'react-router-dom';


const Createacntprofessional = () => {
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
  const [errorMessage,setErrorMessage] = useState("");
  const {firstname,lastname,username,email,mobileNumber,gender,dateOfBirth,password,conformpassword}= register;
  const onInputChange = (e) => {
    setRegister({...register,[e.target.name] : e.target.value});
  };

  const onSubmit = async (e)=>{
    e.preventDefault();
    try{
    await axios.post(`http://localhost:5000/sign/post`,register)
    .then((res)=>{
      if(res.data==="success"){

        alert('successful');
      }
      else{
        setErrorMessage(res.data);
      }
      });
  } catch (error){
      if(error.response && error.response.data && error.response.data.errorMessage){
        setErrorMessage(error.response.data.errorMessage);
      } else{
        setErrorMessage(['an error occurred . please try again']);
      }
    }

  }
   return (
    <div className='usercontainer'>
    <form action=''>
      <h2>Create Account</h2>
       <center>{errorMessage && <p style={{color:"red",fontWeight:"bold"}}>{errorMessage}</p>}</center>
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
        <label htmlFor=''>Age</label>
        <input type="dateOfBirth" value={dateOfBirth} onChange={onInputChange} className='form-control' name="dateoOfBirth"/>
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
        <button  className="user-signup-btn" type="submit" value="Register" onClick={onSubmit}>Sign up</button>
      </div>
      <p className='backsignin'>Already have an account?<Link style={{textDecoration:'none',fontSize:13}} to='/Professionallogin'>Login In</Link></p>
    </form>
  </div>
  )
}

export default Createacntprofessional