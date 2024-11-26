import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/footer/Footer';  
import style from './App.module.scss';
import ProductList from './components/Produclist/ProductList';
import Shop from './pages/Shop';


const App = () => {
  
  return (
    <>  
      <Header />
      <Shop/>
      <Footer />
    </>
  );
}

export default App;
