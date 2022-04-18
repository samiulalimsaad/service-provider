import React from "react";

const Q1 = () => {
    return (
        <div>
            <h1 className="mb-8 text-5xl text-center text-semibold">
                1. Difference between authorization and authentication
            </h1>
            <table className="w-full border border-collapse border-teal-500 table-fixed text-slate-900">
                <thead className="text-white bg-teal-500">
                    <tr>
                        <th className="p-4 border border-teal-900 ">
                            Authentication
                        </th>
                        <th className="p-4 border border-teal-900 ">
                            Authorization
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-4 border border-teal-900">
                            identity of users are checked to provide access to
                            the system.
                        </td>
                        <td className="p-4 border border-teal-900">
                            persons or users are checked for accessing the
                            resources.
                        </td>
                    </tr>
                    <tr>
                        <td className="p-4 border border-teal-900">
                            user is verified.
                        </td>
                        <td className="p-4 border border-teal-900">
                            users are validated.
                        </td>
                    </tr>
                    <tr>
                        <td className="p-4 border border-teal-900">
                            done before the authorization process.
                        </td>
                        <td className="p-4 border border-teal-900">
                            after the process allow user to accessing
                        </td>
                    </tr>
                    <tr>
                        <td className="p-4 border border-teal-900">
                            usually need user login details.
                        </td>
                        <td className="p-4 border border-teal-900">
                            needs user privilege.
                        </td>
                    </tr>
                    <tr>
                        <td className="p-4 border border-teal-900">
                            determines whether the person is user or not.
                        </td>
                        <td className="p-4 border border-teal-900">
                            determines What permission do user have?
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Q1;
