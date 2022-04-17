import React from "react";
import CustomLink from "../utilities/CustomLink";

const Navbar = () => {
    return (
        <div className="px-4 py-4 space-y-4 sm:space-y-0 sm:container sm:px-20 sm:flex sm:items-center sm:justify-between text-slate-50">
            <CustomLink
                to="/"
                className="flex gap-2 font-mono text-3xl font-extrabold animate-pulse"
            >
                <img src="/images/favicon.svg" className="h-8" alt="" /> John
                Smith
            </CustomLink>
            <div className="flex flex-col flex-wrap items-center justify-center sm:flex-row sm:space-x-8 sm:flex-nowrap">
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/blogs">Blogs</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/checkout">Checkout</CustomLink>
                <CustomLink to="/login">Login</CustomLink>
                <CustomLink to="/signup">Signup</CustomLink>
            </div>
        </div>
    );
};

export default Navbar;
