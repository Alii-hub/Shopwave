import { Routes,Route, useLocation } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage";
import { ToastContainer } from 'react-toastify';
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import DashboardLayout from "./pages/Admin/DashboardLayout";
import Dashboard from "./pages/Admin/Dashboard";
import Orders from "./pages/Admin/Orders";
import Products from "./pages/Admin/Products";
import Users from "./pages/Admin/Users";

import NavBar from "./components/Navbar";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Categories from "./pages/Admin/Categories";
import UpdateCategory from "./pages/Admin/UpdateCategory";
import AddProduct from "./pages/Admin/AddProduct";





function App() {
 const location = useLocation()
 const isAdmin = location.pathname.startsWith("/admin")

  return (
    <>
    
     {!isAdmin && <NavBar />}
     
     <Routes>
     <Route path="/" element={<HomePage/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/shop" element={<Shop/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/profile" element={<Profile/>}/>

     <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/Login" element={<LoginPage/>}/>


     
   {/* dashboard path admin routes*/}

     <Route path="/admin" element={<DashboardLayout/>}>
     <Route index element={<Dashboard/>}/>
     <Route path="orders" element={<Orders/>}/>
     <Route path="products" element={<Products/>}/>
     <Route path="products/add" element={<AddProduct/>}/>
     <Route path="categories" element={<Categories/>}/>
     <Route path="categories/update/:slug" element={<UpdateCategory/>}/>
     <Route path="users" element={<Users/>}/>
     </Route>
     {/* ------------------------ */}
     
      
     </Routes>
     <ToastContainer/>
     
    </>
  );
}

export default App
