import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ShopPage from "./pages/ShopPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import DashBoardPage from "./pages/admin/DashBoardPage";
import ProductList from "./pages/admin/ProductList";
import { useEffect, useState } from "react";
import Categories from './pages/admin/Categories';
import AddProduct from './pages/admin/AddProduct';
import UpdateProduct from './pages/admin/UpdateProduct';

const App = () => {
  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3000/products");
        const data = await res.json();
        setDataProduct(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ShopPage productData={dataProduct} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />

        <Route path="/admin" element={<DashBoardPage data={dataProduct} />}>
          <Route path="/admin/products" element={<ProductList />} />
          <Route path="/admin/category" element={<Categories />} />
          <Route path="/admin/add_product" element={<AddProduct />} />
          <Route path="/admin/update_product/:id" element={<UpdateProduct data={dataProduct} />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
