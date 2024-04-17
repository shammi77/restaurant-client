
import './App.css';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="contact" element={<Contact />}/>
     </Routes>
    </div>
  );
}

export default App;
