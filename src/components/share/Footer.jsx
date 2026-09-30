import Image from 'next/image';
import React from 'react';
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <div>
            <footer className="w-full bg-[#0b0e0d] border-t border-base-300 py-6 px-6 md:px-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

                    {/* Left Side: Logo and Brand Name */}
                    <div className="flex items-center gap-3">
                        <Image
                                            src={logo}
                                            height={20}
                                            width={30}
                                            alt="Logo"
                                            ></Image>
                        <span className="text-sm font-bold tracking-wider text-white">FITLOG</span>
                    </div>

                    {/* Right Side: Copyright and Tagline */}
                    <div className="text-xs text-base-content/50 text-center md:text-right">
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Footer;