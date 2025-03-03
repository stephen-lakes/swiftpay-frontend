import { useRef, ChangeEvent } from "react";
import { hideEmail } from "../../../utils/utils";

// Define props types
interface ConfirmEmailProps {
  handleNextPage: () => void;
  signUpData: { email: string };
  handlePreviousPage: () => void;
}

const ConfirmEmail: React.FC<ConfirmEmailProps> = ({ handleNextPage, signUpData, handlePreviousPage }) => {
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { maxLength, value } = e.target;
    const nextInput = index + 1;

    // Move focus to next input if maxLength is reached
    if (value.length >= maxLength && nextInput < inputs.current.length) {
      inputs.current[nextInput]?.focus();
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 mt-16">
        <div className="text-gray-700 text-3xl font-bold">Confirm Email</div>
        <form>
          {/* <div>{hideEmail(signUpData.email)}</div> */}
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
            <span className="text-blue-300 flex justify-end cursor-pointer">resend OTP</span>
          </div>
        </form>
      </div>
    </>
  );
}

export default ConfirmEmail;
