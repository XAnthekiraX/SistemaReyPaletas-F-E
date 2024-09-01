import  { useState } from "react";
import Login from "./components/Login/Login";
import DefaultLayout from "./layout/DefaultLayout";
import DashBoard from "./pages/DashBoard";
import Product from "./pages/Product";
import Orders from "./pages/Orders";
import { Routes, Route } from "react-router-dom";
import { getGlobalVariable } from "./cookies/cookieManajer";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(getGlobalVariable("loginStatus"));


  return (
    <>
      {!isAuthenticated ? (
        <Login/>
      ) : (
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/DashBoard" element={<DashBoard />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Orders" element={<Orders />} />
          </Routes>
        </DefaultLayout>
      )}
    </>
  );
}

export default App;
