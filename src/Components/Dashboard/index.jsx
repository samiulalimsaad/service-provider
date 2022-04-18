import React, { useState } from "react";
import { useAuthState, useUpdatePassword } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../Firebase.init";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [updatePassword, updating, error] = useUpdatePassword(auth);

    const [password, setPassword] = useState("");

    return (
        <div className="flex items-center justify-center p-4 sm:container sm:p-20">
            <div className="sm:w-1/3">
                <div className="p-4 px-8 pt-6 pb-8 mb-4 bg-white border rounded-md shadow-md border-slate-500">
                    {error && (
                        <p className="p-4 mb-4 bg-red-200 rounded-md">
                            {error?.message}
                        </p>
                    )}
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
                            required
                            readOnly
                            value={user?.email}
                            onBlur={(e) => setEmail(e.target.value)}
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
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-center mt-4 text-sky-600">
                        <button
                            type="button"
                            onClick={async () => {
                                await updatePassword(password);
                                user &&
                                    toast.success("Password updated", {
                                        theme: "dark",
                                    });
                            }}
                        >
                            Update Password
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Dashboard;
