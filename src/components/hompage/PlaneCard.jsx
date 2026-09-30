"use client";

import React, { useContext, useState } from "react";
import { CardContext } from "@/context/CardProvider";
import Link from "next/link";

const PlaneCard = ({ item }) => {

    const { planeCard, setPlaneCard } = useContext(CardContext);

    const [isDone, setIsDone] = useState(false);

    // Delete workout
    const handleDelete = () => {
        const updatedCards = planeCard.filter(
            (card) => card.id !== item.id
        );

        setPlaneCard(updatedCards);

        console.log("Deleted Card:", item);
        console.log("Remaining Plans:", updatedCards);
    };

    // Mark as done
    const handleDone = () => {
        setIsDone(true);

        console.log("Workout Completed:", item);
    };

    return (
        <div className="w-full mt-5 bg-base-200 border border-base-300 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">

            {/* Left Section: Image, Name, Equipment & Stats */}
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

                    {/* Stats Row */}
                    <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">

                        <div className="flex items-center gap-1.5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-3.5 h-3.5 text-primary"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>

                            <span>{item.duration} min</span>
                        </div>


                        <div className="flex items-center gap-1.5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-3.5 h-3.5 text-orange-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                            </svg>

                            <span>{item.caloriesBurned} kcal</span>
                        </div>


                        <div className="flex items-center gap-1.5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-3.5 h-3.5 text-primary fill-primary"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                />
                            </svg>

                            <span>{item.rating}</span>
                        </div>

                    </div>
                </div>

            </div>


            {/* Right Section */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end mt-2 md:mt-0">

                {/* View Details */}
                <Link
                href={`home/${item.id}`}
                >
                <button className="btn btn-sm md:btn-md bg-base-300 hover:bg-base-100 border border-base-300 text-white text-xs font-semibold rounded-xl px-4">
                    View Details
                </button>
                </Link>


                {/* Mark as Done */}
                <button
                    onClick={handleDone}
                    disabled={isDone}
                    className={`btn btn-sm md:btn-md text-black text-xs font-bold rounded-xl px-4 flex items-center gap-1.5 ${
                        isDone
                            ? "bg-gray-500 cursor-not-allowed"
                            : "bg-primary hover:bg-primary-focus"
                    }`}
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
                            strokeWidth="2.5"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>

                    {isDone ? "Done" : "Mark as Done"}

                </button>


                {/* Delete */}
                <button
                    onClick={handleDelete}
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

export default PlaneCard;