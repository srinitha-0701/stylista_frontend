import React from 'react'
import './forgot.css';
import { Link } from 'react-router-dom';
import forgotpassimage from './images/forgotpassimage.png';
import {FaRegUser} from 'react-icons/fa';
import {BsArrowLeftShort} from 'react-icons/bs';

const Forgotpassword = () => {
  return (
    <div className='forgotcontainer'>
        <div className='forgot-details'>
            <Link to="/Userlogin"><BsArrowLeftShort style={{height:30,width:30,float:'left'}}/></Link>
            <div className='passimage'><img style={{height:200,width:200,borderRadius:20}} src={forgotpassimage} alt='passpic'></img></div>
            <h4 className='forgot-head'>Please enter your registered email ID/Phone</h4>
            <p className='forgot-p'>We will send a verification code to your registered email ID/Phone</p>
            <form className='email-verify-form' action=''>
              <div className='finput-field'>
                <FaRegUser className='input-icon'/>
                 <input type='text' placeholder='Email/Username'/>
             </div>
            </form>
            <button  className="next-btn" type='submit'>Next</button>
        </div>
    </div>
  )
}

export default Forgotpassword