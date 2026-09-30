"use client"
import { CardContext } from '@/context/CardProvider';
import Link from 'next/link';
import { useContext } from 'react';
// import React, { useContext } from 'react';

const ButtonForSmall = () => {

    const { planeCount, saveCount  } = useContext(CardContext)

    return (
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
                                        {planeCount} 
                                    </span>
                                </Link >
                            </li>

                            <li>
                                <Link href="/plan" >
                                    Saved
                                    <span className="badge badge-outline">
                                        {saveCount}
                                    </span>
                                </Link >
                            </li>

                        </ul>

                    </div>

                </div>
    );
};

export default ButtonForSmall;