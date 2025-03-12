// import React, { useState, useEffect, useRef } from 'react'

// const Carousel: React.FC = (props) => {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isAnimating, setIsAnimating] = useState(false)
//   const timeoutRef = useRef(null)

//   const items = props.items

//   const getNextSlideIndex = (index: number) => (index + 1) % items.length
//   const getPrevSlideIndex = (index: number) => (index - 1 + items.length) % items.length

//   const goToNextSlide = () => {
//     if (isAnimating) return
//     setIsAnimating(true)
//     setCurrentSlide(getNextSlideIndex)
//   }

//   const goToPrevSlide = () => {
//     if (isAnimating) return
//     setIsAnimating(true)
//     setCurrentSlide(getPrevSlideIndex)
//   }

//   useEffect(() => {
//     timeoutRef.current = setTimeout(goToNextSlide, 3000) // Change slide every 3 seconds

//     return () => {
//       if (timeoutRef.current) clearTimeout(timeoutRef.current)
//     }
//   }, [currentSlide])

//   useEffect(() => {
//     const timeout = setTimeout(() => setIsAnimating(false), 700) // Duration should match the transition duration

//     return () => clearTimeout(timeout)
//   }, [currentSlide])

//   return (
//     <div id="default-carousel" className="relative w-full overflow-hidden">
//       <div
//         className="relative h-56 rounded-lg md:h-96 flex transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         {items.map((item, index) => (
//           <div key={index} className="w-full flex-shrink-0">
//             <img src={item} className="block w-full" alt={`Slide ${index + 1}`} />
//           </div>
//         ))}
//       </div>
//       <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
//         {items.map((_, index) => (
//           <button
//             key={index}
//             type="button"
//             className={`w-3 h-3 rounded-full ${
//               index === currentSlide ? 'bg-white' : 'bg-gray-400'
//             }`}
//             aria-label={`Slide ${index + 1}`}
//             onClick={() => setCurrentSlide(index)}
//           ></button>
//         ))}
//       </div>
//       <button
//         type="button"
//         className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         onClick={goToPrevSlide}
//       >
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white group-focus:outline-none">
//           <svg
//             className="w-4 h-4 text-white rtl:rotate-180"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 6 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M5 1L1 5l4 4"
//             />
//           </svg>
//           <span className="sr-only">Previous</span>
//         </span>
//       </button>
//       <button
//         type="button"
//         className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         onClick={goToNextSlide}
//       >
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white group-focus:outline-none">
//           <svg
//             className="w-4 h-4 text-white rtl:rotate-180"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 6 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="m1 9 4-4-4-4"
//             />
//           </svg>
//           <span className="sr-only">Next</span>
//         </span>
//       </button>
//     </div>
//   )
// }

// export default Carousel
