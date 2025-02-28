import sPayLogo from "../../../assets/img/spaylogo1.png"


const SignUpPage = () => {


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
                <form className="flex flex-col gap-4">
                    <div className="form-group relative">
                        <label className="text-gray-500">Email/Phone</label>
                        <input 
                            className="appearance-none text-gray-700 focus:outline-none focus:shadow-outline focus:border-blue-400  p-2 w-full border-2 border-gray-200 rounded-[8px]" 
                            placeholder="Enter your email or phone number"
                            // type={showPassword ? "text" : "password"}
                            // onChange={(e)=> setpassword(e.target.value)}
                            // value={password}
                        />
                    </div>

                    <div className="form-group relative">
                        <label className="text-gray-500">Password</label>
                        <input 
                            className="appearance-none text-gray-700 focus:outline-none focus:shadow-outline focus:border-blue-400  p-2 w-full border-2 border-gray-200 rounded-[8px]" 
                            placeholder="Enter your password"
                            // type={showPassword ? "text" : "password"}
                            // onChange={(e)=> setpassword(e.target.value)}
                            // value={password}
                        />
                    </div>

                    <div className="form-group relative">
                        <label className="text-gray-500">Confirm password</label>
                        <input 
                            className="appearance-none text-gray-700 focus:outline-none focus:shadow-outline focus:border-blue-400  p-2 w-full border-2 border-gray-200 rounded-[8px]" 
                            placeholder="Confirm your password"
                            // type={showPassword ? "text" : "password"}
                            // onChange={(e)=> setpassword(e.target.value)}
                            // value={password}
                        />
                    </div>

                    <button
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