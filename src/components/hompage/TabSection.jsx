import React from 'react';

const TabSection = () => {
    return (
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
    );
};

export default TabSection;