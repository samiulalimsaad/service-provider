import React from "react";

const Q3 = () => {
    return (
        <div>
            <div>
                <h2 className="mb-8 text-5xl text-center text-semibold">
                    3 What other services does firebase provide other than
                    authentication
                </h2>
                <div className="space-y-4 list-decimal">
                    <li>
                        Firebase Database: Firebase Database to store data. also
                        known as fireStore
                    </li>
                    <li>
                        Realtime Database: Realtime Database used for realtime
                        communication like websocket
                    </li>
                    <li>Storage: Storage used to store files</li>
                    <li>
                        Functions: Functions used to implements custom or other
                        business logic.
                    </li>
                    <li>
                        Predictions: Predictions As the name suggests, this
                        service helps to make predictions about product
                        decisions. Without having any machine learning
                        experience, this service easily in dividing the users in
                        different fragments, and make decisions based on user
                        behavior.
                    </li>
                    <li>
                        Google Analytics: Google Analytics service helps in
                        growing and managing business. It can become helpful in
                        tracking user demographics, behavior, purchasing
                        patterns, revenue reports. The service provides
                        visualization of all this information on just a single
                        tap.
                    </li>
                    <li>Crashlytics: Crashlytics generate crash reports.</li>
                    <li>Machine Learning.</li>
                    <li>Performance.</li>
                    <li>Test Lab.</li>
                    <li>Cloud Messaging.</li>
                    <li>Remote Config.</li>
                    <li>A/B Testing.</li>
                    <li>Dynamic Links.</li>
                    <li>In App Messaging.</li>
                    <li>AdMob.</li>
                </div>
            </div>
        </div>
    );
};

export default Q3;
