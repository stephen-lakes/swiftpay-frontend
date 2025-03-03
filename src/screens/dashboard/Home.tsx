import Navbar from "../../components/Navbar"
import EyeOffIcon from ".././../assets/svg/eyesoff-outlined.svg"
import EyeOnIcon from ".././../assets/svg/eyeson-outlined.svg"
import SendIcon from ".././../assets/svg/send.svg"
import BankIcon from ".././../assets/svg/bank.svg"


const Home = () => {
  return (
    <>
      <div className="mx-auto mt-8 px-3 py-6 w-full max-w-[400px] h-[90vh] relative border-gray-300 md:border">
        <div>Hi, Stephen</div>
        <div className="bg-green-500 text-white rounded p-3 flex flex-col gap-4">
          <div className="flex">
            <div>
              Available Balance
              <img src={EyeOffIcon} alt="" />
            </div>
            <div className="ml-auto">
              Transaction History
            </div>
          </div>
          <div className="flex">
            <div>
              ₦100,000,000
            </div>
            <div className="rounded-full px-3 py-2 text-green-300 bg-white border-white border ml-auto">
              + Add Money
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3 mt-10">
          <div className="flex flex-col justify-center items-center bg-gray-200 w-16 h-16 rounded-2xl">
            <div>
              <img src={SendIcon} alt="" />
            </div>
            <div className="text-xs">Transfer</div>
          </div>

          <div className="flex flex-col justify-center items-center bg-gray-200 w-16 h-16 rounded-2xl">
            <div>
              <img src={BankIcon} alt="" />
            </div>
            <div className="text-xs">Bank</div>
          </div>

          <div className="flex flex-col justify-center items-center bg-gray-200 w-16 h-16 rounded-2xl">
            <div>
              <img src={BankIcon} alt="" />
            </div>
            <div className="text-xs">Airtime</div>
          </div>

          <div className="flex flex-col justify-center items-center bg-gray-200 w-16 h-16 rounded-2xl">
            <div>
              <img src={BankIcon} alt="" />
            </div>
            <div className="text-xs">Data</div>
          </div>

          <div className="flex flex-col justify-center items-center bg-gray-200 w-16 h-16 rounded-2xl">
            <div>
              <img src={BankIcon} alt="" />
            </div>
            <div className="text-xs">Electricity</div>
          </div>

        </div>

        <Navbar />
      </div>
    </>
  )
}

export default Home