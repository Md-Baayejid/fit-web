"use client"
import { CardContext } from '@/context/CardProvider';
import Link from 'next/link';
import React, { useContext } from 'react';

const ButtonForLarg = () => {

    const { planeCount, saveCount } = useContext(CardContext)

    return (
        <div className="navbar-end hidden md:flex gap-6">
            <Link href="/plan">
                <button className="flex font-bold items-center gap-2 text-sm hover:text-white text-gray-300">
                    <span>Plan</span>

                    <span className="w-6 h-6 flex items-center justify-center bg-[#a3e635] text-black font-bold rounded-full text-xs">
                        {planeCount}
                    </span>
                </button>
            </Link>

            <Link href="/plan" >
                <button className="flex font-bold items-center gap-2 text-sm hover:text-white text-gray-300">
                    <span>Saved</span>

                    <span className="w-6 h-6 flex items-center justify-center border border-gray-600 rounded-full text-xs">
                        {saveCount}
                    </span>
                </button>
            </Link>
        </div>
    );
};

export default ButtonForLarg;