import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './stylista.css';
import logosmall from './images/logosmall.png'
import {FaRegUser} from 'react-icons/fa';
import {FiLock} from 'react-icons/fi';
import googlelogo from './images/googlelogo.png'
import applelogo from './images/applelogo.png';
import desktopimg from './images/desktopimg.jpeg';
import {AiOutlineEye} from 'react-icons/ai';
import {AiOutlineEyeInvisible} from 'react-icons/ai'


const Userlogin = () => {
    const [username,setUsername] = useState("");
    const [password ,setPassword] = useState("");
    const [visible,setVisible] = useState("");
    const [rememberMe ,setRememberMe] = useState(false);
    let navigate = useNavigate();
    function handleClick() {
        navigate('/Createacntuser');
    };
    function clickEvent() {
        navigate('/Professionallogin');
    };
  return (
    <div className='container'>
        <div className='left'>
            <div className='heading'>
                <img className='logo'src={logosmall} alt='logo'></img>
                <p className='logoname'>STYLISTA</p>            
            </div>
            <br></br>
            <div className='formfill'>
                <form action='' className='signin-form'>
                    <h2 className='title'>Users Log In</h2>
                    <div className='input-field'>
                        <FaRegUser className='input-icon'/>
                        <input value={username} id='username' type='text' placeholder='Email/Username' onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className='input-field' onClick={() => setVisible(!visible)}>
                        <FiLock className='input-icon'/>
                        <input  value={password} id='password' type={visible ? "text" : "password"} placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                        { visible ? <AiOutlineEye className='input-icon'/> : <AiOutlineEyeInvisible className='input-icon'/>}
                    </div>
                    <div className='pass'>
                        <label style={{fontSize:11,fontFamily:'sans-serif'}}><input style={{height:10,width:10}} type='checkbox' checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}/>Remember me</label>
                        <h5><Link style={{textDecoration:'none'}} className='forgot-line' to="/Forgotpassword" >Forgot password ?</Link></h5>
                    </div>
                    <button className='login-btn' type='submit'>Log In</button>
                    <br></br>
                    <br></br>
                    <div className='newto'><h4 onClick={handleClick}>New to stylista? SIGN UP</h4></div>
                </form>
            </div>
            <div className='download'>
              <img className="downloadimg" src={googlelogo} alt='googleplay' style={{height:40,width:80}}></img>
              <img className="downloadimg" src={applelogo} alt='appstore' style={{height:40,width:80,marginLeft:10}}></img>
            </div>
        </div>
        <div className='right'>
            <div className='heading2'>
               <h1>Welcome Back </h1>
               <br></br>
               <h2>Professional</h2>
            </div>
            <br></br>
            <p className='quote'>"Log in to access your personalized beauty experience"</p>
            <br></br>
            <button type='text' className='signin-btn' onClick={clickEvent}>Sign In</button>
            <div><img src={desktopimg} alt='desktop' style={{borderRadius:15,marginTop:40}}/></div>
        </div>
    </div>
  )
}

export default Userlogin