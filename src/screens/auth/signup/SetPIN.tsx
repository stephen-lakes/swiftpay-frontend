import { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import sPayLogo from "../../../assets/img/spaylogo1.png";

interface SignUpPageProps {
  handleNextPage: () => void;
  signUpData: {
    email: string;
    phoneNumber: string;
    firstname: string;
    lastname: string;
    password: string;
    confirmPassword: string;
  };
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SetPIN: React.FC<SignUpPageProps> = ({ handleNextPage, signUpData, handleChange }) => {
   

  return (
    <div className="mt-4 flex justify-center">
      <div className="w-full min-w-72 max-w-[400px]">
        <div className="flex flex-col items-center gap-4 font-semibold">
          <div className="w-[200px]">
            <img src={sPayLogo} alt="SwiftPay Logo" />
          </div>
          <h1 className="text-center text-gray-700 text-3xl font-bold">Set Transaction PIN</h1>
        </div>
        <div className="px-6 mt-4">
            ****
          
        </div>
        <div className="mt-10 text-center text-xs capitalize">
          DONE
        </div>
      </div>
    </div>
  );
};

export default SetPIN;
