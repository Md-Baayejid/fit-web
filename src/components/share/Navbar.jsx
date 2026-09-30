import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/logo.png"
import ButtonForLarg from "./ButtonForLarg";

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

                        <Link
                            href="/"
                            className="px-4 py-1.5 rounded-full text-gray-400 hover:text-white text-sm font-medium"
                        >
                            Workouts
                        </Link>

                        <Link
                            href="/plan"
                            className="px-4 py-1.5 rounded-full text-gray-400 hover:text-white text-sm font-medium"
                        >
                            My Plane
                        </Link>

                    </div>
                </div>

                {/* Desktop Right */}
                <div className="navbar-end hidden md:flex gap-6">

                    <ButtonForLarg></ButtonForLarg>

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
                                <Link 
                                    href="/"
                                    className="text-[#a3e635]"
                                >
                                    Workouts
                                </Link >
                            </li>

                            <li>
                                <Link  href="/plan">
                                    My Plan
                                </Link >
                            </li>

                            <li>
                                <Link href="/plan" >
                                    Plan
                                    <span className="badge bg-[#a3e635] text-black border-none">
                                        0
                                    </span>
                                </Link >
                            </li>

                            <li>
                                <Link href="/plan" >
                                    Saved
                                    <span className="badge badge-outline">
                                        0
                                    </span>
                                </Link >
                            </li>

                        </ul>

                    </div>

                </div>

            </div>

        </nav>
    );
};

export default Navbar;