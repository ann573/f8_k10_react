import { useContext } from "react";
import ProductProvider, { ProductContext } from "./contexts/ProductContext";

import { Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import Header from './layout/header/Header';
import LoginPage from "./pages/LoginPage";
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from "./pages/RegisterPage";
import DashBoardPage from './pages/admin/DashBoardPage';
import LayoutAdmin from './layout/LayoutAdmin';
import ProductList from './pages/admin/ProductList';

const ComponentA = () => {
  return (
    <>
      <h1>Component A</h1>
      <ComponentB />
    </>
  );
};

const ComponentB = () => {
  return (
    <>
      <h1>Component B</h1>
      <ComponentC />
    </>
  );
};

const ComponentC = () => {
  const value = useContext(ProductContext);
  console.log(value);
  return (
    <>
      <h1>Component C</h1>
    </>
  );
};

const App = () => {
  return (
    <>
      <AuthProvider>
        <Header/>
        <Routes>

          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />

          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>

        <ProductProvider>
          <Routes path="/admin" element={<LayoutAdmin/>}>
            <Route index element={<DashBoardPage/>}/>
            <Route path="products" element={<ProductList/>}/>
          </Routes>
        </ProductProvider>
      </AuthProvider>
    </>
  );
};

export default App;
