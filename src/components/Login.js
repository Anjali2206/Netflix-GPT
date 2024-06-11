import React, { useRef, useState } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../utils/Firebase";
import Header from "./Header";
import { addUser } from '../utils/userSlice';
import { checkValidate } from "../utils/Validate";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { NETFLIX_BG } from "../utils/constants";

const Login = () => {
  const dispatch=useDispatch()

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  //ref Variable
  const name=useRef(null)
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  //end 


  //For Sign In / Sign Up
  const toggleChange = () => {
    setIsSignInForm(!isSignInForm);
  };

  //Handling Validation onClick of Button
  const handleButtonClick = () => {

    //Validation
    const message = checkValidate(
      email.current.value,
      password.current.value,
      isSignInForm ? null : confirmPassword.current.value
    );
    //end 
    
    setErrorMessage(message);

    if (message) return;

    //Sign In & Sign Up Logic

    if (!isSignInForm) {
      //Sign Up Logic
      
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value 
          }).then(() => {
            // Profile updated!
            const {uid, email, displayName}=auth.currentUser
            dispatch(addUser({uid:uid, email:email, displayName:displayName}))
            
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message)
          });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      //Sign In Logic
     
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="top-0 left-0 h-screen object-cover w-screen"
          src={NETFLIX_BG}
          alt="Netflix-img"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-gray-900 to-transparent"></div>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-10 w-full md:w-4/12 absolute bg-black bg-opacity-70 z-20 my-36 mx-auto right-0 left-0 text-white rounded-xl"
      >
        <h1 className="text-3xl font-bold py-3">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            required
            placeholder="Full Name"
            className="w-full p-3 my-3 rounded-lg bg-transparent border-2 border-slate-600 "
          />
        )}
        <input
          type="text"
          required
          ref={email}
          placeholder="Email Address"
          className="w-full p-3 my-3 rounded-lg bg-transparent border-2 border-slate-600"
        />
        <input
          type="password"
          required
          ref={password}
          placeholder="Password"
          className="w-full p-3 my-3 rounded-lg bg-transparent border-2 border-slate-600 "
        />
        {!isSignInForm && (
          <input
            ref={confirmPassword}
            required
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 my-3 rounded-lg bg-transparent border-2 border-slate-600 "
          />
        )}
        <p className="font-bold text-red-700 text-lg py-2 ">{errorMessage}</p>
        <button
          className="w-full p-3 my-4 bg-red-800 rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-400 p-4">
          {isSignInForm ? "New to Netflix? " : "Already Registered? "}
          <a className="cursor-pointer text-white hover:underline"
            onClick={toggleChange}>{isSignInForm ? "Sign Up Now" : "Sign In Now"}
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
