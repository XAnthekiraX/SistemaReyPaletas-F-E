// import { Routes, Route } from "react-router-dom";
// import DefaultLayout from "./layout/DefaultLayout";
// import DashBoard from "./pages/DashBoard";
// import Product from "./pages/Product";
// import Orders from "./pages/Orders";
import Login from "./components/Login/Login";
function App() {

  return (
    <div>
    <Login />
    </div>

    

  );
}

export default App;


{/* <DefaultLayout> 
      <Routes>
        <Route exec path='/' element={<DashBoard/>} />
        <Route path='/DashBoard' element={<DashBoard />} />
        <Route path='/Product' element={<Product/>} />
        <Route path='/Orders' element={<Orders/>} />
      </Routes>
    </DefaultLayout> */}