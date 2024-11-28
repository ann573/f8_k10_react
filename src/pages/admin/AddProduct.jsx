import React from 'react'

const AddProduct = () => {
  return (
    <section className='flex justify-center'>
      <form action="#" className='w-1/2 border border-black rounded-xl px-10 py-10'>
        <h3 className='text-4xl font-bold'>Add new product</h3>
        <div className='flex flex-col gap-1 mb-5'>
          <label htmlFor="title">Title</label>
          <input type="text" id='title' className='w-full border rounded-sm border-[#363636] py-2 pl-3'name='title' />
        </div>
        <div className='flex flex-col gap-1 mb-5'>
          <label htmlFor="price">Price</label>
          <input type="text" id='price' className='w-full border rounded-sm border-[#363636] py-2 pl-3'name='price' />
        </div>
        <div className='flex flex-col gap-1 mb-5'>
          <label htmlFor="description">Description</label>
          <textarea type="text" name='desc' rows="10" className='w-full border rounded-sm border-[#363636] py-2 px-3 resize-none' id='description'>
            </textarea>
        </div>
        <button className='bg-blue-600 text-white w-full py-2'>Add Product</button>
      </form>
    </section>
  )
}

export default AddProduct