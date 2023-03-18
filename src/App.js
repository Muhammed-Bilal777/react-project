
import './App.scss';
import {  BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About/';
import Home from './components/Home/';
import Sidebar from './components/Sidebar';
 
function App() {
  return (
      <>
        <Router>
          <nav>
          <Link to="/">Home </Link>
          <Link to="/about">ABout</Link>
          <Link to="/layout">Layout</Link>
          <Link to="/sidebar">sidebar</Link>
          </nav>
          <Routes>
              <Route path="/"  element={<Home />} />
              <Route path='/about' element={<About /> } /> 
              <Route path='/home' element={<Home /> } /> 
              <Route path='/sidebar' element={<Sidebar /> } /> 
          </Routes>
        </Router>
          
      </>
  );
}

export default App;
