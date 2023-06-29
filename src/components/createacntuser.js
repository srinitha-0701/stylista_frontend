import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import './Useracnt.css';
import { Link } from 'react-router-dom';


const Createacntuser = () => {
  const [register,setRegister]=useState({
    Firstname:"",
    Lastname:"",
    Username:"",
    Email:"",
    MobileNumber:"",
    Gender:"",
    Age:"",
    password:"",
    Confirmpassword:"",
  });
  const {Firstname,Lastname,Username,Email,MobileNumber,password,Confirmpassword}= register;
  const onInputChange = (e) => {
    setRegister({...register,[e.target.name] : e.target.value});
  };
  const [selectedGender,setSelectedGender] = useState('');
  const handleGenderChange = (Event) => {
    setSelectedGender(Event.target.value);
  };
  const [date,setDate] = useState("none");
  const onDateChange = (Event) => {
    setDate(Event.target.value);
  };
  const onSubmit = async (e)=>{
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_BACKEND_PORT}/sign/post`,register).then((res)=>{


    })
  }
  return (
      <div className='usercontainer'>
        <h1>STYLISTA</h1>
        <form action=''>
          <h2>Create Account</h2>
          <div className='form-group'>
            <label htmlFor="">Firstname</label>
            <input type='text'  className="form-control" required="required" name="Firstname" value={Firstname} onChange={onInputChange}></input>
          </div>
          <div className="form-group">
            <label htmlFor=''>Lastname</label>
            <input type='text' className="form-control" required="required" name='Lastname' value={Lastname} onChange={onInputChange}></input>
          </div>
          <div className="form-group">
            <label htmlFor=''>Username</label>
            <input type='text' className="form-control" required="required" name='Username' value={Username} onChange={onInputChange}></input>
          </div>
          <div className='form-group'>
            <label htmlFor=''>Email</label>
            <input type='email' className='form-control' required="required" name='Email' value={Email} onChange={onInputChange}></input>
          </div>
          <div className='form-group'>
            <label htmlFor=''>Mobile number</label>
            <input type='number' className='form-control' required="required" name='MobileNumber' value={MobileNumber} onChange={onInputChange}></input>
          </div>
          <div className='form-group'>
            <label htmlFor=''>Gender</label>
            <select className='form-control' id="gender" value={selectedGender} onChange={handleGenderChange}>
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">others</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor=''>Age</label>
            <input type="date" value={date} onChange={onDateChange} className='form-control' name="date"/>
          </div>
          <div className='form-group'>
            <label htmlFor=''>Password</label>
            <input type='password' className='form-control' required="required" name='password' value={password} onChange={onInputChange}></input>
          </div>
          <div className='form-group'>
            <label htmlFor=''>Confirm Password</label>
            <input type='password' className='form-control' required="required" name='Confirmpassword' value={Confirmpassword} onChange={onInputChange}></input>
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