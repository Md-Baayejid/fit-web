import React from 'react';

const page = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8">

            {/* Header Title and Subtitle */}
            <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-base-content mb-1">
                    My Plan
                </h1>
                <p className="text-sm text-base-content/60">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            {/* Stats Card Container */}
            <div className="bg-base-200 border border-base-300 rounded-2xl p-6 md:p-8 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

                {/* Exercises Stat */}
                <div className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-wider text-base-content/50 mb-2">
                        Exercises
                    </span>
                    <span className="text-4xl md:text-5xl font-black text-primary">
                        2
                    </span>
                </div>

                {/* Minutes Stat */}
                <div className="flex flex-col border-t md:border-t-0 md:border-l border-base-300 pt-4 md:pt-0 md:pl-8">
                    <span className="text-xs font-semibold uppercase tracking-wider text-base-content/50 mb-2">
                        Minutes
                    </span>
                    <span className="text-4xl md:text-5xl font-black text-base-content">
                        23
                    </span>
                </div>

                {/* Calories Stat */}
                <div className="flex flex-col border-t md:border-t-0 md:border-l border-base-300 pt-4 md:pt-0 md:pl-8">
                    <span className="text-xs font-semibold uppercase tracking-wider text-base-content/50 mb-2">
                        Calories
                    </span>
                    <span className="text-4xl md:text-5xl font-black text-base-content">
                        190
                    </span>
                </div>

            </div>

            {/* name of each tab group should be unique */}
            <div className="w-full max-w-7xl mx-auto px-4 py-6">

                {/* Top Controls Bar (Tabs & Sort By) */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">

                    {/* Custom Radio Tabs / Pills */}
                    <div className="tabs tabs-boxed bg-base-200/40 p-1 rounded-xl border border-base-300 gap-1">
                        <input
                            type="radio"
                            name="workout_tabs"
                            className="tab px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all [--tab-bg:#121619] [--tab-border-color:transparent] checked:bg-[#1b221e] checked:text-primary"
                            aria-label="Today's Plan"
                        />
                        <input
                            type="radio"
                            name="workout_tabs"
                            className="tab px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all [--tab-bg:#121619] [--tab-border-color:transparent] checked:bg-[#1b221e] checked:text-primary"
                            aria-label="Saved"
                            defaultChecked
                        />
                    </div>

                    {/* Sort By Section */}
                    <div className="flex items-center gap-3 text-xs">
                        <span className="text-base-content/50 uppercase tracking-wider font-semibold">Sort By</span>
                        <button className="bg-base-200 border border-base-300 text-base-content px-4 py-2 rounded-xl font-semibold hover:border-base-content/30 transition-all">
                            Duration
                        </button>
                    </div>

                </div>

                {/* Tab Content Area with Dashed Border */}
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

            </div>

        </div>
    );
};

export default page;