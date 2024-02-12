import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Forgot from './pages/Forgot';
import Userprofile from './pages/admin/UserProfile';
import Navbar from './components/admin/Navabar';
import Dashboard from './pages/admin/Dashboard';
import UserNavbar from './components/user/Navbar';
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <UserNavbar/>
        <Routes>
          <Route path="/" element={<h1>Membership</h1>} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path='/userprofile' element={<Userprofile/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
