import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import {useForm} from 'react-hook-form'
import { registerSchema } from './../schemas/authSchemas';
import {auth} from '../axios/authService'
import { Link,useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const nav = useNavigate()
    const {handleSubmit, register, reset, formState:{errors}} = useForm({
        resolver: zodResolver(registerSchema)
    });
    const handleRegister = async (dataBody) =>{
        const data = await auth("/register", dataBody);
        data.user && (confirm("Register new account successfully ")) && nav("/login")
    }
  return (
    <>
        <form onSubmit={handleSubmit(handleRegister)}>
            <h1>Register new account</h1>
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
            <div className='mb-3'>
                <label htmlFor="confirmPassword" className=''>Nhập lại password</label>
                <input type="password" id='confirmPassword' className='border ml-3' {...register("confirmPassword",{require: true})}/>
                {errors?.confirmPassword && <p className='text-red'>{errors?.confirmPassword?.message}</p>}
            </div>
            <div className="mb-3">
					<button className="btn btn-primary w-100">Register</button>
					<Link to="/login">Already an account?</Link>
				</div>
        </form>
    </>
  )
}

export default RegisterPage