import React from 'react'
import { useForm } from "react-hook-form"

const login = () => {
     const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='flex flex-col justify-center items-center bg-[#FFFFFF] shadow-[0_0_60px_10px_rgba(0,0,0,0.03)]  w-[533px] h-[474px]'>
        <p className='text-[32px] font-bold'>Login</p>
        <p className='text-[17px] text-[#9096B2]'>Please log in using account details below.</p>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center  gap-4 w-full mt-[37px]'>
      
        <input className='border-[1px] border-[#C2C5E1] h-[52px] w-[432px]  rounded-[2px] placeholder:text-[16px] placeholder-[#9096B2] px-[13px]' type='text' {...register("username",{required:true, minLength:{value:3, message:"min length is 3"}})} placeholder="Email Address" />
      
        <input className='border-[1px] border-[#C2C5E1] h-[52px] w-[432px] rounded-[2px] placeholder:text-[16px] placeholder-[#9096B2] px-[13px]' type='password' {...register("password",{required:true, minLength:{value:8, message:"min length is 8"}})} placeholder="Password" />
        <p className='text-sm text-left w-full px-[56px] text-[#9096B2] '>Forgot your password?</p>
        <input className='border border-[#C2C5E1] bg-[#FB2E86] h-[47px] w-[432px] rounded-[3px] text-white hover:bg-pink-600' type='submit' value="Sign in"/>
      
        </form>
        <p className='text-sm mt-4 text-[#9096B2]'> Don't have an Account? <span className='text-[#FB2E86]'> <a href='/signup'>Create account</a></span></p>
      </div>
    </div>
  )
}

export default login
