import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import profileIcon from "../../../assets/svg/profile.svg";
import sPayLogo from "../../../assets/img/spaylogo1.png";
import eyesOffIcon from "../../../assets/svg/eyesoff-outlined.svg";
import eyesOnIcon from "../../../assets/svg/eyeson-outlined.svg";

const SignIn: React.FC = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("LOGIN");
    console.log("password ===>>>", password);
  };

  return (
    <div className="mt-4 flex justify-center">
      <div className="w-full max-w-[400px]">
        <div className="flex flex-col items-center gap-4 font-semibold">
          <div className="w-[200px]">
            <img src={sPayLogo} alt="SwiftPay Logo" />
          </div>
          <h1 className="text-center text-3xl font-bold">Sign In</h1>
          <div className="flex items-center justify-center w-10 h-10 border-1 border-gray-200 bg-gray-100 rounded-full">
            <img src={profileIcon} alt="Profile Icon" />
          </div>
          <p>STEPHEN(ste...@gmail.com)</p>
        </div>
        <div className="px-6 mt-4">
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div className="form-group relative">
              <input
                className="appearance-none text-gray-700 focus:outline-none focus:shadow-outline focus:border-blue-400 p-2 w-full border-2 border-gray-200 rounded-[8px]"
                placeholder="Enter password"
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <div className="my-2 flex justify-end text-xs capitalize">forgot password</div>
              <img
                src={showPassword ? eyesOnIcon : eyesOffIcon}
                alt={showPassword ? "Hide Password" : "Show Password"}
                className="absolute top-3 right-2 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            </div>
            <button
              type="submit"
              className="p-2 text-white w-full bg-amber-300 border-2 border-amber-300 rounded-[8px]"
            >
              <span>Login</span>
            </button>
          </form>
          <div className="mt-10 text-center text-xs capitalize">
            <Link to="/auth/signup">Signup instead</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
