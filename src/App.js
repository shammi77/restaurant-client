
import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Menu from './Pages/Menu/MenuList';

import { Routes, Route } from 'react-router-dom';
import Footer from './Pages/Shared/Footer';
import MenuItems from './Pages/Menu/MenuItems';
import MenuList from './Pages/Menu/MenuList'
import MenuTandoori from './Pages/Menu/MenuTandoori';
import MenuChild from './Pages/Menu/MenuChild';
import MenuClassic from './Pages/Menu/MenuClassic';
// import NotFound from './Pages/NotFound/NotFound';

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
      <Route path="menulist" element={<MenuList />}/>
      <Route path="menutandoori" element={<MenuTandoori />}/>
      <Route path="menuchild" element={<MenuChild />}/>
      <Route path="menuclassic" element={<MenuClassic />}/>
      <Route path="menuitems" element={<MenuItems />}/>
     </Routes>
     </div>
     <Footer className="footer  footer-center p-10   bg-primary text-primary-content"></Footer>
     {/* <Route path="*" element= {<NotFound></NotFound>}></Route> */}
    </div>
  );
}

export default App;
