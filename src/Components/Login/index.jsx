import React from "react";
import {
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase.init";

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
        useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    // const from = location.state?.from?.pathname;

    console.log({ from });
    if (user || userGoogle) {
        navigate(from, { replace: true });
    }

    return (
        <div className="flex items-center justify-center p-4 sm:container sm:p-20">
            <div className="">
                <div className="w-full max-w-xs">
                    <div className="p-4 px-8 pt-6 pb-8 mb-4 bg-white border rounded-md shadow-md border-slate-500">
                        {error ||
                            (errorGoogle && (
                                <p className="p-4 mb-4 bg-red-200 rounded-md">
                                    {error?.message || errorGoogle.message}
                                </p>
                            ))}
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
                        <div className="space-y-4">
                            <button
                                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Sign In
                            </button>
                            <button
                                className="flex items-center justify-center w-full gap-4 px-4 py-2 font-bold bg-teal-300 rounded hover:text-white text-slate-700 hover:bg-teal-700 focus:outline-none focus:shadow-outline"
                                onClick={() => signInWithGoogle()}
                            >
                                <img
                                    src="/images/google.png"
                                    alt=""
                                    className="h-6"
                                />
                                Sign in With Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
