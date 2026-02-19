import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import { API_BASE_URL_FULL } from "../api"

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL_FULL}/user/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errmsg = await response.json()
        throw new Error(errmsg.message || "Signup failed")
      }

      const result = await response.json()
      toast.success("Signup successful! Please login.")
      navigate("/login")
    } catch (error) {
      toast.error("Signup failed: " + error.message)
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='flex flex-col justify-center items-center bg-[#FFFFFF] shadow-[0_0_60px_10px_rgba(0,0,0,0.03)]  w-[533px] h-[474px]'>
        <p className='text-[32px] font-bold'>Signup</p>
        <p className='text-[17px] text-[#9096B2]'>Please Sign up using account details below.</p>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center  gap-4 w-full mt-[37px]'>
      
        <input className='border-[1px] border-[#C2C5E1] h-[52px] w-[432px]  rounded-[2px] placeholder:text-[16px] placeholder-[#9096B2] px-[13px]' type='text' {...register("username",{required:true, minLength:{value:3, message:"min length is 3"}})} placeholder="Username" />
        {errors.username && <p className='text-sm text-red-600'>{errors.username.message}</p>}
        <input className='border-[1px] border-[#C2C5E1] h-[52px] w-[432px]  rounded-[2px] placeholder:text-[16px] placeholder-[#9096B2] px-[13px]' type='email' {...register("email",{required:true, minLength:{value:3, message:"min length is 3"}})} placeholder="Email Address" />
        {errors.email && <p className='text-sm text-red-600'>{errors.email.message}</p>}
        <input className='border-[1px] border-[#C2C5E1] h-[52px] w-[432px]  rounded-[2px] placeholder:text-[16px] placeholder-[#9096B2] px-[13px]' type='tel' {...register("contact",{required:true, minLength:{value:10, message:"min length is 10"}})} placeholder="Contact" />
        {errors.contact && <p className='text-sm text-red-600'>{errors.contact.message}</p>}
        <input className='border-[1px] border-[#C2C5E1] h-[52px] w-[432px] rounded-[2px] placeholder:text-[16px] placeholder-[#9096B2] px-[13px]' type='password' {...register("password",{required:true, minLength:{value:8, message:"min length is 8"}})} placeholder="Password" />
        {errors.password && <p className='text-sm text-red-600'>{errors.password.message}</p>}
        <p className='text-sm text-left w-full px-[56px] text-[#9096B2] '>Forgot your password?</p>
        <button className='border border-[#C2C5E1] bg-[#FB2E86] h-[47px] w-[432px] rounded-[3px] text-white hover:bg-pink-600 disabled:opacity-50' type='submit' disabled={isLoading}>
          {isLoading ? "Signing up..." : "Sign up"}
        </button>
      
        </form>
      
      </div>
    </div>
  )
}

export default Signup
