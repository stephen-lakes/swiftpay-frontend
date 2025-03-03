import HomeIcon from "../assets/svg/home.svg"
import UserIcon from "../assets/svg/profile.svg"
import { useState } from "react"

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('home');
    
  return (
    <>
        {/* USE EVENT DELEGATIO FOR THE LINKS */}
        <div className="p-3 flex justify-around absolute bottom-3 left-3 right-3 bg-amber-400 rounded-full">
            
            <div onClick={() => setActiveTab("home")} className="cursor-pointer flex flex-col items-center">
                <div>
                    <img src={HomeIcon} alt="" />
                </div>
                <div className={`${activeTab === "home" ? "font-semibold text-white": ""}`}>Home</div>
            </div>
        
        
            <div onClick={() => setActiveTab("cards")} className=" cursor-pointer flex flex-col items-center">
                <div>
                    <img src={HomeIcon} alt="" />
                </div>
                <div className={`${activeTab === "cards" ? "font-semibold text-white": ""}`}>Cards</div>
            </div>
        
        
            <div onClick={() => setActiveTab("profile")} className="cursor-pointer flex flex-col items-center">
                <div>
                    <img src={UserIcon} alt="" />
                </div>
                <div className={`${activeTab === "profile" ? "font-semibold text-white": ""}`}>Profile</div>
            </div>
            
        </div>
    </>
  )
}

export default Navbar