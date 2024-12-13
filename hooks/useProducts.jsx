import { useReducer } from 'react';
import { productReducer } from '../reducer/produtcReducer';
import { initialState } from '../reducer/produtcReducer';
import { useEffect } from 'react';
import { addNewProduct, getAll, deleteByParam } from '../src/axios/crudService';

const useProducts = () => {
    const [state, dispatch] = useReducer(productReducer, initialState);

    useEffect(()=>{
        async function fetchProducts(){
            const data = await getAll("products");
            dispatch({type: "SET_PRODUCT", payload: data})
        }

        fetchProducts()
    }, [])
    async function createProduct(dataProduct){
        const data = await addNewProduct(dataProduct)
        dispatch({type: "ADD_PRODUCT", payload: data})
        return data
     }  

     async function removeProduct(id){
        const res = await deleteByParam("products", id)
        dispatch({type: "REMOVE_PRODUCT", payload: id})
        return res

     }
    return {
        products: state.products,
        createProduct,
        removeProduct
    }
}

export default useProducts