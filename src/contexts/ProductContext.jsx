import {createContext} from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getAll } from './../axios/crudService';
export const ProductContext = createContext()

const ProductProvider = ({children}) =>{
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        (async ()=>{
            const data  = await getAll("/products");
            setProducts(data)
        })()
    },[])
    return <ProductContext.Provider value={products}> {children}</ProductContext.Provider>
} 
export default ProductProvider