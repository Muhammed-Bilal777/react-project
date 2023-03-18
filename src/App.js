
import './App.scss';
import {  BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About/';
import Home from './components/Home/';
import Sidebar from './components/Sidebar';
import Contact from './components/Contact';
 
function App() {
  return (
      <>
        <Router>
           <Sidebar />
           <Layout />
          <Routes >
              <Route path="/"  element={<Home />} />
              <Route path='/about' element={<About /> } /> 
              <Route path='/contact' element={<Contact />} />       
          </Routes>
        </Router>
          
      </>
  );
}

export default App;
