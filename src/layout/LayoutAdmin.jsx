import React from 'react'

const LayoutAdmin = ({children}) => {
    const role = localStorage.getItem("role");
  return (
    <>
        {role === "admin" ? children : "Bạn không có quyền vào trang này"}
    </>
  )
}

export default LayoutAdmin