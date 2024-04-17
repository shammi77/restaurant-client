
import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Menu from './Pages/Menu/Menu';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="menu" element={<Menu />}/>
      <Route path="contact" element={<Contact />}/>
     </Routes>
    </div>
  );
}

export default App;
