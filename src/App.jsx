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
import Categories from "./pages/admin/Categories";
import AddProduct from "./pages/admin/AddProduct";
import UpdateProduct from "./pages/admin/UpdateProduct";
import { getAll, deleteByParam } from './axios/index';

const App = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [limit, setLimit] = useState(0);

  async function fetchProducts() {
      const data = await getAll("products")
      setDataProduct(data)
  } 
  useEffect(() => {
    (async () => {
      const data = await getAll("products")
      setDataProduct(data)
    })()
  }, []);

  const onRemove = async (id) =>{
    let result =  confirm("Bạn có chắc không")
    if (result) {
      try {
        const res = await deleteByParam("products", id)
        
        res.status === 200 && fetchProducts()
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ShopPage productData={dataProduct} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />

        <Route
          path="/admin"
          element={
            <DashBoardPage
              data={dataProduct}
              fetchProducts={fetchProducts}
              setLimit={setLimit}
              onRemove={onRemove}
            />
          }
        >
          <Route path="/admin/products" element={<ProductList />} />
          <Route path="/admin/category" element={<Categories />} />
          <Route path="/admin/add_product" element={<AddProduct fetchProducts={fetchProducts} />} />
          <Route
            path="/admin/update_product/:id"
            element={<UpdateProduct data={dataProduct} />}
          />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
