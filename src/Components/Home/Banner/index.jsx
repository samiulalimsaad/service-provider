import React from "react";

const Banner = () => {
    return (
        <div className="h-screen bg-cover bg-center bg-[url('/images/11.jpg')] ">
            <div className="flex items-center justify-center h-screen bg-gradient-to-r from-slate-900/50 to-slate-900/50">
                <div className="px-4 space-y-8 text-center sm:px-0 sm:w-1/3 sm:text-xl text-slate-50">
                    <h1 className="text-5xl sm:text-8xl">John Smith</h1>
                    <p>
                        A personal Trainer love photography and travel for
                        meeting new beautiful people all over the world.
                    </p>
                    <p>
                        <a
                            href="#services"
                            className="px-8 py-4 bg-sky-500 text-slate-50"
                        >
                            Services
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
