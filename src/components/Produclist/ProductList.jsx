import React, { useState } from 'react';
import { datas } from '../../assets/data/data.js';
import './productlist.scss';

function RenderProduct(props) {
  let productData = props.data;
  return (
    <>
      <div>
        <div style={{ display: 'flex' }}>
          <img src={productData.image} style={{ width: '100%' }} alt={productData.meta_title} />
        </div>
        <div>{productData.meta_title}</div>
      </div>
    </>
  );
}

function Button( props) {
  return props.number >= datas.length ? '': <button onClick={props.onClick} className="bg-black text-white text-sm p-2 mx-auto">Load More</button>;
}

const ProductList = () => {
  const [state, setState] = useState(10);

  const handleLoadMore = () => {
    setState((prev) => prev + 10); 
  };

  return (
    <>
      <div className='wraps'>
        {datas.slice(0, state).map((data, index) => {
          return <RenderProduct key={index} data={data} />;
        })}
      </div>
      <Button onClick={handleLoadMore} number={state} />
    </>
  );
};

export default ProductList;
