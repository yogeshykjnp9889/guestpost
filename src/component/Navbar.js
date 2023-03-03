import React, {useEffect, useState} from 'react';
import { NavLink as Link } from "react-router-dom";
import { FiChevronDown, FiSearch, FiX } from "react-icons/fi";
import axios from 'axios';

const Modal = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Popupcontion, setpopupContion] = useState('login');

  // if(Popupcontion){
  //   console.log("Popup", props);
  //   console.log("Popup-1", Popupcontion);
  // }

  const clickHandlerPopup = (val) => {
    setpopupContion(val);
  }

  function handleChange(event) {
    // Here, we invoke the callback with the new value
    setpopupContion('login')
    props.onChange(event);
    // props.onChange(event.target.value);
}

if(Popupcontion==='login' && props.popup===true){
return (
    <div className="modal">
      <div className="modal-content">
      <span onClick={() => handleChange(false)}  className="close-modal"><FiX /></span>
      <div className="modal-head"></div>
      <div className="modal-body">
        <h1>Login Form</h1>
        <form>
          <div className="form-group">
              {/* <input type="email" name="email"  value={email} onChange={(e) => setEmail(e.target.value)} className="form-control"  placeholder="Enter username"/> */}
            <input type="email" name="email"  className="form-control"  placeholder="Enter username"/>
          </div>
          <div className="form-group">
            {/* <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter password" name="password" /> */}
            <input type="password" className="form-control" placeholder="Enter password" name="password" />
          </div>
          <div className="form-group">
            <input type="submit"  name="Login" className="cm-prime-btn" value="Login" />
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
  return (
    <div className="modal">
      <div className="modal-content">
      <span onClick={() => handleChange(false)} className="close-modal"><FiX /></span>
        <div className="modal-head"></div>
        <div className="modal-body">
          <h1>Register Form</h1>
          <form>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="firstName" className="form-control"  placeholder="Enter first name" />
              
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" className="form-control"  placeholder="Enter last name" />
              
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="text" name="email" className="form-control"  placeholder="Enter username" />
              
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" name="password" />
              
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" className="form-control" placeholder="Enter Confirm password" name="password" />
              
            </div>
            <div className="form-group">
              <label>Mobile</label>
              <input type="text" name="mobile" className="form-control"  placeholder="Enter Mobile No"/>
              
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
                  <Link className="cm-prime-btn" onClick={() => handleChange(true)}> Login </Link>
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