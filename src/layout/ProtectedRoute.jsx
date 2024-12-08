import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

// const ProtectedRoute = () => {
//     const role = localStorage.getItem("role") || "client"
//   return (
//     <div>
//         <p>Tuyến đường được bảo vệ</p>
//         {role === "admin" ? <Outlet/> : <Navigate to="/login"/>}
//     </div>
//   )
// }

const ProtectedRoute = ({children}) => {
  const role = localStorage.getItem("role") || "client"
return (
  <div>
      <p>Tuyến đường được bảo vệ</p>
      {role === "admin" ? children: <Navigate to="/login"/>}
  </div>
)
}

export default ProtectedRoute