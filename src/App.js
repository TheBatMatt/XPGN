import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages Import
import Home from './pages/Homepage'
import Login from './pages/Login'
import Signup from './pages/Signup'


function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path="Login" element={<Login/>}/>
        <Route exact path="Signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
