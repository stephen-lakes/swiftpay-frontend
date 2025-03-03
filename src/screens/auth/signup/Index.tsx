import { ChangeEvent, useState } from "react"
import SignUpPage from "./SignUpPage";
import ConfirmEmail from "./ConfirmEmail";

const AuthIndex = () => {
    const [page, setPage] = useState(1);
    const [signUpData, setSignUpData] = useState({
        email: '',
        phoneNumber: '',
        firstname: '',
        lastname: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        console.log(name)
        console.log(value)
        setSignUpData({
            ...signUpData,
            [name]: value,
        })
    }

    const handleNextPage = () => {
        setPage(page + 1)
    }
    const handlePreviousPage = () => {
        setPage(page - 1)
    }

    const displayPage = () => {
      if (page === 1) return <SignUpPage handleNextPage={handleNextPage} signUpData={signUpData} handleChange={handleChange} />
      if (page === 2) return <ConfirmEmail handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} />
      if (page === 3) return <> STEP 3</>
    }

  return (
    <div>{displayPage()}</div>
  )
}

export default AuthIndex