import React from "react";

const About = () => {
    return (
        <div className="container flex items-center justify-between p-20 mx-auto">
            <div className="w-1/2 space-y-4 text-slate-800">
                <h1 className="pb-8 text-5xl text-center text-semibold">
                    Samiul Alim (Saad)
                </h1>
                <div className="leading-10 text-justify">
                    <p>
                        I am 24 years old. I'm from Rajshahi. I have Completed
                        my graduation from NBIU. I have a Bachelor's degree in
                        CSE. I am very passionate about computers, programming
                        and web development since my university life. I dream to
                        be an expert software engineer or a web developer so
                        that I can build professional and useful software or web
                        application. I very interested to work as a front-end
                        developer. I always follow Never give up attitude. A
                        huge dream to be a great developer.
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <img
                    src="/images/saad.jpg"
                    alt="samiul alim"
                    className="border-8 rounded-full shadow-lg border-teal-500/50 h-96 drop-shadow-2xl"
                />
            </div>
        </div>
    );
};

export default About;
