import { useState } from "react"
import profileIcon from "../../../assets/svg/profile.svg"
import eyesOffIcon from "../../../assets/svg/eyesoff-outlined.svg"
import eyesOnIcon from "../../../assets/svg/eyeson-outlined.svg"

const SignInPage = () => {
    const [password, setpassword] = useState('')
    const [showPassword, setshowPassword] = useState(false)

    const togglePasswordVisibility = ()=> {
        setshowPassword(!showPassword)
    }

  return (
    <>
        <div className="flex flex-col items-center gap-4 font-semibold">
            <p>{`Swify--->pay`}</p>
            <div className="flex items-center justify-center w-10 h-10 border-1 border-gray-200 bg-gray-100 rounded-full"><img src={profileIcon} alt="" /></div>
            <p>STEPHEN(ste...@gmail.com)</p>
        </div>

        <div className="px-6 mt-4 flex-center">
            <form action="" className="flex flex-col gap-4">
                <div className="form-group relative">
                    <input 
                        className="p-2 w-full border-2 border-gray-200 rounded-[8px]" 
                        placeholder="Enter password"
                        type={showPassword ? "text" : "password"}
                        onChange={(e)=> setpassword(e.target.value)}
                        value={password}
                    />
                    <div className="my-2 flex justify-end text-xs capitalize">
                        forgot password
                    </div>
                    <img src={showPassword? eyesOnIcon: eyesOffIcon} alt="" 
                        className="absolute top-3 right-2"
                        onClick={togglePasswordVisibility}
                    />  
                </div>

                <div className="form-group">
                    <input className="p-2 text-white w-full bg-amber-300 border-2 border-amber-300 rounded-[8px]" type="submit" name="" id="" />
                </div>
            </form>
        </div>


    </>
  )
}

export default SignInPage