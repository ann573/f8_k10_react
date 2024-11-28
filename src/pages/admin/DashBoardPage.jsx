import React ,{useState, useEffect} from "react";
import { Outlet, useLocation } from "react-router-dom";
import { NavLink,Link } from "react-router-dom";

const DashBoardPage = ({ data,fetchProducts }) => {
  const location = useLocation();
  const isAdminPage = location.pathname === "/admin";

  const [curPage, setCurPage] = useState(0)
  const [products, setProducts] = useState([]);
  const totalPage = Math.ceil(products.length/20)

  if (curPage > 0 && products.length === curPage * 20) {
    setCurPage(curPage - 1);
  }

  useEffect(() => {
    setProducts(data);
  }, [data]);

  function RowProduct({ item }) {
    return (
      <>
        <tr>
          <td className="border border-slate-500 w-[2%]">{item.id}</td>
          <td className="border border-slate-500 w-[40%]">{item.title}</td>
          <td className="border border-slate-500 w-[20%]">${item.price}</td>
          <td className="flex justify-center border border-slate-500 w-full">
            <button className="px-3 py-1 text-white bg-red-500 rounded-lg" onClick={()=>deleteProduct(item.id)}>
              Remove
            </button>
            <Link to={`/admin/update_product/${item.id}`}>
            <button className="px-3 py-1 text-black bg-yellow-500 rounded-lg">
              Update
            </button>
            </Link>
          </td>
        </tr>
      </>
    );
  }

  async function deleteProduct(id){
    const result = window.confirm("Bạn có muốn xóa không?")
    if (result){
      try {
        await fetch(`http://localhost:3000/products/${id}`,{
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        })
  
        setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
        fetchProducts();
      } catch (error) {
        console.log(error);
      }
    }
  }

  function Page(){
    return (<p className="flex items-center mx-3"> Trang {curPage+1}/{totalPage}</p>)
  }

  function prevPage(){
    if (curPage - 1 >= 0)
    {
      setCurPage(prev => prev - 1)
    }
  }
  
  function nextPage (){
    if (curPage + 1 < totalPage)
    {
      setCurPage(prev => prev + 1)
    }
  }
  return (
    <>
      <h1 className="text-4xl font-bold underline">Hello Admin</h1>
      <section className="grid grid-cols-5">
        <div>
          <ul>
            <li>
              <NavLink to="/admin/category">Categories</NavLink>
            </li>
            <li>
              <NavLink to="/admin/products">Products</NavLink>
            </li>
          </ul>
        </div>
        <div className="col-span-4">
          {isAdminPage ? (<>
            <Link to='/admin/add_product'>
              <button  className="bg-green-700 text-white px-5 py-2 rounded-xl mb-3">Add New Product</button>
            </Link>
            <table className="w-full table-auto border-collapse border border-slate-500">
              <thead>
                <tr>
                  <th className="border border-slate-500">ID</th>
                  <th className="border border-slate-500">Title</th>
                  <th className="border border-slate-500">Price</th>
                  <th className="border border-slate-500">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.slice(curPage * 20 , (curPage+1) * 20).map((item, index) => {
                  return <RowProduct key={index} item={item} />;
                })}
              </tbody>
            </table>
            <div className="flex justify-center mt-5">
              <span onClick={prevPage} className="border bg-[#eee]">
              <i className="ri-arrow-drop-left-line text-4xl cursor-pointer"></i>
              </span>

              <Page />

              <span onClick={nextPage} className="border bg-[#eee]">
                <i className="ri-arrow-drop-right-line text-4xl cursor-pointer"></i>
              </span>
            </div>
            </>
          ) : (
            <Outlet />
          )}
        </div>
      </section>
    </>
  );
};

export default DashBoardPage;
