import React from "react";
import Q1 from "./Blog/Q1";
import Q2 from "./Blog/Q2";
import Q3 from "./Blog/Q3";

const Blogs = () => {
    return (
        <div className="container px-20 mx-auto my-12 space-y-8">
            <Q1 />
            <Q2 />
            <Q3 />
        </div>
    );
};

export default Blogs;
