import React from 'react';

const GlobalLoading = () => {
    return (
         <div className="min-h-screen flex flex-col items-center justify-center bg-[#121614]">

            <div className="flex items-end gap-1 h-10">

                <div className="w-2 bg-[#a3e635] rounded-full animate-bounce [animation-delay:-0.3s] h-5"></div>

                <div className="w-2 bg-[#a3e635] rounded-full animate-bounce [animation-delay:-0.15s] h-8"></div>

                <div className="w-2 bg-[#a3e635] rounded-full animate-bounce h-10"></div>

                <div className="w-2 bg-[#a3e635] rounded-full animate-bounce [animation-delay:-0.15s] h-8"></div>

                <div className="w-2 bg-[#a3e635] rounded-full animate-bounce [animation-delay:-0.3s] h-5"></div>

            </div>

            <p className="text-gray-400 text-sm mt-5">
                Loading ...
            </p>

        </div>
    );
};

export default GlobalLoading;