import React from "react";

import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createProduct, fetchProductById, updateNewProduct } from "./../../features/products/productAction";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "./../../schema/productSchema";
const ProductForm = () => {
  const nav = useNavigate()
  const { product, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });
  useEffect(() => {
    if(id){
      (async () => {
        const res = await dispatch(fetchProductById(id)).unwrap();
        reset(res);
      })();
    } 
  }, [dispatch]);

  const submitForm = (data) => {
    console.log( data);
    if (id){
      dispatch(updateNewProduct({data, id}))
      nav("/")
    }else {
      dispatch(createProduct(data))
      reset()
      if (error) toast(error)
      else if (!error && confirm("Bạn có muốn chuyển trang không")) nav("/")
    }

    
  };
  return (
    <>
      <form
        className="border mx-auto max-w-[450px] px-3 py-5"
        onSubmit={handleSubmit(submitForm)}
      >
        <h1 className="text-center text-3xl font-bold">
          {id ? "Cập nhật thông tin" : "Thêm sản phẩm mới"}
        </h1>
        <div className="mb-3">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            className="border w-full rounded-lg px-2"
            {...register("title")}
          />
          {errors.title && <p className="text-red-500 italic">{errors.title.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            name="price"
            id="price"
            className="border w-full rounded-lg px-2"
            {...register("price", {valueAsNumber: true})}
            />
            {errors.price && <p className="text-red-500 italic">{errors.price.message}</p>}
        </div>
        <div className="mb-3 flex flex-col">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            className="border resize-none px-2"
            {...register("description")}
          ></textarea>
        </div>
        <div className="mb-3">
          <button className="w-full bg-green-500 py-1 rounded-lg text-white">Submit</button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default ProductForm;
