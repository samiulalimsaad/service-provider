import React from "react";
import { NavLink } from "react-router-dom";

const Service = ({ name, price, description, top }) => {
    return (
        <div
            className={`relative w-1/5 shadow-md rounded-md ${
                top
                    ? "bg-teal-500 text-white hover:-translate-y-5 duration-1000"
                    : "bg-white"
            }`}
        >
            <div
                className={`p-4 mb-8 space-y-8 ${
                    top ? "text-slate-200" : "text-slate-600"
                }`}
            >
                <h2 className="text-4xl font-black text-center">{name}</h2>
                <p className="font-mono text-2xl text-center text-extrabold">
                    ${price}
                </p>
                <p className="">{description.substr(0, 300)}</p>
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