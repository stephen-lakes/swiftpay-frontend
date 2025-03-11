import React from 'react'

const SwiftPayKeyboard: React.FC = () => {
  return (
    <>
       KEYBAORD
       Key board comes up to confirm
        transaction with PIN.
        This component can be moved to its component
    </>
  )
}

export default SwiftPayKeyboard

// import React, { useState } from 'react';

// interface KeypadProps {
//   onNumberClick: (number: number) => void;
// }

// const Keypad: React.FC<KeypadProps> = ({ onNumberClick }) => {
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//   return (
//     <div className="grid grid-cols-3 gap-1 border border-gray-300 max-w-xs mx-auto">
//       {numbers.map((number) => (
//         <button
//           key={number}
//           onClick={() => onNumberClick(number)}
//           className="p-3 text-xl bg-gray-200 border border-gray-300"
//         >
//           {number}
//         </button>
//       ))}
//       <div className="col-span-3 flex justify-center">
//         <button
//           onClick={() => onNumberClick(0)}
//           className="p-4 col-span-2 text-xl bg-gray-200 border border-gray-300 w-full"
//         >
//           0
//         </button>
//         <button
//           onClick={() => onNumberClick(0)}
//           className="p-4 text-xl bg-gray-200 border border-gray-300 w-full"
//         >
//           X
//         </button>
//       </div>
//     </div>
//   );
// };


// export const PinInput: React.FC = () => {
//   const [pin, setPin] = useState<string>('');

//   const handleNumberClick = (number: number) => {
//     if (pin.length < 4) {
//       setPin((prevPin) => prevPin + number);
//     }
//   };

//   return (
//     <div className="text-center">
//       <div className="flex justify-center mb-4">
//         {Array.from({ length: 4 }, (_, index) => (
//           <span key={index} className="text-3xl mx-2">{pin[index]}</span>
//         ))}
//       </div>
//       <Keypad onNumberClick={handleNumberClick} />
//     </div>
//   );
// };



// export default Keypad;
