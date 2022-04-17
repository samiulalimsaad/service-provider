import React from "react";

const Footer = () => {
    return (
        <div className="gap-4 p-4 space-y-8 sm:space-y-0 sm:p-20 sm:items-center sm:flex sm:container justify-evenly text-slate-50">
            <div className="space-y-8 text-center sm:w-1/2">
                <h2 className="text-2xl">About Me</h2>
                <p className="flex justify-center sm:px-20">
                    Hi, I'm John Smith, a personal Trainer. I'm Gleam a small
                    and enthusiastic photography studio based in New York. love
                    photography and travel for meeting new beautiful people all
                    over the world.
                </p>
            </div>
            <div className="space-y-8 text-center sm:w-1/2">
                <h2 className="text-2xl">Contract</h2>
                <div>
                    <p>40 Park Ave, Brooklyn</p>
                    <p>New York, NY 10000, US</p>
                    <p>+1 800 111 2222</p>
                    <p>contact@example.com</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
