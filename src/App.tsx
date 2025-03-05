import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthIndex from './screens/auth/signup/Index';
import Home from './screens/dashboard/Home';
import SignInPage from './screens/auth/signin/SignInPage';
import Profile from './screens/dashboard/Profile';
import Cards from './screens/dashboard/Cards';
import SwiftPayTransfer from './screens/SwiftPayTransfer';
import BankTransfer from './screens/BankTransfer';
import Electricity from './screens/Electricity';
import Data from './screens/Data';
import Airtime from './screens/Airtime';

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<AuthIndex />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/transfer" element={<SwiftPayTransfer />} />
          <Route path="/bank-transfer" element={<BankTransfer />} />
          <Route path="/airtime" element={<Airtime />} />
          <Route path="/data" element={<Data />} />
          <Route path="/electricity" element={<Electricity />} />
          
          <Route path="/auth">
            <Route path="signup" element={<AuthIndex />} />
            <Route path="signin" element={<SignInPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
