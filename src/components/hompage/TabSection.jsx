"use client";

import React, { useContext, useState } from "react";
import { CardContext } from "@/context/CardProvider";
import PlaneCard from "./PlaneCard";
import SaveCard from "./SaveCard";

const TabSection = () => {
    const { planeCard, saveCard } = useContext(CardContext);

    const [activeTab, setActiveTab] = useState("today");

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-6">

            {/* Top Controls Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">

                {/* Tabs */}
                <div className="tabs tabs-boxed bg-base-200/40 p-1 rounded-xl border border-base-300 gap-1">

                    <button
                        onClick={() => setActiveTab("today")}
                        className={`tab px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
                            activeTab === "today"
                                ? "bg-[#1b221e] text-primary"
                                : "text-base-content/60"
                        }`}
                    >
                        Today&apos;s Plan
                    </button>

                    <button
                        onClick={() => setActiveTab("saved")}
                        className={`tab px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
                            activeTab === "saved"
                                ? "bg-[#1b221e] text-primary"
                                : "text-base-content/60"
                        }`}
                    >
                        Saved
                    </button>

                </div>

                {/* Sort By */}
                <div className="flex items-center gap-3 text-xs">
                    <span className="text-base-content/50 uppercase tracking-wider font-semibold">
                        Sort By
                    </span>

                    <button className="bg-base-200 border border-base-300 text-base-content px-4 py-2 rounded-xl font-semibold hover:border-base-content/30 transition-all">
                        Duration
                    </button>
                </div>

            </div>


            {/* ================= TODAY'S PLAN ================= */}

            {activeTab === "today" && (
                <>
                    {planeCard?.length > 0 ? (

                        <div className="gap-y-5">

                            {planeCard.map((item) => (
                                <PlaneCard key={item.id} item={item}></PlaneCard>
                            ))}

                        </div>

                    ) : (

                        /* Empty State */

                        <div className="border-2 border-dashed border-base-300 rounded-2xl p-12 md:p-20 flex flex-col items-center justify-center text-center bg-base-200/20">

                            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-base-content mb-2">
                                Nothing here yet
                            </h2>

                            <p className="text-sm text-base-content/60 mb-8">
                                Browse the library and add a lift to get today moving.
                            </p>

                            <button className="bg-primary hover:bg-primary-focus text-black font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors">
                                Go to workouts
                            </button>

                        </div>

                    )}
                </>
            )}


            {/* ================= SAVED ================= */}

            {activeTab === "saved" && (
                <>
                    {saveCard?.length > 0 ? (

                        <div className="gap-y-5">

                            {saveCard.map((item) => (
                                <SaveCard
                                    key={item.id}
                                    item={item}
                                />
                            ))}

                        </div>

                    ) : (

                        <div className="border-2 border-dashed border-base-300 rounded-2xl p-12 md:p-20 flex flex-col items-center justify-center text-center bg-base-200/20">

                            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-base-content mb-2">
                                No Saved Workouts
                            </h2>

                            <p className="text-sm text-base-content/60 mb-8">
                                Save your favorite workouts and they will appear here.
                            </p>

                            <button
                                onClick={() => setActiveTab("today")}
                                className="bg-primary hover:bg-primary-focus text-black font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors"
                            >
                                Browse Workouts
                            </button>

                        </div>

                    )}
                </>
            )}

        </div>
    );
};

export default TabSection;