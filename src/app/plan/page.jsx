import TabSection from '@/components/hompage/TabSection';
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
            <TabSection></TabSection>

        </div>
    );
};

export default page;