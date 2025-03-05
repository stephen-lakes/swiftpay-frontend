import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthIndex from './screens/auth/signup/Index';
import SignIn from './screens/auth/signin/Index';
import Home from './screens/dashboard/Home';
import Profile from './screens/dashboard/Profile';
import Cards from './screens/dashboard/Cards';
import SwiftPayTransfer from './screens/SwiftPayTransfer';
import BankTransfer from './screens/BankTransfer';
import Electricity from './screens/Electricity';
import Data from './screens/Data';
import Airtime from './screens/Airtime';
import Dashboard from './screens/dashboard/Index';

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          {/* TODO: Landing page for the base route "/" */}
          <Route path="/" element={<SignIn />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="cards" element={<Cards />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="/transfer" element={<SwiftPayTransfer />} />
          <Route path="/bank-transfer" element={<BankTransfer />} />
          <Route path="/airtime" element={<Airtime />} />
          <Route path="/data" element={<Data />} />
          <Route path="/electricity" element={<Electricity />} />

          <Route path="/auth">
            <Route path="signup" element={<AuthIndex />} />
            <Route path="signin" element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
