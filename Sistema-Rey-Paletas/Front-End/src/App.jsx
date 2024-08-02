import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import DashBoard from "./pages/DashBoard";
import Product from "./pages/Product";
function App() {
  return (
    <DefaultLayout> 
      <Routes>
        <Route exec path='/' element={<DashBoard/>} />
        <Route path='/DashBoard' element={<DashBoard />} />
        <Route path='/Product' element={<Product/>} />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
