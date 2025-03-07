import React from 'react'

interface SwiftPayScreenHeaderProps {
    screenTitle: string;
    // actionButton: () => void;
}

const SwiftPayScreenHeader: React.FC<SwiftPayScreenHeaderProps> = ({screenTitle}) => {
  return (
    <>
        <header className="mt-10 mb-3 px-3 flex items-center">
            <p className="cursor-pointer" onClick={() => {}}>Back</p>
            <h1 className="w-full text-2xl font-bold text-center text-[#06244B] capitalize">{screenTitle}</h1>
        </header>
    </>
  )
}

export default SwiftPayScreenHeader