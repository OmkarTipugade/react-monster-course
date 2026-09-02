import React, { useState, useEffect } from 'react'
import m1 from '../images/m1.png'
import m2 from '../images/m2.png'
import m3 from '../images/m3.png'
import headerImg from '../images/headerImg.png'
import { Eye, EyeOff } from "lucide-react"
const SignupPage = () => {
    const [currentImageIndexMb, setCurrentImageIndexMb] = useState(0);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // <-- Added
    const carouselImagesMb = [m1, m2, m3];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndexMb((prevIndex) =>
                prevIndex === carouselImagesMb.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [carouselImagesMb.length]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white font-sans relative">
            <div className="relative w-full flex flex-col items-center">
                {/* Header Image */}
                <img
                    src={headerImg}
                    alt="Header"
                    className="w-full max-h-40 sm:max-h-56 md:max-h-72 object-contain"
                />

                <div className="absolute top-1/2 left-0 right-0 w-full h-40 sm:h-56 md:h-64 overflow-hidden flex items-center justify-center z-20">
                    {carouselImagesMb.map((imgSrc, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndexMb ? "opacity-100" : "opacity-0"
                                } flex items-center justify-center`}
                        >
                            <img
                                src={imgSrc}
                                alt={`slide-${index}`}
                                className="h-28 sm:h-40 md:h-48 w-auto object-contain drop-shadow-lg"
                            />
                        </div>
                    ))}

                    <div className="absolute bottom-2 sm:bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {carouselImagesMb.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentImageIndexMb(idx)}
                                className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition-all duration-500 ${idx === currentImageIndexMb ? "bg-blue-600 scale-110" : "bg-gray-400"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl w-11/12 max-w-lg mt-20 p-6 z-10 relative">
                <h3 className="text-2xl font-semibold mb-2 flex items-center">
                    Welcome Back <span className="ml-2">👋</span>
                </h3>
                <p className="text-gray-600 mb-6">
                    Today is a new day. It's your day. You shape it. Sign in to start
                    managing your projects.
                </p>

                <form className="flex flex-col font-semibold space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-1">Username</label>
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="example@email.com"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="+91 1234567890"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                    <div className="flex justify-between items-center gap-5 w-full">
                        <div className="w-1/2">
                            <label className="block text-gray-700 mb-1">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="........"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((v) => !v)}
                                    className="absolute inset-y-0 right-3 flex items-center justify-center text-gray-500"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <div className="w-1/2">
                            <label className="block text-gray-700 mb-1">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="........"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword((v) => !v)}
                                    className="absolute inset-y-0 right-3 flex items-center justify-center text-gray-500"
                                >
                                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>
                    </div>


                    <div>
                        <label className="block text-gray-700 mb-1">Refferal Code (optional)</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-[#052e8c] to-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:opacity-90 transition"
                    >
                        Sign up
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="mx-3 text-gray-500 text-sm">Or sign in with</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                {/* Google Sign-in */}
                <button className="flex items-center justify-center w-full bg-gray-100 py-3 rounded-xl hover:bg-gray-200 transition 
                " 
                onClick={() => (window.location.href = `${process.env.REACT_APP_BASE_URL}/auth/google`)}
                >
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="w-6 h-6 mr-2"
                    />
                    <span className="text-gray-700 font-medium">Google</span>
                </button>

                <p className="text-center text-gray-700 mt-6">
                    Don't you have an account?{" "}
                    <a href="#" className="text-blue-600 hover:underline" onClick={() => navigate('/login')}>
                        Login
                    </a>
                </p>
            </div>

            {/* Footer */}
            <footer className="text-gray-400 text-xs mt-6 relative z-10">
                © 2025 ALL RIGHTS RESERVED
            </footer>
        </div>
    );
};

export default SignupPage;
