import React from 'react'
import {Link} from 'react-router-dom'
const NotFoundPage = () => {
  return (
    <>
        <h1 className='text-center text-3xl'>404 NOT FOUND</h1>
        <Link to="/" className='bg-blue-500 p-4 rounded-xl ml-[50%] my-5'>Về trang chủ</Link>
    </>
  )
}

export default NotFoundPage