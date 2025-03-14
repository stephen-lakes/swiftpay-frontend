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
  };

  return (
    <div className="mt-12 flex justify-center">
      <div className="w-full min-w-72 max-w-[400px]">
        <div className="px-6 mt-4 flex-center">
          <div className="mt-12 flex flex-col items-center gap-5">
            <div className="text-gray-700 text-3xl font-bold">Final Details</div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="form-group relative">
                <label className="text-gray-500">Firstname</label>
                <input
                  className="appearance-none text-gray-700 focus:outline-none focus:shadow-outline focus:border-purple-400 p-2 w-full border-2 border-gray-200 rounded-[8px]"
                  placeholder="Firstname"
                  name="firstname"
                  value={signUpData.firstname}
                  onChange={handleChange}
                  type="text"
                />
              </div>
              <div className="form-group relative">
                <label className="text-gray-500">Lastname</label>
                <input
                  className="appearance-none text-gray-700 focus:outline-none focus:shadow-outline focus:border-purple-400 p-2 w-full border-2 border-gray-200 rounded-[8px]"
                  placeholder="Lastname"
                  name="lastname"
                  value={signUpData.lastname}
                  onChange={handleChange}
                  type="text"
                />
              </div>
              <div className="form-group relative">
                <label className="text-gray-500">Phone number (optional)</label>
                <input
                  className="appearance-none text-gray-700 focus:outline-none focus:shadow-outline focus:border-purple-400 p-2 w-full border-2 border-gray-200 rounded-[8px]"
                  placeholder="Phone"
                  name="phoneNumber"
                  value={signUpData.phoneNumber}
                  onChange={handleChange}
                  type="text"
                />
              </div>
              <button
                className="p-2 text-white w-full bg-purple-600 border-2 border-purple-600 rounded-[8px]"
              >
                <span>Finish</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalDetails;
