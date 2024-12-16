import  instance  from ".";

export const getAllProducts =async () =>{
    const {data} = await instance.get("/products")
    return data 
}

export const createProducts = async (dataBody) =>{
    const {data} = await instance.post("/products", dataBody) 
    return data
}

export const updateProducts = async (dataBody, id) =>{
    const {data} = await instance.patch(`/products/${id}`, dataBody) 
    return data
}   

export const removeProduct = async (id) =>{
    const res = await instance.delete(`/products/${id}`) 
    return res.ok
}

export const getProductByID = async (id) => {
    const {data} = await instance.get(`/products/${id}`)
    return data 
}