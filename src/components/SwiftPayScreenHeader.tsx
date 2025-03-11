import React from 'react'
import { useNavigate } from 'react-router-dom';

interface SwiftPayScreenHeaderProps {
    screenTitle: string;
    // actionButton: () => void;
}


const SwiftPayScreenHeader: React.FC<SwiftPayScreenHeaderProps> = ({screenTitle}) => {
  const navigate = useNavigate()
  
const goBack = () => {
  navigate(-1)
}

  return (
    <>
        <header className="mt-10 mb-3 px-3 flex items-center">
            <p className="cursor-pointer text-2xl flex items-center justify-center" onClick={goBack}>
              &larr;
            </p>
            <h1 className="w-full text-2xl font-bold text-center text-[#06244B] capitalize">{screenTitle}</h1>
        </header>
    </>
  )
}

export default SwiftPayScreenHeader