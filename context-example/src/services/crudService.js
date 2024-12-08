import instance from './index';

export const getAll = async (path) => {

    try {
      const { data } = await instance.get(`/${path}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  
  export const getByParam = async (path, param) => {
    try {
      const { data } = await instance.get(`/${path}/${param}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  
  export const deleteByParam = async (path, param) => {
    try {
      const res = await instance.delete(`/${path}/${param}`);
      return res;
    } catch (err) {
      console.log(err);
    }
  };
  
  export const addNewProduct = async (path, product) => {
      try {
          const res = await instance.post(`/${path}`, JSON.stringify(product)
          );
      return res;
    } catch (err) {
      console.log(err);
    }
  };
  
  export const updateById = async (path, id, data) => {
    try {
      const res = await instance.patch(`/${path}/${id}`, JSON.stringify(data));
      return res;
    } catch (err) {
      console.log(err);
    }
  };