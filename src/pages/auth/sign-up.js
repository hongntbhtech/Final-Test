
import React from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const SignUpComponent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate(); // Khởi tạo useNavigate

    // API call to sign up
    const mutation = useMutation(async (data) => {
        try {
            return await axios.post('https://0g5v6mvs-4001.asse.devtunnels.ms/api/auth/sign-up', data);
        } catch (error) {
            if (error.response && error.response.status === 400) {
                toast.error(error.response.data.message || error.message);
            } else if (error.response && error.response.status === 409) {
                toast.error(error.response.data.message || error.message);
            }
        }
    });

    const onSubmit = (data) => {
        mutation.mutate(data, {
            onSuccess: (response) => {
                if (response && response.data) {
                    toast.success("Registration successful!"); // Thông báo đăng ký thành công
                    setTimeout(() => {
                        navigate('/homemain'); // Chuyển hướng về trang đăng nhập sau 2 giây
                    }, 2000);
                }
            },
            onError: (error) => {
                toast.error(error.response.data.message || error.message);
            }
        });
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };


    return (
        <>
            <ToastContainer />
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-[200px]">
                <h2 className="text-[25px] font-semibold mb-4 text-[#ff64ae] dark:text-white text-center">Sign Up</h2>

                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                    <input
                        name="username"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register('username', { required: 'Email is required' })}
                    />
                    {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input
                        name="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                {/* <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input
                        name="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="password"
                        {...register('password', { required: 'Password is required' })}
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div> */}


                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <div className="relative">
                        <input
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type={showPassword ? 'text' : 'password'}
                            {...register('password', { required: 'Password is required' })}
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2"
                        >
                            {showPassword ? <FaEye /> : <FaEyeSlash />} {/* Hiển thị biểu tượng mắt */}
                        </button>
                    </div>
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>

                <button
                    className="bg-[#FF64AE] w-full text-white focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                    type="submit"
                    disabled={mutation.isLoading}
                >
                    {mutation.isLoading ? 'Registering...' : 'Sign Up'}
                </button>
            </form>
        </>
    );
}

export default SignUpComponent;
