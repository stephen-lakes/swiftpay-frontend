import AuthIndex from './screens/auth/signup/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthIndex />} />
        <Route path='auth' element={<AuthIndex />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
