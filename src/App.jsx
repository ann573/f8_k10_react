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
        <Route path="/" element={<ShopPage datas={dataProduct} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />

        <Route path="/admin" element={<DashBoardPage data={dataProduct} />}>
          <Route path="/admin/products" element={<ProductList />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
