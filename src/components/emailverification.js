import React, { useState } from 'react';
import axios from 'axios';
import './emailverify.css'
import { FaRegUser } from 'react-icons/fa';
import logosmall from './images/logosmall.png';

const EmailVerification = () => {
  const [email, setEmail] = useState('');
  const [otpSent,setOtpSent] = useState(false);
  const [errorMessage,setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSendOTP = () => {
    axios.get(`http://localhost:5000/api/email/verification/${email}`)
    .then((response) => {
        setOtpSent(true);
    })
    .catch((error) => {
        setErrorMessage('error sending OTP . Please try again');
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  }   


  return (
    <div className='otp-verify-container'>
    {!otpSent ? (
        <div className='email-container'>
            <div className='verify-box-heading'>
                <img className='verify-logo'src={logosmall} alt='logo'></img>
                <p className='verify-logoname'>STYLISTA</p>            
            </div>
            <h2 className='verify-heading'>Verify Your Account</h2>
            <p className='verify-para'>Enter Your Email Address<br></br>
              We will send verification code to that address
            </p>
            <form  className="email-send" onSubmit={handleSubmit}>
            <div className='email-send-box'>
                <FaRegUser className='input-icon'/>
                <input type='email' value={email} onChange={handleEmailChange} required placeholder='enter your email'/>
            </div>
            <br></br>
            <p>{errorMessage}</p>
            </form>
            <button type='button' onClick={handleSendOTP} className='btn btn-primary'>Send Verification Code</button>
        </div>
    ) : (
        <div className='otp-container'>
            <div className='verify-box-heading'>
                <img className='verify-logo'src={logosmall} alt='logo'></img>
                <p className='verify-logoname'>STYLISTA</p>            
            </div>
        <h2 className='verify-heading'>Verify Your Account</h2>
        <p className='verify-para'>we emailed you the 4 digit code to your email<br></br>
          enter the code below to confirm your email address
        </p>
        <form  className="email-send" onSubmit={handleSubmit}>
        <input type='number' className='code' placeholder='0' min="0" max="9"/>
        <input type='number' className='code' placeholder='0' min="0" max="9"/>
        <input type='number' className='code' placeholder='0' min="0" max="9"/>
        <input type='number' className='code' placeholder='0' min="0" max="9"/>
        <br></br>
        <p>{errorMessage}</p>
        </form>
        <button type='button' className='btn btn-primary'>Verify</button>
    </div>
    )}
  </div>
    
  );
}
export default EmailVerification;
