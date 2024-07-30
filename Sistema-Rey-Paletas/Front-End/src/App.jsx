import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import DashBoard from "./pages/DashBoard";
function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path='/' element={<DashBoard/>} />
        <Route path='/DashBoard' element={<DashBoard />} />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
