import React from "react";

const Login = () => {
    return (
        <div className="flex items-center justify-center p-4 sm:container sm:p-20">
            <div className="">
                <div className="w-full max-w-xs">
                    <div className="p-4 px-8 pt-6 pb-8 mb-4 bg-white border rounded-md shadow-md border-slate-500">
                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold text-slate-700"
                                htmlFor="username"
                            >
                                Email
                            </label>
                            <input
                                className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none text-slate-700 focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="email"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="block mb-2 text-sm font-bold text-slate-700"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="w-full px-3 py-2 mb-3 leading-tight border rounded shadow appearance-none border-slate-500 text-slate-700 focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="******************"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Sign In
                            </button>
                            <a
                                className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
                                href="#"
                            >
                                Forgot Password?
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
