import React, { useEffect, useState } from "react";

const URL = "https://dummyjson.com/products";

const Shop = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [curPage, setCurPage] = useState(1);
  const [isSearch, setIsSearch] = useState(false);
  const [valueSearch, setValueSearch] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${URL}?limit=${limit}&skip=${skip}`);
      const datas = await res.json();
      setData(datas.products);
      setTotal(datas.total);
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
      fetch(`${URL}/search?q=${value}`)
        .then((res) => res.json())
        .then((datas) => {
          setData(datas.products);
          setTotal(datas.total);
        });
    } else {
      setIsSearch(false);
      fetch(`${URL}?limit=${limit}&skip=${skip}`)
        .then((res) => res.json())
        .then((datas) => {
          setData(datas.products);
          setTotal(datas.total);
        });
    }
  }

  const ProductList = () => {
    if (data.length === 0) return (<h1 className="text-3xl font-bold">Không có sản phẩm nào</h1>)
    let newData = data;
    if(isSearch) {
        newData = data.slice((curPage-1)*limit,curPage*limit);
    } 
    return newData.map((item) => {
      return (
        <div key={item.id} className="border">
          <img src={item.thumbnail} alt={item.title} />
          <h3 className="font-semibold text-xl">{item.title}</h3>
          <p className="text-red-500">Giá: {item.price}</p>
        </div>
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

      {data.length > 0 && (
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

export default Shop;
