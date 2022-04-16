import React from "react";

const Footer = () => {
    return (
        <div className="container p-10 flex items-center justify-evenly gap-4 text-slate-50">
            <div className="w-1/3 space-y-8 text-center">
                <h2 className="text-2xl">About Me</h2>
                <p>Hi, I'm Will Smith, a personal Trainer.</p>
            </div>
            <div className="w-1/3 text-center space-y-8">
                <h2 className="text-2xl">Contract</h2>
                <div>
                    <p>40 Park Ave, Brooklyn</p>
                    <p>New York, NY 10000, US</p>
                    <p>+1 800 111 2222</p>
                    <p>contact@example.com</p>
                </div>
            </div>
            <div className="w-1/3">
                <h2 className="text-2xl">Recent Blogs</h2>
            </div>
        </div>
    );
};

export default Footer;
