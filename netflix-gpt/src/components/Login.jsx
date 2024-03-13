import { useState } from "react";

import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
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
        <form className="absolute p-12 bg-black w-3/12  my-40 mx-auto right-0 left-0 bg-opacity-80 text-white rounded-md">
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
            type="text"
            placeholder="Email or Phone"
            className="p-3 w-full my-2 rounded-md bg-gray-800"
          ></input>

          <input
            type="password"
            placeholder="Password"
            className="p-3 w-full my-2 rounded-md bg-gray-800"
          ></input>

          <button className="p-3 w-full my-3 rounded-md bg-red-700  cursor-pointer">
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
