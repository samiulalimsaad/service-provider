import React from "react";
import CustomLink from "../utilities/CustomLink";

const Header = () => {
    return (
        <div className="flex py-4 justify-between items-center container px-20 text-slate-50">
            <p className="text-3xl font-mono font-extrabold animate-pulse ">
                Will Smith
            </p>
            <div className="space-x-8">
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/blogs">Blogs</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/login">Login</CustomLink>
                <CustomLink to="/signup">Signup</CustomLink>
            </div>
        </div>
    );
};

export default Header;
