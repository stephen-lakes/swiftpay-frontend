import { useState } from "react"
import profileIcon from "../../assets/svg/profile.svg"


const AuthInput = () => {
    const [password, setpassword] = useState('')
    const [showPassword, setshowPassword] = useState(false)
    
        const togglePasswordVisibility = ()=> {
            setshowPassword(!showPassword)
        }
    
  return (
    <>
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
        <img src={profileIcon} alt="" 
            className="absolute top-3 right-2"
            onClick={togglePasswordVisibility}
        />  
    </div>

    </>
  )
}

export default AuthInput