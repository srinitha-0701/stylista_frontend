import React from 'react'
import './stylista.css';
import logosmall from './images/logosmall.png'
import {FaRegUser} from 'react-icons/fa';
import {FiLock} from 'react-icons/fi';
import googlelogo from './images/googlelogo.png'
import applelogo from './images/applelogo.png';
import desktopimg from './images/desktopimg.jpeg';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Professionallogin = () => {
  let navigate = useNavigate();
  function signEvent() {
    navigate('/Userlogin');
  };
  function handlepClick() {
    navigate('/createacntprofessional')
  }

  return (
    <div className='container'>
        <div className='right'>
            <div className='heading2'>
               <h1>Welcome Back </h1>
               <h2>User</h2>
            </div>
            <br></br>
            <p>"Log in to access your personalized beauty experience"</p>
            <br></br>
            <button type='text' className='signin-btn' onClick={signEvent}>Sign In</button>
            <div><img src={desktopimg} alt='desktop' style={{borderRadius:15,marginTop:40}}/></div>
        </div>
        <div className='left'>
            <div className='heading'>
                <img className='logo'src={logosmall} alt='logo'></img>
                <p>STYLISTA</p>            
              </div>
              <br></br>
              <div className='formfill'>
                <form action='' className='signin-form'>
                <h2 className='title'>Professional Log In</h2>
                <div className='input-field'>
                    <FaRegUser className='input-icon'/>
                    <input type='text' placeholder='Email/Username'/>
                </div>
                <div className='input-field'>
                    <FiLock className='input-icon'/>
                    <input type='text' placeholder='Password'/>
                </div>
                <div className='pass'><h5 style={{marginLeft:80}}><Link style={{textDecoration:'none'}} className='line' to="Forgotpassword">Forgot password ?</Link></h5></div>
                <button type='submit'>Log In</button>
                <br></br>
                <br></br>
                <div className='newto'><h4 onClick={handlepClick}>New to stylista? SIGN UP</h4></div>
                </form>
            </div>
            <div className='download'>
                    <img className="downloadimg" src={googlelogo} alt='googleplay' style={{height:40,width:80}}></img>
                    <img className="downloadimg" src={applelogo} alt='appstore' style={{height:40,width:80,marginLeft:10}}></img>
            </div>
        </div>   
    </div>
  )
}

export default Professionallogin