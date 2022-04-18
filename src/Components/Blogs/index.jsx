import React from "react";
import Q1 from "./Blog/Q1";
import Q2 from "./Blog/Q2";
import Q3 from "./Blog/Q3";

const Blogs = () => {
    return (
        <div className="p-4 mx-auto space-y-8 sm:container sm:p-20">
            <Q1 />
            <Q2 />
            <Q3 />
        </div>
    );
};

export default Blogs;
