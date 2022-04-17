import React from "react";
import { NavLink } from "react-router-dom";

const Service = ({ name, price, image, description, top }) => {
    return (
        <div
            className={`relative sm:w-1/5 shadow-md rounded-md overflow-hidden hover:-translate-y-2 duration-500 ${
                top ? "bg-teal-500 text-white" : "bg-white"
            }`}
        >
            <img src={image} alt={name} />
            <div
                className={`p-4 mb-8 space-y-8 ${
                    top ? "text-slate-200" : "text-slate-600"
                }`}
            >
                <h2 className="text-2xl text-center">{name}</h2>
                <p className="font-mono text-4xl font-extrabold text-center">
                    ${price}
                </p>
                <p className="text-justify">{description.substr(0, 300)}</p>
            </div>
            <NavLink
                to="/checkout"
                className={`absolute bottom-0 w-full py-2 text-center text-slate-700 rounded-md ${
                    top
                        ? "bg-teal-900 hover:bg-green-900 text-white"
                        : "bg-sky-400 hover:bg-teal-400"
                }`}
            >
                Hire Me
            </NavLink>
        </div>
    );
};

export default Service;
