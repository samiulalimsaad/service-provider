import React from "react";

const Banner = () => {
    return (
        <div className="h-screen bg-cover bg-center bg-[url('/images/11.jpg')] ">
            <div className="flex items-center justify-center h-screen bg-gradient-to-r from-slate-900/50 to-slate-900/50">
                <div className="w-1/3 space-y-8 text-2xl text-center text-slate-50">
                    <h1>Hi, I'm John Smith,</h1>
                    <p>
                        a personal Trainer. I'm Gleam a small and enthusiastic
                        photography studio based in New York. love photography
                        and travel for meeting new beautiful people all over the
                        world.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
