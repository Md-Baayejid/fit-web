"use client";

import React, { useContext } from "react";
import { CardContext } from "@/context/CardProvider";
import Link from "next/link";
import { toast } from "react-toastify";

const SaveCard = ({ item }) => {
    const { saveCard, setsaveCard } = useContext(CardContext);

    const handleDelete = () => {
        const updatedCards = saveCard.filter(
            (card) => card.id !== item.id
        );

        setsaveCard(updatedCards);
        toast.error("Delet from saved")
    };

    return (
        <div className="w-full mt-5 bg-base-200 border border-base-300 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">

            {/* Left Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto">

                {/* Thumbnail Image */}
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full md:w-32 h-20 object-cover rounded-xl border border-base-300 shrink-0"
                />

                {/* Info Section */}
                <div className="flex flex-col">

                    <h3 className="text-white text-base md:text-lg font-black uppercase tracking-wider mb-0.5">
                        {item.name}
                    </h3>

                    <p className="text-gray-400 text-xs md:text-sm mb-3">
                        {item.equipment}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">

                        <div className="flex items-center gap-1.5">
                            <span>⏱</span>
                            <span>{item.duration} min</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                            <span>🔥</span>
                            <span>{item.caloriesBurned} kcal</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                            <span>⭐</span>
                            <span>{item.rating}</span>
                        </div>

                    </div>
                </div>

            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end mt-2 md:mt-0">

                <Link
                href={`home/${item.id}`}
                >
                <button className="btn btn-sm md:btn-md bg-base-300 hover:bg-base-100 border border-base-300 text-white text-xs font-semibold rounded-xl px-4">
                    View Details
                </button>
                </Link>

                {/* Delete Button */}
                <button
                    onClick={()=>handleDelete()}
                    className="text-gray-500 hover:text-red-500 p-2 transition-colors"
                    title="Remove"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

            </div>

        </div>
    );
};

export default SaveCard;