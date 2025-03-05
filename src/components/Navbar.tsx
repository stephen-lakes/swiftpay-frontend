import HomeIcon from "../assets/svg/home.svg"
import UserIcon from "../assets/svg/profile.svg"
import CreditCardIcon from "../assets/svg/creditcard.svg"
import { useState } from "react"

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('home');
    
  return (
    <>
        {/* USE EVENT DELEGATIO FOR THE LINKS */}
        <div className="p-3 flex justify-around absolute bottom-0 left-3 right-3 bg-amber-400 rounded-full">
            
            <div onClick={() => setActiveTab("home")} className="cursor-pointer flex flex-col items-center">
                <div>
                    {activeTab === "home" ? 
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            >
                                <g fill="none" stroke="white" strokeWidth="2">
                                <path
                                    strokeLinecap="round"
                                    d="M22 22H2m0-11l8.126-6.5a3 3 0 0 1 3.748 0L22 11m-6.5-5.5v-2A.5.5 0 0 1 16 3h2.5a.5.5 0 0 1 .5.5v5M4 22V9.5M20 22V9.5"
                                />
                                <path d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14c-1.414 0-2.121 0-2.56.44C9 14.878 9 15.585 9 17v5m5-12.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" />
                                </g>
                        </svg>
                     : 
                        <img src={HomeIcon} alt="" />
                    }
                    
                </div>
                <div className={`text-xs${activeTab === "home" ? "font-semibold text-white": ""}`}>Home</div>
            </div>
        
        
            <div onClick={() => setActiveTab("cards")} className=" cursor-pointer flex flex-col items-center">
                <div>
                    {activeTab === "cards" ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#ffffff" d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v1h17V8a2 2 0 0 0-2-2zM3 17a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-5H3zm2-1h4v1H5zm6 0h3v1h-3zm-8-6v1h17v-1z"/>
                        </svg>
                    :
                        <img src={CreditCardIcon} alt="" />
                    }
                </div>
                <div className={`text-xs ${activeTab === "cards" ? "font-semibold text-white": ""}`}>Cards</div>
            </div>
        
        
            <div onClick={() => setActiveTab("profile")} className="cursor-pointer flex flex-col items-center">
                <div>
                    {activeTab === "profile" ? 
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.0407 16.5626C16.8508 14.5056 15.0172 13.0306 12.8774 12.3314C13.9358 11.7013 14.7582 10.7411 15.2182 9.59841C15.6781 8.45569 15.7503 7.19358 15.4235 6.0059C15.0968 4.81821 14.3892 3.77063 13.4094 3.02401C12.4296 2.2774 11.2318 1.87305 10 1.87305C8.76821 1.87305 7.57044 2.2774 6.59067 3.02401C5.6109 3.77063 4.90331 4.81821 4.57654 6.0059C4.24978 7.19358 4.32193 8.45569 4.78189 9.59841C5.24186 10.7411 6.06422 11.7013 7.12268 12.3314C4.98284 13.0298 3.14925 14.5048 1.9594 16.5626C1.91577 16.6337 1.88683 16.7129 1.87429 16.7954C1.86174 16.8779 1.86585 16.9621 1.88638 17.043C1.9069 17.1239 1.94341 17.1999 1.99377 17.2664C2.04413 17.333 2.10731 17.3888 2.17958 17.4305C2.25185 17.4723 2.33175 17.4991 2.41457 17.5095C2.49738 17.5199 2.58143 17.5135 2.66176 17.4909C2.74209 17.4683 2.81708 17.4298 2.88228 17.3777C2.94749 17.3256 3.00161 17.2609 3.04143 17.1876C4.51331 14.6439 7.11487 13.1251 10 13.1251C12.8852 13.1251 15.4867 14.6439 16.9586 17.1876C16.9985 17.2609 17.0526 17.3256 17.1178 17.3777C17.183 17.4298 17.258 17.4683 17.3383 17.4909C17.4186 17.5135 17.5027 17.5199 17.5855 17.5095C17.6683 17.4991 17.7482 17.4723 17.8205 17.4305C17.8927 17.3888 17.9559 17.333 18.0063 17.2664C18.0566 17.1999 18.0932 17.1239 18.1137 17.043C18.1342 16.9621 18.1383 16.8779 18.1258 16.7954C18.1132 16.7129 18.0843 16.6337 18.0407 16.5626ZM5.62503 7.50014C5.62503 6.63485 5.88162 5.789 6.36235 5.06954C6.84308 4.35008 7.52636 3.78932 8.32579 3.45819C9.12522 3.12706 10.0049 3.04042 10.8535 3.20923C11.7022 3.37804 12.4818 3.79472 13.0936 4.40657C13.7055 5.01842 14.1222 5.79797 14.291 6.64663C14.4598 7.49529 14.3731 8.37495 14.042 9.17438C13.7109 9.9738 13.1501 10.6571 12.4306 11.1378C11.7112 11.6185 10.8653 11.8751 10 11.8751C8.84009 11.8739 7.72801 11.4125 6.90781 10.5924C6.0876 9.77215 5.62627 8.66008 5.62503 7.50014Z" 
                        fill="#ffffff"/>
                    </svg>
                    :
                    <img src={UserIcon} alt="" />
                    }
                </div>
                <div className={`text-xs ${activeTab === "profile" ? "font-semibold text-white": ""}`}>Profile</div>
            </div>
            
        </div>
    </>
  )
}

export default Navbar