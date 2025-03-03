import { useRef, ChangeEvent, useState, useEffect } from "react";
import { hideEmail } from "../../../utils/utils";
import Loader from "../../../components/Loader";

// Define props types
interface ConfirmEmailProps {
  handleNextPage: () => void;
  signUpData: { email: string };
  handlePreviousPage: () => void;
}

const ConfirmEmail: React.FC<ConfirmEmailProps> = ({ handleNextPage, signUpData, handlePreviousPage }) => {
  const [verifyingOTP, setVerifyingOTP] = useState(false);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { maxLength, value } = e.target;
    const nextInput = index + 1;

    // Move focus to next input if maxLength is reached
    if (value.length >= maxLength && nextInput < inputs.current.length) {
      inputs.current[nextInput]?.focus();
    }

     // Automatically verify OTP after last input is entered
     if (index === inputs.current.length - 1 && value.length === maxLength) {
      verifyOtp();
    }

  };

  const getOtpValues = (): string => {
    return inputs.current.map(input => input?.value || "").join('');
  };

  const verifyOtp = () => {
    const otpValues = inputs.current.map(input => input?.value || "");
    const allInputsFilled = otpValues.every(value => value !== "");

    if (allInputsFilled) {
      const otp = otpValues.join('');
      console.log("OTP:", otp);
      setTimeout(() => {
        setVerifyingOTP(false);
        handleNextPage();
      }, 2000);
    } else {
      setVerifyingOTP(false);
      alert("Please fill all OTP fields.");
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 mt-16">
        <div className="text-gray-700 text-3xl font-bold">Confirm Email</div>
        <form>
          <div>{hideEmail(signUpData.email)}</div>
          <div className="flex items-center gap-4">
            {Array(6).fill(0).map((_, index) => (
              <input
                key={index}
                type="text"
                className="appearance-none text-center text-gray-700 focus:outline-none focus:shadow-outline focus:border-blue-400 p-2 w-8 h-12 md:w-12 md:h-12 border-2 border-gray-200 rounded-[8px]"
                maxLength={1}
                ref={(el) => { inputs.current[index] = el }}
                onChange={(e) => handleChange(e, index)}
              />
            ))}
          </div>
          <div className="text-xs mt-2">
            <span className="text-[#3B82F6] flex justify-end cursor-pointer">resend OTP</span>
          </div>

          {/* <button className="mt-4 p-2 text-white w-full bg-amber-300 border-2 border-amber-300 rounded-[8px]" type="submit">Verify</button> */}
          <div className="mt-4">
            {verifyingOTP && <Loader />}
          </div>
          
        </form>
      </div>
    </>
  );
}

export default ConfirmEmail;
