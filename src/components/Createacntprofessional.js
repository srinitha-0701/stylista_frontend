import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import './Useracnt.css';
import { Link } from 'react-router-dom';

const Createacntprofessional = () => {
  const [register,setRegister]=useState({
    Firstname:"",
    Lastname:"",
    Email:"",
    MobileNumber:"",
    password:"",
    Conformpassword:"",
    date:"",
    gender:"",
  });
  const {Firstname,Lastname,Email,MobileNumber,password,Conformpassword}= register;
  const onInputChange = (e) => {
    setRegister({...register,[e.target.name] : e.target.value});
  };
  const onSubmit = async (e)=>{
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_BACKEND_PORT}/sign/post`,register).then((res)=>{

    })
  }
  const [selectedGender,setSelectedGender] = useState('');
  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };
  const [date,setDate] = useState("none");
  const onDateChange = (Event) => {
    setDate(Event.target.value);
  };
  return (
    <div className='usercontainer'>
    <form action=''>
      <h2>Create Account</h2>
      <div className='form-group'>
        <label htmlFor="">Firstname</label>
        <input type='text'  className="form-control" required="required" name="Firstname"></input>
      </div>
      <div className="form-group">
        <label htmlFor=''>Lastname</label>
        <input type='text' className="form-control" required="required" name='Lastname'></input>
      </div>
      <div className='form-group'>
        <label htmlFor=''>Email</label>
        <input type='email' className='form-control' required="required" name='Email'></input>
      </div>
      <div className='form-group'>
        <label htmlFor=''>Mobile number</label>
        <input type='number' className='form-control' required="required" name='MobileNumber'></input>
      </div>
      <div className='form-group'>
        <label htmlFor=''>Gender</label>
        <select className='form-control' id="gender">
          <option value=""></option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">others</option>
        </select>
      </div>
      <div className='form-group'>
        <label htmlFor=''>D.O.B</label>
        <input type="date" value={date} onChange={onDateChange} className='form-control' name="date"/>
      </div>
      <div className='form-group'>
        <label htmlFor=''>Password</label>
        <input type='password' className='form-control' required="required" name='password'></input>
      </div>
      <div className='form-group'>
        <label htmlFor=''>Confirm Password</label>
        <input type='password' className='form-control' required="required" name='Conformpassword'></input>
      </div>
      <div className="userregister">
        <button  className="user-signup-btn" type="submit" value="Register">Sign up</button>
      </div>
      <p className='backsignin'>Already have an account?<Link style={{textDecoration:'none',fontSize:13}} to='/Professionallogin'>Login In</Link></p>
    </form>
  </div>
  )
}

export default Createacntprofessional