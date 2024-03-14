import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase.jsx";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const navigate=useNavigate();
  //Sign in/up
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  //Email Validate
  const email = useRef(null);
  const password = useRef(null);

  //error Message
  const [errorMesssage, setErrorMessage] = useState("");

  const handleButtClick = () => {
    //validate the form date
    const message = checkValidData(email.current.value, password.current.value);
    // console.log(email);
    // console.log(password);
    setErrorMessage(message);
    //one way is this for sign in/up
    // if(message===null){//Means Valid email and Password
    //   //Sign in/up
    // }

    //other way
    if (message) return;
    if(!isSignInForm){//sign up form logic
      createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    navigate("/browse");
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
    // ..
  });
    }else{//sign in logic form
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate("/browse");
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" - "+errorMessage);
  });
    }
  };

  return (
    <div>
      <Header></Header>

      <div className="absolute ">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background_img"
        />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute p-12 bg-black w-3/12  my-40 mx-auto right-0 left-0 bg-opacity-80 text-white rounded-md"
        >
          <h1 className="text-3xl font-extrabold my-3 ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 w-full my-2 rounded-md bg-gray-800"
            ></input>
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or Phone"
            className="p-3 w-full my-2 rounded-md bg-gray-800"
          ></input>

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 w-full my-2 rounded-md bg-gray-800"
          ></input>
          <p className="text-red-700 font-bold text-lg">{errorMesssage}</p>

          <button
            className="p-3 w-full my-3 rounded-md bg-red-700  cursor-pointer"
            onClick={handleButtClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="my-3 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix?Sign Up Now"
              : "Already a User?Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
