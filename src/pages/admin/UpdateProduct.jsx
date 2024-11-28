import React from 'react'
import { useParams } from 'react-router-dom';

const UpdateProduct = ({data}) => {

  const { id } = useParams();

  const findProduct = data.find((item)=> item.id == id)

  if(findProduct){
    return (
      <section className='flex justify-center'>
        <form action="#" className='w-1/2 border border-black rounded-xl px-10 py-10'>
          <h3 className='text-4xl font-bold mb-3'>Update product</h3>
          <div className='flex flex-col gap-1 mb-5'>
            <label htmlFor="title">Title</label>
            <input type="text" id='title' value={findProduct.title} className='w-full border rounded-sm border-[#363636] py-2 pl-3'name='title' />
          </div>
          <div className='flex flex-col gap-1 mb-5'>
            <label htmlFor="price">Price</label>
            <input type="text" id='price'value={findProduct.price} className='w-full border rounded-sm border-[#363636] py-2 pl-3'name='price' />
          </div>
          <div className='flex flex-col gap-1 mb-5'>
            <label htmlFor="description">Description</label>
            <textarea type="text" name='desc' value={findProduct.description} rows="10" className='w-full border rounded-sm border-[#363636] py-2 px-3 resize-none' id='description'>
            </textarea>
          </div>
          <button className='bg-blue-600 text-white w-full py-2'>Update Product</button>
        </form>
      </section>
    )
  } else {
    return ("404 NOT FOUND")
  }
}

export default UpdateProduct