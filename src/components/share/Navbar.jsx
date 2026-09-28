import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <nav className="navbar shadow-[#1C1F26] bg-[#0b0e0d] text-white border-b border-gray-800 px-4 md:px-8">

            <div className="container mx-auto flex items-center justify-between my-2 ">

                {/* Logo */}
                <div className="navbar-start flex items-center gap-2">
                    <Image
                    src={logo}
                    height={20}
                    width={30}
                    alt="Logo"
                    ></Image>
                    <a className="text-xl font-bold tracking-wider">
                        FITLOG
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden md:flex">
                    <div className="flex items-center space-x-2 bg-[#121614] px-3 py-1.5 rounded-full border border-gray-800">

                        <a
                            href="#workouts"
                            className="px-4 py-1.5 rounded-full text-gray-400 hover:text-white text-sm font-medium"
                        >
                            Workouts
                        </a>

                        <a
                            href="#myplan"
                            className="px-4 py-1.5 rounded-full text-gray-400 hover:text-white text-sm font-medium"
                        >
                            My Plan
                        </a>

                    </div>
                </div>

                {/* Desktop Right */}
                <div className="navbar-end hidden md:flex gap-6">

                    <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span>Plan</span>

                        <span className="w-6 h-6 flex items-center justify-center bg-[#a3e635] text-black font-bold rounded-full text-xs">
                            0
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span>Saved</span>

                        <span className="w-6 h-6 flex items-center justify-center border border-gray-600 rounded-full text-xs">
                            0
                        </span>
                    </div>

                </div>

                {/* Mobile Hamburger */}
                <div className="navbar-end md:hidden">

                    <div className="dropdown dropdown-end">

                        {/* Hamburger */}
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle text-white text-2xl"
                        >
                            ☰
                        </div>

                        {/* Dropdown Menu */}
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-50 p-3 shadow-lg bg-[#121614] border border-gray-800 rounded-box w-52"
                        >

                            <li>
                                <a
                                    href="#workouts"
                                    className="text-[#a3e635]"
                                >
                                    Workouts
                                </a>
                            </li>

                            <li>
                                <a href="#myplan">
                                    My Plan
                                </a>
                            </li>

                            <li>
                                <a>
                                    Plan
                                    <span className="badge bg-[#a3e635] text-black border-none">
                                        0
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a>
                                    Saved
                                    <span className="badge badge-outline">
                                        0
                                    </span>
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>

            </div>

        </nav>
    );
};

export default Navbar;