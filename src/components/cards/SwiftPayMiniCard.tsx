import React from "react";

interface SwiftPayMiniCardProp {
    icon: string;
    title: string;
}

const SwiftPayMiniCard: React.FC<SwiftPayMiniCardProp> = ({ icon, title}) => {
  return (
    <>
        <div className="flex flex-col justify-center items-center bg-gray-200 w-16 h-16 rounded-2xl">
            <div>
              <img src={icon} alt="" />
            </div>
            <div className="text-xs capitalize">{title}</div>
        </div>
    </>
  )
}

export default SwiftPayMiniCard