import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import "./navbar.css"
import { useEffect, useState } from "react";

const Navbar = (props) => {
  let navigating = useNavigate();


  const signingOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      props.setIsAuth(false);
      navigating("/login");
    });
  };


  const signInElement = (
    <Link to="/login" className="nav-item nav-link  " href="#">
      Login
    </Link>
  );
  const signOut_createElement_myPosts = (
    <>
      <Link to="/createPost" className="nav-item nav-link " href="#">
        Create
      </Link>
      <a onClick={signingOut} className="nav-item nav-link " role="button">
        Sign Out{" "}
      </a>
    </>
  );



  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="#">
          BLOG
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav w-100" >
            <Link to="/" className="nav-item nav-link " href="#">
              Home <span className="sr-only">(current)</span>
            </Link>
 
            {props.isAuth ? signOut_createElement_myPosts : signInElement}
 
          </div>
          
        
        </div>

          {
          auth.currentUser!==null &&
          <a className="navbar-brand" href="#">
          <img src={auth.currentUser.photoURL} className="img-thumbnail rounded-circle "/>
          </a>
          }
        

        
      </nav>
      

    </>
  );
};

export default Navbar;
