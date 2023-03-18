
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
           <Sidebar />
          <Routes >
              <Route path="/"  element={<Home />} />
              <Route path='/about' element={<About /> } /> 
              <Route path='/layout' element={<Layout /> } />       
          </Routes>
        </Router>
          
      </>
  );
}

export default App;
