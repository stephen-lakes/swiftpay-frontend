import { ChangeEvent, FormEvent, useState } from "react"
import sPayLogo from "../../../assets/img/spaylogo1.png"


const SignUpPage = () => {
    const [signUpFormData, setSignUpFormData] = useState({
        email: '',
        // phoneNumber: '',
        firstname: '',
        lastname: '',
        password: '',
        confirmPassword: '',
    })

    const handleChnage = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        console.log(name)
        console.log(value)
        setSignUpFormData({
            ...signUpFormData,
            [name]: value,
        })
    }
    

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(signUpFormData)
    }


  return (
    <>
    <div className="mt-12 flex justify-center">
        <div className="w-full min-w-72 max-w-[400px]">
            <div className="flex flex-col items-center gap-4 font-semibold">
                <div className="w-[200px]">
                    <img src={sPayLogo} alt="" />
                </div>
                <h1 className="text-center text-gray-700 text-3xl font-bold">Sign Up</h1>
            </div>

            <div className="px-6 mt-4 flex-center">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="form-group relative">
                        <label className="text-gray-500">Email</label>
                        <input 
                            className="appearance-none text-gray-700 focus:outline-none focus:shadow-outline focus:border-blue-400  p-2 w-full border-2 border-gray-200 rounded-[8px]" 
                            placeholder="Enter your email or phone number"
                            name="email"
                            value={signUpFormData.email}
                            onChange={handleChnage}
                            // type={showPassword ? "text" : "password"}
                            
                        />
                    </div>

                    <div className="form-group relative">
                        <label className="text-gray-500">Password</label>
                        <input 
                            className="appearance-none text-gray-700 focus:outline-none focus:shadow-outline focus:border-blue-400  p-2 w-full border-2 border-gray-200 rounded-[8px]" 
                            placeholder="Enter your password"
                            name="password"
                            value={signUpFormData.password}
                            onChange={handleChnage}
                            // type={showPassword ? "text" : "password"}
                            type="password"
                        />
                    </div>

                    <div className="form-group relative">
                        <label className="text-gray-500">Confirm password</label>
                        <input 
                            className="appearance-none text-gray-700 focus:outline-none focus:shadow-outline focus:border-blue-400  p-2 w-full border-2 border-gray-200 rounded-[8px]" 
                            placeholder="Confirm your password"
                            name="confirmPassword"
                            value={signUpFormData.confirmPassword}
                            onChange={handleChnage}
                            // type={showPassword ? "text" : "password"}
                            type="password"

                        />
                    </div>

                    <button
                        type="submit"
                        className="p-2 text-white w-full bg-amber-300 border-2 border-amber-300 rounded-[8px]"
                    >
                        <span>Sign up</span>
                    </button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default SignUpPage