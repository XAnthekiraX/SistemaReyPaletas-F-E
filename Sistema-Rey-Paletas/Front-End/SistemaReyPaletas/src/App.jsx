import { Route, Routes } from "react-router-dom";
import './App.css'
import NavBar from './components/NavBar'
import DashRoutes from "./components/DashRoutes";
import DashBoard from "./pages/DashBoard";
import DasRoutesMb from "./components/DasRoutesMb";
import Invoices from "./pages/Invoices";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
import { CgMenuGridO } from "react-icons/cg";
import { useState } from "react";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleItemClick = (index) => {
    setSelectedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center relative'>
      <header className="w-full h-auto overflow-hidden flex p-2 border border-gray-300">
        <NavBar></NavBar>
      </header>
      <div className="flex justify-center items-center relative w-full h-full ">
        <div className={`w-0 flex h-full relative  ${selectedIndex === 0 ? "sm:w-[9%]" : "sm:w-[35%] lg:w-[25%] xl:w-[23%] sm:overflow-visible"}`}>
          <DashRoutes />
          <div className="w-9 h-full border-500 rounded-xl" onClick={() => handleItemClick(0)}>
            <CgMenuGridO className="h-full w-full" />
          </div>
        </div>
        <div className="w-full h-full overflow-hidden overflow-y-auto">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/DashBoard" element={<DashBoard />} />
            <Route path="/Invoices" element={<Invoices />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="/Product" element={<Product />} />
          </Routes>
        </div>
      </div>
      <footer className="h-auto w-full">
        <DasRoutesMb />
      </footer>
    </div>
  );
}

export default App;
