import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/signin.jsx';
import SignUp from './components/signup.jsx';
import Navbar from './sections/Navbar.jsx';
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;