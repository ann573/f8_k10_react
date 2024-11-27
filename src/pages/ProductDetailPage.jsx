import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch(`https://dummyjson.com/products/${id}`)
    // .then((res => res.json()))
    // .then((data) => {
    //     setData(data)
    // })
    // .catch(err => console.log(err))
    (async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <>
      <section className="flex max-w-[1300px] mx-auto gap-5">
        <div>
          <img src={data.thumbnail} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <p className="text-3xl text-red-500 font-bold">
            ${data.price}
            <span className="text-yellow-400 text-base ml-3 ">
              ({data.discountPercentage} %)
            </span>
          </p>
          <p className="my-5">{data.description}</p>
          <button className="bg-red-500 px-3 py-2 rounded-xl text-white">
            Mua hàng
          </button>
        </div>
      </section>
    </>
  );
};

export default ProductDetailPage;
