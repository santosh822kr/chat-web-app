import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import Messenger from './pages/messenger/Messenger';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { user } = useContext(AuthContext);

  const HomeRoute = () => {
    return user ? <Home /> : <Register />;
  };
  const LoginRoute = () => {
    return user ? <Navigate to='/' /> : <Login />;
  };
  const RegisterRoute = () => {
    return user ? <Navigate to='/' /> : <Register />;
  };
  const MessengerRoute = () => {
    return !user ? <Navigate to='/' /> : <Messenger />;
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeRoute />} />
        <Route path='/login' element={<LoginRoute />} />
        <Route path='/register' element={<RegisterRoute />} />
        <Route path='/messenger' element={<MessengerRoute />} />
        <Route path='/profile/:username' element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
