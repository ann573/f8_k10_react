import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form'
import { loginSchema } from './../schemas/authSchemas';
import {auth} from '../axios/authService'
import { Link,useNavigate } from "react-router-dom";

const LoginPage = () => {
  const nav = useNavigate()
  const {handleSubmit, register, reset, formState:{errors}} = useForm({
      resolver: zodResolver(loginSchema)
  });
  const handleLogin = async (dataBody) =>{
      const {accessToken, user} = await auth("/login", dataBody);
      user && (confirm("Login account successfully, redirect home ")) && nav("/")
      localStorage.setItem("accessToken", accessToken)
      localStorage.setItem("user", JSON.stringify(user))
      localStorage.setItem("role", user?.role || "client")
  }
return (
  <>
      <form onSubmit={handleSubmit(handleLogin)}>
          <h1>Login new account</h1>
          <div className='mb-3'>
              <label htmlFor="email" className=''>Email</label>
              <input type="email" className='border ml-3' {...register("email",{require: true})}/>
              {errors?.email && <p className='text-red'>{errors?.email?.message}</p>}
          </div>
          <div className='mb-3'>
              <label htmlFor="password" className=''>Password</label>
              <input type="password" className='border ml-3' {...register("password",{require: true})}/>
              {errors?.email && <p className='text-red'>{errors?.email?.message}</p>}
          </div>
          <div className="mb-3">
        <button className="btn btn-primary w-100">Login</button>
        <Link to="/register">Don't have an account</Link>
      </div>
      </form>
  </>
)
}

export default LoginPage