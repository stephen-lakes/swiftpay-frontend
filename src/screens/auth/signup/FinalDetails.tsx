import React, { ChangeEvent, FormEvent } from 'react';

// Define the types for the props
interface SignUpData {
  firstname: string;
  lastname: string;
  phoneNumber?: string; // Optional field
}

interface FinalDetailsProps {
  signUpData: SignUpData;
  handleNextPage: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FinalDetails: React.FC<FinalDetailsProps> = ({ signUpData, handleNextPage, handleChange }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("FORM DATA", signUpData);
    handleNextPage();
  }

  return (
    <>
    
    <div className="mt-12 flex justify-center">
        <div className="w-full min-w-72 max-w-[400px]">
            <div className="flex flex-col items-center gap-4 font-semibold">
                
            </div>

            <div className="px-6 mt-4 flex-center">
                <div className="mt-12 flex flex-col items-center gap-5">
                <div className="text-gray-700 text-3xl font-bold">FinalDetails</div>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <div className="form-group relative">
                    <label className="text-gray-500">Firstname</label>
                    <input
                      className="appearance-none text-gray-700 focus:outline-none focus:shadow-outline focus:border-blue-400 p-2 w-full border-2 border-gray-200 rounded-[8px]"
                      placeholder="firstname"
                      name="firstname"
                      value={signUpData.firstname}
                      onChange={handleChange}
                      type="text"
                    />
                  </div>

                  <div className="form-group relative">
                    <label className="text-gray-500">Lastname</label>
                    <input
                      className="appearance-none text-gray-700 focus:outline-none focus:shadow-outline focus:border-blue-400 p-2 w-full border-2 border-gray-200 rounded-[8px]"
                      placeholder="lastname"
                      name="lastname"
                      value={signUpData.lastname}
                      onChange={handleChange}
                      type="text"
                    />
                  </div>

                  <div className="form-group relative">
                    <label className="text-gray-500">Phone number (optional)</label>
                    <input
                      className="appearance-none text-gray-700 focus:outline-none focus:shadow-outline focus:border-blue-400 p-2 w-full border-2 border-gray-200 rounded-[8px]"
                      placeholder="phone"
                      name="phoneNumber"
                      value={signUpData.phoneNumber}
                      onChange={handleChange}
                      type="text"
                    />
                  </div>

                  <button
                    type="submit"
                    className="p-2 text-white w-full bg-amber-300 border-2 border-amber-300 rounded-[8px]"
                  >
                    <span>Finish</span>
                  </button>
                </form>
            </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default FinalDetails;
