import React from "react";
import { useNavigate } from "react-router-dom";

interface SwiftPayMiniCardProp {
    icon: string;
    title: string;
    nextPage?: string
}

const SwiftPayMiniCard: React.FC<SwiftPayMiniCardProp> = ({ icon, title, nextPage}) => {
  const navigate = useNavigate()
  const goToPage = () => {
    navigate(`/${nextPage}`)
  }

  return (
    <>
        <div 
          onClick={goToPage}
          className="flex flex-col justify-center items-center bg-gray-200 w-16 h-16 rounded-2xl cursor-pointer">
            <div>
              <img src={icon} alt="" />
            </div>
            <div className="text-xs capitalize">{title}</div>
        </div>
    </>
  )
}

export default SwiftPayMiniCard