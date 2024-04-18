
import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Menu from './Pages/Menu/Menu';

import { Routes, Route } from 'react-router-dom';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <div className="mt-10">
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="menu" element={<Menu />}/>
      <Route path="contact" element={<Contact />}/>
     </Routes>
     </div>
     <Footer className="footer  footer-center p-10   bg-primary text-primary-content"></Footer>
    </div>
  );
}

export default App;
