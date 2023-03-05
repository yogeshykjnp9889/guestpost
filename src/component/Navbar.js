import React, {useEffect, useState} from 'react';
import { NavLink as Link } from "react-router-dom";

import { FiChevronDown, FiSearch, FiX } from "react-icons/fi";
import axios from 'axios';

const Modal = (props) => {
  const [errorFlash, setErrorflash] = useState();
  const [successFlash, setSuccessflash] = useState();
  const[inputValue, setInputValue] = useState({
    'fname': "",
    'lname': "",
    'email': "",
    'password': "",
    'cpassword': "",
    'mobile': ""
  });

  const[inputlogin, setloginInput] = useState({
    'email': '',
    'password' : ''
  });

  const [Popupcontion, setpopupContion] = useState('login');

  const clickHandlerPopup = (val) => {
    setErrorflash();
    setpopupContion(val);
  }

  function handleChange(event) {
    // Here, we invoke the callback with the new value
    setpopupContion('login')
    props.onChange(event);
    // props.onChange(event.target.value);
}

if(Popupcontion==='login' && props.popup===true){
  const handleInputChange = (e) => { 
    const name = e.target.name;
    const value = e.target.value;
    setloginInput(values => ({...values, [name]: value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("input", inputlogin);
    let url = 'http://127.0.0.1:8000/api/user-login';
    axios.post(url,inputlogin).then((response) =>{
      if(response.data.status==='1'){
        setloginInput({
          'email':'',
          'password':''
        });
        localStorage.setItem('userinfo', JSON.stringify(response.data.data));
        console.log("Login Data::", response.data);
        props.onChange(false);
      }else{
        console.log("Error Data::", response.data);
        setErrorflash(response.data);
       
      }
    });
    
  }
  var Error = (errorFlash && errorFlash.message) ? <div className='alert alert-danger'>{errorFlash.message}</div> : '';
return (
    <div className="modal">
      <div className="modal-content">
      <span onClick={() => handleChange(false)}  className="close-modal"><FiX /></span>
      <div className="modal-head"></div>
      <div className="modal-body">
        <h1>Login Form</h1>
        {Error}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
              {/* <input type="email" name="email"  value={email} onChange={(e) => setEmail(e.target.value)} className="form-control"  placeholder="Enter username"/> */}
            <input type="email" name="email" value={inputlogin.email} onChange={handleInputChange}  className="form-control"  placeholder="Enter username"/>
          </div>
          <div className="form-group">
            {/* <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter password" name="password" /> */}
            <input type="password" className="form-control" value={inputlogin.password} onChange={handleInputChange} placeholder="Enter password" name="password" />
          </div>
          <div className="form-group">
            <input type="submit" name="Login" className="cm-prime-btn" value="Login" />
          </div>
        </form>
        <div className="cm-flex-type-1">
          <span className="cursor"  onClick={() => clickHandlerPopup('forgot')}>Forgot Password ?</span>
          <span className="cursor" onClick={() => clickHandlerPopup('register')}> Sign Up ?</span>
        </div>
      </div>
      <div className="modal-footer"></div>
    </div>
  </div>
);
}else if(Popupcontion==='register' && props.popup===true){

  const handleInputChange = (e) => { 
    const name = e.target.name;
    const value = e.target.value;
    setInputValue(values => ({...values, [name]: value}));
  } 

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("input", inputValue);
    let url = 'http://127.0.0.1:8000/api/user-register';
    const data =  axios.post(url,inputValue).then((response) =>{
      console.log("innter of axios: ", response.data);
      if(response.data.status==='0'){
        setErrorflash(response.data.data);
      }else{
        setErrorflash();
        setInputValue({
          'fname': "",
          'lname': "",
          'email': "",
          'password': "",
          'cpassword': "",
          'mobile': ""
        });
        console.log('User data', response.data);
        setpopupContion('login');
      } 
    } );
  }

  function checkForm(index, val){
    console.log('value',val);
  }

  return (
    <div className="modal">
      <div className="modal-content">
      <span onClick={() => handleChange(false)} className="close-modal"><FiX /></span>
        <div className="modal-head">
          {errorFlash  &&  errorFlash.map((row) => {
            return (
              <div className='alert alert-danger'>{row}</div>
            );
          })
          }
          {/* {(console.log("Error",errorFlash.data))} */}
        </div>
        <div className="modal-body">
          <h1>Register Form </h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="fname" className="form-control"  value={inputValue.fname || ""} onChange={handleInputChange} placeholder="Enter first name" />
              
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lname" value={inputValue.lname || ""} onChange={handleInputChange} className="form-control"  placeholder="Enter last name" />
              
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="text" name="email" value={inputValue.email || ""} onChange={handleInputChange} className="form-control"  placeholder="Enter username" />
              
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" value={inputValue.password || ""} onChange={handleInputChange} placeholder="Enter password" name="password" />
              
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" className="form-control" value={inputValue.cpassword || ""} onChange={handleInputChange} placeholder="Enter Confirm password" name="cpassword" />
              
            </div>
            <div className="form-group">
              <label>Mobile</label>
              <input type="text" name="mobile" value={inputValue.mobile || ""} onChange={handleInputChange} className="form-control"  placeholder="Enter Mobile No"/>
              
            </div>
            <div className="form-group">
              <input type="submit" name="Login" className="cm-prime-btn" value="Register" />
            </div>
          </form>
          <div className="cm-flex-type-1">
            <span onClick={() => clickHandlerPopup('forgot')} className="cursor">Forgot Password ?</span>
            <span onClick={() => clickHandlerPopup('login')} className="cursor">Sign In ?</span>
          </div>
        </div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
}else if(Popupcontion==='forgot' && props.popup===true){
  return(
    <div className="modal">
      <div className="modal-content">
      <span onClick={() => handleChange(false)} className="close-modal"><FiX /></span>
        <div className="modal-head"></div>
        <div className="modal-body">
          <h1>Forgot Form</h1>
          <form>
            <div className="form-group">
              <input type="text" name="username" className="form-control"  placeholder="Enter username"/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Enter password" name="password" />
            </div>
            <div className="form-group">
              <input type="submit" name="Login" className="cm-prime-btn" value="Login" />
            </div>
          </form>
          <div className="cm-flex-type-1">
            <span className="cursor" onClick={() => clickHandlerPopup('register')}>Sign Up ?</span>
            <span className="cursor" onClick={() => clickHandlerPopup('login')}>Login ?</span>
          </div>
        </div>
        <div className="modal-footer"></div>
      </div>
    </div>
  )
}

}


const Navbar = (props) => {

  const [login, setlogin] = useState(false);
  const [register, setregister] = useState(false);
  const [forget, setforget] = useState(false);
  const [category, setCategory] = useState();

  const url = 'http://127.0.0.1:8000/api/get-category';

  useEffect(() => {
      axios.get(url).then((response) => {
        setCategory(response.data);
      });
  }, []);

  function checkAuthlogin(){
    let userinfo  = localStorage.getItem('userinfo');
    let userinfget = JSON.parse(userinfo);
    if(userinfget!==null){
      return userinfget;
    }
    return false;
   
    // console.log("User Info: : :", userinfget.data);
  } 
  let LoginPopup;

  if(checkAuthlogin()){
   let user =  checkAuthlogin();
   console.log("All User", user);
    LoginPopup = <Link className="cm-prime-btn" to="/dashboard"> My Account 👋 {user.fname} </Link>
  }else{
    LoginPopup = <Link className="cm-prime-btn" onClick={() => handleChange(true)}> Login </Link>
  }


  function handleChange(newValue) {
    console.log("new value", newValue);
    setlogin(newValue);
  }

    return (
      <>
        <header>
          <div className="cm-page-center">
            <nav className="topnavBar">
              <div className="cm-flex-type-1 cm-deco-none">
                <div>
                  <Link  to="/"> {props.titleText} </Link>
                </div>
                <div className="cm-navbar-menu">
                  <Link  to="/"> Home </Link>
                  <Link  to="/about"> About </Link>
                  <div className="dropdown">
                    <Link  to="/technical">Categories <FiChevronDown /></Link>
                    <div className="dropdown-content">
                      { category  && category.map((cate) => {
                          return(
                            <Link  to={`/category/${cate.slug}`}> {cate.name}</Link>
                          );
                        })
                      }
                      
                    </div>
                  </div>
                  <Link  to="/post-guidlines"> Post Guidline </Link>
                  <Link  to="/business-listing"> Buesiness Listing </Link>
                  <Link  to="/contact-us">Contact Us</Link>
                </div>
                <div className="login-search">
                  <Link> <FiSearch /> </Link>
                      {LoginPopup}
                </div>
              </div>
            </nav>
          </div>
        </header>
        <Modal popup={login} onChange={() => handleChange(false)} />
      </>
    );
}


export default Navbar;