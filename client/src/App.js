import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Forgot from './pages/Forgot';
import Userprofile from './pages/admin/UserProfile';
import Navbar from './components/admin/Navabar';
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<h1>Membership</h1>} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path='/userprofile' element={<Userprofile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
