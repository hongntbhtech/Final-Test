import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Link } from "react-router-dom";

import { useState } from "react"
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const SignInComponent = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    // API call to sign in
    const mutation = useMutation(async (data) => {
        try {
            const response = await axios.post("https://0g5v6mvs-4001.asse.devtunnels.ms/api/auth/sign-in", data);
            return response;
        } catch (error) {
            if (error.response && error.response.status === 401) {
                toast.error(error.response.data.message);
            } if (error.response && error.response.status === 404) {
                toast.error(error.response.data.message);
            }
        }
    });

    const onSubmit = (data) => {
        mutation.mutate(data, {
            onSuccess: (response) => {
                if (response && response.data && response.data.user) {
                    localStorage.setItem("users", JSON.stringify(response.data.user));
                    navigate('/homemain');
                }
            },
            onError: (error) => {
                toast.error(error.response?.data?.message || error.message);
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
                <h2 className="text-[25px] font-semibold mb-4 text-[#ff64ae] dark:text-white text-center">Sign In</h2>

                <div className="mb-4">
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input
                        id="username"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register('username', { required: 'Username is required' })}
                    />
                    {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
                </div>

                {/* <div className="mb-4">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input
                        id="password"
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
                    className="w-full text-white bg-[#ff64ae] focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                    type="submit"
                    disabled={mutation.isLoading}
                >
                    {mutation.isLoading ? 'Signing In...' : 'Sign In'}
                </button>


                <div className="text-center mt-4 flex mx-auto">
                    <p className="text-sm text-gray-600 mx-auto">
                        Don't have an account?
                        <Link to='/sign-up'>
                            <button
                                className="w-[50%] mx-auto text-white bg-[#ff64ae]  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                                type="submit"
                                disabled={mutation.isLoading}
                            >
                                Sign up
                            </button>
                        </Link>
                    </p>
                </div>

            </form>
        </>
    );
}

export default SignInComponent;
