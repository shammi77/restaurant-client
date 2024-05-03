import './App.css';
import About from './Pages/About/About';

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
import MenuBiriani from './Pages/Menu/MenuBiriani';
import MenuBread from './Pages/Menu/MenuBread';
import MenuVeg from './Pages/Menu/MenuVeg';
import MenuRice from './Pages/Menu/MenuRice';
import MenuTan from './Pages/Menu/MenuTan';
import MenuVegMain from './Pages/Menu/MenuVegMain';
import MenuChef from './Pages/Menu/MenuChef';
import MenuRec from './Pages/Menu/MenuRec';
// import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className=''>
     <Navbar></Navbar>
     <div className="mt-10">
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="menu" element={<Menu />}/>

      <Route path="menulist" element={<MenuList />}/>
      <Route path="menutandoori" element={<MenuTandoori />}/>
      <Route path="menuchild" element={<MenuChild />}/>
      <Route path="menuclassic" element={<MenuClassic />}/>
      <Route path="menubiriani" element={<MenuBiriani />}/>
      <Route path="menubread" element={<MenuBread />}/>
      <Route path="menurice" element={<MenuRice />}/>
      <Route path="menuveg" element={<MenuVeg />}/>
      <Route path="menutan" element={<MenuTan />}/>
      <Route path="menuvegmain" element={<MenuVegMain />}/>
      <Route path="menurec" element={<MenuRec />}/>
      <Route path="menuchef" element={<MenuChef />}/>
      <Route path="menuitems" element={<MenuItems />}/>
     </Routes>
     </div>
     <Footer className="footer  footer-center p-10   bg-primary text-primary-content"></Footer>
     {/* <Route path="*" element= {<NotFound></NotFound>}></Route> */}
    </div>
  );
}

export default App;
