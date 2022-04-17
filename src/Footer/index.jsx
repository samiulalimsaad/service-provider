import React from "react";

const Footer = () => {
    return (
        <div className="p-4 sm:p-20 sm:items-center sm:gap-4 sm:flex sm:container justify-evenly text-slate-50">
            <div className="space-y-8 text-center sm:w-1/3">
                <h2 className="text-2xl">About Me</h2>
                <p>
                    Hi, I'm John Smith, a personal Trainer. I'm Gleam a small
                    and enthusiastic photography studio based in New York. love
                    photography and travel for meeting new beautiful people all
                    over the world.
                </p>
            </div>
            <div className="space-y-8 text-center sm:w-1/3">
                <h2 className="text-2xl">Contract</h2>
                <div>
                    <p>40 Park Ave, Brooklyn</p>
                    <p>New York, NY 10000, US</p>
                    <p>+1 800 111 2222</p>
                    <p>contact@example.com</p>
                </div>
            </div>
            <div className="sm:w-1/3">
                <h2 className="text-2xl">Recent Blogs</h2>
            </div>
        </div>
    );
};

export default Footer;
