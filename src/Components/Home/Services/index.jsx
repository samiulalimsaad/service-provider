import axios from "axios";
import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        axios
            .get("/services.json")
            .then(({ data }) => setServices(data))
            .catch((e) => console.log(e));
    }, []);

    return (
        <div id="services" className="p-4 sm:container sm:p-20">
            <h2 className="mb-8 text-6xl text-center text-slate-800">
                Services
            </h2>
            <div className="gap-4 space-y-4 sm:space-y-0 sm:flex justify-evenly">
                {services?.map((service) => (
                    <Service key={service.id} {...service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
