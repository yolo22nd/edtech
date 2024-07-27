import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import videoMP4 from "../assets/bubbles.mp4";

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = {};
        if (!formData.email || !emailRegex.test(formData.email)) {
            validationErrors.email = 'Please enter a valid email address';
        }
        if (!formData.password || formData.password.length < 6) {
            validationErrors.password = 'Password must be at least 6 characters long';
        }
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            await signIn(formData.email, formData.password);
            navigate('/dashboard/files');
        } catch (err) {
            console.error(err);
            setErrors({ form: 'Failed to login. Please check your credentials.' });
        }
    };

    return (
        <div className='h-screen w-full bg-[#BED5EB] text-[#323232] flex justify-center items-center shadow-lg'>
            <div className='container w-[75%] h-[90%] bg-[#FCFCFC] rounded-3xl flex'>
                <div className="h-full w-1/2 text-[#323232] rounded-3xl flex justify-center items-center">
                    <div className='form-control w-[60%] h-[60%] text-[#323232]'>
                        <div className='my-4'>
                            <h2 className='text-3xl font-bold text-center'>Welcome back</h2>
                            <p className='text-sm font-semibold text-center'>Please enter your details</p>
                        </div>
                        <form onSubmit={handleSubmit} className='mt-10'>
                            {errors.form && <p className="text-red-500 text-sm text-center">{errors.form}</p>}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-[#323232]">Email</label>
                                <div className="mt-0">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`block w-full rounded-lg border-0 px-1 py-1.5 text-[#323232] shadow-sm ring-1 ring-inset ring-[#BED5EB] placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${errors.email ? 'border-red-500' : ''}`}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                            </div>

                            <div className='mt-2'>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-[#323232]">Password</label>
                                <div className="mt-0">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className={`block w-full rounded-lg border-0 px-1 py-1.5 text-[#323232] shadow-sm ring-1 ring-inset ring-[#BED5EB] placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${errors.password ? 'border-red-500' : ''}`}
                                    />
                                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                                </div>
                                <div className="text-sm flex justify-end m-2">
                                    <a href="#" className="font-bold text-[#383838] hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>

                            <div className='mt-8'>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-[#666585] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#444363]">Login</button>
                            </div>
                            <div className='mt-4'>
                                <button type="button" onClick={signInWithGoogle} className="flex w-full justify-center rounded-md bg-[#4285F4] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#357AE8]">Sign In With Google</button>
                            </div>
                            <p className="my-2 text-center text-sm font-semibold text-[#383838]">
                                Don't have an account?
                                <NavLink to="/register" className="font-bold leading-6 text-indigo-600 hover:text-indigo-500 mx-1">Sign Up</NavLink>
                            </p>
                        </form>
                    </div>
                </div>
                <div className='h-full w-1/2 bg-gray-200 rounded-3xl'>
                    <video src={videoMP4} autoPlay loop muted className="object-cover w-full h-full rounded-3xl"></video>
                </div>
            </div>
        </div>
    );
};

export default Login;
