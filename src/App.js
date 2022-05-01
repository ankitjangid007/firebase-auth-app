import { Container } from 'react-bootstrap';
import Signup from './components/Signup';
import 'bootstrap/dist/css/bootstrap.css';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import PrivateRoute from './components/PrivateRoute';
import UpdateProfile from './components/UpdateProfile';

function App() {
  return (
    <Container className='d-flex align-items-center justify-content-center' style={{minHeight: "100vh"}}>
        <div className="w-100" style={{maxWidth: "400px"}}>
          <Router>
            <AuthProvider>
              <Routes>
                <Route 
                  exact path='/' 
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  } 
                />
                <Route 
                  path='/update-profile' 
                  element={
                    <PrivateRoute>
                      <UpdateProfile />
                    </PrivateRoute>
                  } 
                />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>
  );
}

export default App;
