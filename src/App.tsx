import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthIndex from './screens/auth/signup/Index';
import Home from './screens/dashboard/Home';
import SignInPage from './screens/auth/signin/SignInPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthIndex />} />
          <Route path="/dashboard" element={<Home />} />
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
