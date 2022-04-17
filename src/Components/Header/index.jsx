import React from "react";
import CustomLink from "../utilities/CustomLink";

const Header = () => {
    return (
        <div className="container flex items-center justify-between px-20 py-4 text-slate-50">
            <CustomLink
                to="/"
                className="flex gap-2 text-3xl font-extrabold sfont-mono animate-pulse"
            >
                <img src="/images/favicon.svg" className="h-8" alt="" /> John
                Smith
            </CustomLink>
            <div className="space-x-8">
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

export default Header;
