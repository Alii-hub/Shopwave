import { BrowserRouter,Routes,Route } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage";
import { ToastContainer } from 'react-toastify';
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import DashboardLayout from "./pages/Admin/DashboardLayout";
import Dashboard from "./pages/Admin/Dashboard";
import Orders from "./pages/Admin/Orders";
import Products from "./pages/Admin/Products";
import Users from "./pages/Admin/Users";
import Categories from "./pages/Admin/Categories";





function App() {
  

  return (
    <>
     <BrowserRouter>
     
     <Routes>
     <Route path="/" element={<HomePage/>}/>

     
   {/* dashboard path */}

     <Route path="/admin" element={<DashboardLayout/>}>
     <Route index element={<Dashboard/>}/>
     <Route path="orders" element={<Orders/>}/>
     <Route path="products" element={<Products/>}/>
     <Route path="categories" element={<Categories/>}/>
     <Route path="users" element={<Users/>}/>
     </Route>
     {/* ------------------------ */}
     
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/Login" element={<LoginPage/>}/>
     </Routes>
     <ToastContainer/>
     </BrowserRouter>
    </>
  );
}

export default App
