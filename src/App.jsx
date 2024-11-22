import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/footer/Footer';  
import style from './App.module.scss';
import ProductList from './components/Produclist/ProductList';

function Welcome (props) {
  const [state, setState] = useState(false); 


  function handleClick(e) {
    setState(!state); 
  }
  console.log(state);
  return (
    <div className='wrap'>
      <button onClick={handleClick} className='bg-red-300 text-sm p-2'>{state ? `Ẩn danh sách` : `Hiện danh sách`}</button>
      <div className="flex"></div>
      {state && <ProductList />} 
    </div>
  );
}

const App = () => {
  return (
    <>
      <Header />
      <Welcome />
      <Footer />
    </>
  );
}

export default App;
