import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewProduct } from "../../axios";

const AddProduct = ({ fetchProducts }) => {
  const nav = useNavigate();
  const [valueForm, setValueForm] = useState({});
  async function handleSubmit(e) {
    e.preventDefault();
    let isOkay = true;
    let count = 0;

    for (let key in valueForm) {
      if (!valueForm[key]) {
        isOkay = false;
      }
      ++count;
    }
    if (count !== 3) {
      isOkay = false;
    }
    if (isOkay) {
      try {
        const res = await addNewProduct("products", valueForm);
        console.log(res);
        if (res.status === 201) {
          fetchProducts();
          if (confirm("Bạn có muốn chuyển trang không")) nav("/admin");
        } else {
          console.error("Lỗi khi gửi dữ liệu:", res.statusText);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  function setValue(e) {
    setValueForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <section className="flex justify-center">
      <form
        action="#"
        className="w-1/2 border border-black rounded-xl px-10 py-10"
      >
        <h3 className="text-4xl font-bold">Add new product</h3>
        <div className="flex flex-col gap-1 mb-5">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="w-full border rounded-sm border-[#363636] py-2 pl-3"
            name="title"
            onChange={setValue}
          />
        </div>
        <div className="flex flex-col gap-1 mb-5">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            className="w-full border rounded-sm border-[#363636] py-2 pl-3"
            name="price"
            onChange={setValue}
          />
        </div>
        <div className="flex flex-col gap-1 mb-5">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            name="desc"
            rows="10"
            className="w-full border rounded-sm border-[#363636] py-2 px-3 resize-none"
            id="description"
            onChange={setValue}
          ></textarea>
        </div>
        <button
          className="bg-blue-600 text-white w-full py-2"
          onClick={handleSubmit}
        >
          Add Product
        </button>
      </form>
    </section>
  );
};

export default AddProduct;
