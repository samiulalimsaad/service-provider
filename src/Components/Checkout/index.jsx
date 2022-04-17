import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
    return (
        <div className="flex items-center justify-center p-4 sm:container sm:p-20">
            <div className="w-full max-w-lg p-4 bg-white rounded-md shadow-md">
                <div className="flex flex-wrap mb-6 -mx-3">
                    <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                        <label
                            className="block mb-2 text-xs font-bold tracking-wide uppercase text-slate-700"
                            htmlFor="grid-first-name"
                        >
                            First Name
                        </label>
                        <input
                            className="block w-full px-4 py-3 mb-3 leading-tight border rounded appearance-none text-slate-700 border-slate-500 focus:outline-none focus:bg-white focus:border-slate-900"
                            id="grid-first-name"
                            type="text"
                        />
                        <p className="text-xs italic text-slate-500">
                            Please fill out this field.
                        </p>
                    </div>
                    <div className="w-full px-3 md:w-1/2">
                        <label
                            className="block mb-2 text-xs font-bold tracking-wide uppercase text-slate-700"
                            htmlFor="grid-last-name"
                        >
                            Last Name
                        </label>
                        <input
                            className="block w-full px-4 py-3 leading-tight border rounded appearance-none text-slate-700 border-slate-500 focus:outline-none focus:bg-white focus:border-slate-900"
                            id="grid-last-name"
                            type="text"
                            placeholder="Doe"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap mb-2 -mx-3">
                    <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                        <label
                            className="block mb-2 text-xs font-bold tracking-wide uppercase text-slate-700"
                            htmlFor="grid-city"
                        >
                            City
                        </label>
                        <input
                            className="block w-full px-4 py-3 leading-tight border rounded appearance-none text-slate-700 border-slate-500 focus:outline-none focus:bg-white focus:border-slate-900"
                            id="grid-city"
                            type="text"
                            placeholder="Albuquerque"
                        />
                    </div>
                    <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                        <label
                            className="block mb-2 text-xs font-bold tracking-wide uppercase text-slate-700"
                            htmlFor="grid-state"
                        >
                            State
                        </label>
                        <div className="relative">
                            <select
                                className="block w-full px-4 py-3 pr-8 leading-tight border rounded appearance-none text-slate-700 border-slate-500 focus:outline-none focus:bg-white focus:border-slate-900"
                                id="grid-state"
                            >
                                <option>Rajshahi</option>
                                <option>Dhaka</option>
                                <option>Natore</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-slate-700">
                                <svg
                                    className="w-4 h-4 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                        <label
                            className="block mb-2 text-xs font-bold tracking-wide uppercase text-slate-700"
                            htmlFor="grid-zip"
                        >
                            Zip
                        </label>
                        <input
                            className="block w-full px-4 py-3 leading-tight border rounded appearance-none text-slate-700 border-slate-500 focus:outline-none focus:bg-white focus:border-slate-900 "
                            id="grid-zip"
                            type="text"
                            placeholder="90210"
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <label
                        className="block mb-2 text-sm font-bold text-slate-700"
                        htmlFor="amount"
                    >
                        Price
                    </label>
                    <input
                        className="w-full px-3 py-2 mb-3 leading-tight border rounded shadow appearance-none border-slate-500 text-slate-700 focus:outline-none focus:shadow-outline focus:border-slate-900"
                        id="amount"
                        type="number"
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block mb-2 text-sm font-bold text-slate-700"
                        htmlFor="date-form"
                    >
                        Date From
                    </label>
                    <input
                        className="w-full px-3 py-2 mb-3 leading-tight border rounded shadow appearance-none border-slate-500 text-slate-700 focus:outline-none focus:shadow-outline focus:border-slate-900"
                        id="date-form"
                        type="date"
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block mb-2 text-sm font-bold text-slate-700"
                        htmlFor="date-to"
                    >
                        Date To
                    </label>
                    <input
                        className="w-full px-3 py-2 mb-3 leading-tight border rounded shadow appearance-none border-slate-500 text-slate-700 focus:outline-none focus:shadow-outline focus:border-slate-900"
                        id="date-to"
                        type="date"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={() => {
                            toast.success("thank you for the booking!", {
                                theme: "dark",
                            });
                        }}
                    >
                        Pay Now
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Checkout;
