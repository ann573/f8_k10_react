import { Route, Routes } from 'react-router-dom';
import ProductTable from './page/admin/ProductTable';
import ProductForm from './page/admin/ProductForm';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<ProductTable/>}/>
        <Route path="/admin/update/:id" element={<ProductForm/>}/>
        <Route path="/admin/add" element={<ProductForm/>}/>
      </Routes>
    </>
  );
};

export default App;
