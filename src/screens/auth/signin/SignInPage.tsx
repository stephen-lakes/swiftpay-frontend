import profileIcon from "../../../assets/svg/profile.svg"

const SignInPage = () => {
  return (
    <>
        <div className="flex flex-col items-center gap-4 font-semibold">
            <p>{`Swify--->pay`}</p>
            <div className="flex items-center justify-center w-10 h-10 border-1 border-gray-200 bg-gray-100 rounded-full"><img src={profileIcon} alt="" /></div>
            <p>STEPHEN(ste...@gmail.com)</p>
        </div>

        <div className="px-6 mt-4 flex-center">
            <form action="" className="flex flex-col gap-4">
                <div className="input-wrap">
                    <input className="p-2 w-full border-2 border-gray-200 rounded-[8px]" type="text" name="" id="" />
                    <div className="my-4 flex justify-end text-xs capitalize">
                        forgot password
                    </div>
                </div>
                <div className="input-wrap">
                    <input className="p-2  text-white w-full bg-amber-300 border-2 border-amber-300 rounded-[8px]" type="submit" name="" id="" />
                </div>
            </form>
        </div>


    </>
  )
}

export default SignInPage