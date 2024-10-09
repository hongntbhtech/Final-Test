// import React from "react";
// import { useMutation } from "react-query";
// import axios from "axios";
// import { useForm } from "react-hook-form";

// const SignUpComponent = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();

//     // API call to sign up
//     const mutation = useMutation(data => {
//         return axios.post('http://localhost:4001/api/auth/sign-up', data);
//     });

//     const onSubmit = (data) => {
//         mutation.mutate(data, {
//             onSuccess: (response) => {
//                 alert(response.data.message);
//             },
//             onError: (error) => {
//                 alert(error.response.data.message);
//             }
//         });
//     };

//     return (
//         // <form onSubmit={handleSubmit(onSubmit)}>
//         //     <div>
//         //         <label className = "block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
//         //         <input name = "username" className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register('username', { required: 'Username is required' })} />
//         //         {errors.username && <p>{errors.username.message}</p>}
//         //     </div>

//         //     <div>
//         //         <label className = "block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
//         //         <input name = "name" className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register('name', { required: 'Name is required' })} />
//         //         {errors.name && <p>{errors.name.message}</p>}
//         //     </div>

//         //     <div>
//         //         <label className = "block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//         //         <input name = "password" className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="password" {...register('password', { required: 'Password is required' })} />
//         //         {errors.password && <p>{errors.password.message}</p>}
//         //     </div>

//         //     <button className = "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="submit" disabled={mutation.isLoading}>
//         //         {mutation.isLoading ? 'Registering...' : 'Sign Up'}
//         //     </button>
//         // </form>

//         <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-[200px]">
//             <h2 className="text-[25px] font-semibold mb-4 text-[#ff64ae] dark:text-white text-center">Sign Up</h2>

//             <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
//                 <input
//                     name="username"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     {...register('username', { required: 'Email is required' })}
//                 />
//                 {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
//             </div>

//             <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
//                 <input
//                     name="name"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     {...register('name', { required: 'Name is required' })}
//                 />
//                 {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
//             </div>

//             <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                 <input
//                     name="password"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     type="password"
//                     {...register('password', { required: 'Password is required' })}
//                 />
//                 {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
//             </div>

//             <button
//                 className="bg-[#FF64AE] w-full text-white  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 hover:bg-[#FF4B8A] dark:hover:bg-[#FF4B8A]"
//                 type="submit"
//                 disabled={mutation.isLoading}
//             >
//                 {mutation.isLoading ? 'Registering...' : 'Sign Up'}
//             </button>
//         </form>

//     );

// }

// export default SignUpComponent;


import React from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignUpComponent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate(); // Khởi tạo useNavigate

    // API call to sign up
    const mutation = useMutation(async (data) => {
        try {
            return await axios.post('http://localhost:4001/api/auth/sign-up', data);
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
                    navigate('/login'); // Chuyển hướng về trang đăng nhập
                }
            },
            onError: (error) => {
                toast.error(error.response.data.message || error.message);
            }
        });
    };

    return (
        <>
            <ToastContainer />
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-[200px]">
                <h2 className="text-[25px] font-semibold mb-4 text-[#ff64ae] dark:text-white text-center">Sign Up</h2>

                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
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

                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input
                        name="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="password"
                        {...register('password', { required: 'Password is required' })}
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>

                <button
                    className="bg-[#FF64AE] w-full text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 hover:bg-[#FF4B8A] dark:hover:bg-[#FF4B8A]"
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
