import ProductProvider from "./contexts/ProductContext";

import { Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import Header from "./layout/header/Header";
import LayoutAdmin from "./layout/LayoutAdmin";
import DashBoardPage from "./pages/admin/DashBoardPage";
import ProductList from "./pages/admin/ProductList";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import { useReducer, useEffect } from "react";
import { getAll } from "./axios/crudService";
import { productReducer, initialState } from "../reducer/produtcReducer";
import useProducts from './../hooks/useProducts';


const App = () => {
  const {products} = useProducts()
  return (
    <>
      <h1>Hi</h1>
      {/* <AuthProvider>
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
      </AuthProvider> */}
    </>
  );
};

export default App;
