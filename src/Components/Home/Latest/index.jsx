import React from "react";

const latest = [
    "/images/latest-1.jpg",
    "/images/latest-2.jpg",
    "/images/latest-3.jpg",
    "/images/latest-4.jpg",
    "/images/latest-5.jpg",
    "/images/latest-6.jpg",
];

const Latest = () => {
    return (
        <div id="services" className="p-4 sm:container sm:p-20">
            <h2 className="mb-8 text-6xl text-center text-slate-800">
                Latest Clicks
            </h2>
            <div className="sm:flex-wrap sm:space-y-0 sm:flex justify-evenly">
                {latest?.map((img) => (
                    <div key={img} className="overflow-hidden sm:w-1/3 ">
                        <img
                            src={img}
                            alt=""
                            className="w-full h-full duration-500 hover:scale-110"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Latest;
