import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShopPage = ({productData}) => {
  
  const [data, setData] = useState(productData);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(productData.length);
  const [curPage, setCurPage] = useState(1);
  const [isSearch, setIsSearch] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  
  useEffect(()=>{
    setData(productData)
  },[])

  useEffect(() => {
    if (productData && productData.length > 0) {
      setData(productData);
      setTotal(productData.length);
    }
  }, [productData]);

  useEffect(() => {
    const fetchData = () => {
      setData(productData);
      setTotal(productData.length);
    };

    if (!isSearch) {
      fetchData();
    }
  }, [limit, skip]);

  function prevProduct() {
    if (skip > 0) {
      setSkip(skip - limit);
      setCurPage(curPage - 1);
    }
  }

  function nextProduct() {
    if (skip + limit < total) {
      setSkip(skip + limit);
      setCurPage(curPage + 1);
    }
  }

  function Page() {
    const totalPages = Math.ceil(total / limit);

    return (
      <span>
        Trang {curPage} / {totalPages}
      </span>
    );
  }

  function searchProduct(e) {
    const value = e.target.value.toLowerCase();
    setIsSearch(!!value);
    setValueSearch(value);
    setCurPage(1);
    setSkip(0);
    if (value) {
      fetch(`https://json-server-4ogm.onrender.com/search?q=${value}`)
        .then((res) => res.json())
        .then((datas) => {
          setData(datas.products);
          setTotal(datas.total);
        });
    } else {
      setIsSearch(false);
      setData(productData);
      setTotal(productData.length);
    }
  }

  const ProductList = () => {
    if (productData.length === 0)
      return <h1 className="text-3xl font-bold">Không có sản phẩm nào</h1>;
    let newData = productData;
    if (isSearch) {
      newData = productData.slice((curPage - 1) * limit, curPage * limit);
    }
    return productData.slice(limit *(curPage-1) , limit*curPage).map((item,index) => {
      return (
        <Link to={`/products/${item.id}`} key={index}>
          <div className="border">
            <img src={item.thumbnail} alt={item.title} />
            <h3 className="font-semibold text-xl hover:text-red-500 cursor-pointer">
              {item.title}
            </h3>
            <p className="text-red-500">Giá: {item.price}</p>
          </div>
        </Link>
      );
    });
  };

  return (
    <section className="max-w-[1400px] mx-auto">
      <div className="flex justify-between mb-5 ">
        <select
          name="number"
          id=""
          onChange={(e) => {
            setLimit(Number(e.target.value));
            setCurPage(1);
          }}
          className="border border-black "
        >
          <option value={10}>Hiển thị 10</option>
          <option value={20}>Hiển thị 20</option>
          <option value={30}>Hiển thị 30</option>
        </select>

        <div className="relative">
          <i className="ri-search-line absolute left-1 top-[7px]"></i>
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm"
            className="px-5 py-1 border-2 rounded-sm"
            onChange={searchProduct}
          />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-5">
        <ProductList />
      </div>

      {productData.length > 0 && (
        <div className="flex justify-center mt-5 items-center gap-5">
          <span onClick={prevProduct} className="border bg-[#eee]">
            <i className="ri-arrow-drop-left-line text-4xl cursor-pointer"></i>
          </span>

          <Page />

          <span onClick={nextProduct} className="border bg-[#eee]">
            <i className="ri-arrow-drop-right-line text-4xl cursor-pointer"></i>
          </span>
        </div>
      )}
    </section>
  );
};

export default ShopPage;
