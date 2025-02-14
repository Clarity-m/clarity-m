import React, { useState, useEffect } from "react";

const DISCORD_ID = "1321914417730027640";

export const Status = () => {
    const [status, setStatus] = useState("loading...");
    const [userData, setUserData] = useState(null);
    const [activity, setActivity] = useState(null);

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const response = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
                const data = await response.json();

                if (data.success) {
                    setStatus(data.data.discord_status);
                    setUserData(data.data.discord_user);
                    const activeActivity = data.data.activities.find((act) => act.type === 0);
                    setActivity(activeActivity ? activeActivity.name : null);
                }
            } catch (error) {
                setStatus("Error fetching status");
            }
        };

        fetchStatus();
        const interval = setInterval(fetchStatus, 3000);

        return () => clearInterval(interval);
    }, []);

    const statusMap = {
        online: "🟢 Online",
        idle: "🟡 Idle",
        dnd: "🔴 Do Not Disturb",
        offline: "⚫ Offline",
    };

    return (
        <section className="border text-white text-center text-2xl font-extrabold border-black/20 bg-black/30 rounded-lg backdrop-blur-3xl p-6 mb-3 shadow-lg w-full max-w-4xl mx-auto flex flex-col space-y-6">

            {/* Discord Status */}
            <div className="flex flex-col items-center space-y-4 p-4 bg-black/40 border border-black/20 rounded-lg w-full transition duration-500 ease-in-out hover:border-white">
                <h2 className="text-2xl underline">Discord Status</h2>
                {userData && (
                    <div className="flex flex-col items-center">
                        <img
                            src={`https://cdn.discordapp.com/avatars/${DISCORD_ID}/${userData.avatar}.png`}
                            alt="Discord Avatar"
                            className="w-24 h-24 rounded-full border-4 border-white hover:border-blue-400 shadow-lg"
                        />
                        <p className="text-3xl mt-2">{userData.global_name || userData.username}</p>
                        <p className="text-lg text-gray-300">@{userData.username}</p>
                    </div>
                )}
                <p className="text-lg">{statusMap[status] || "Loading..."}</p>
                {activity && <p className="text-lg text-gray-400">Playing: {activity}</p>}
            </div>

            {/* Telegram Status (Placeholder) */}
            <div className="flex flex-col items-center space-y-4 p-4 bg-black/40 border border-black/20 rounded-lg w-full transition duration-500 ease-in-out hover:border-white">
                <h2 className="text-2xl underline">Telegram Status</h2>
                {userData && (
                    <div className="flex flex-col items-center">
                        <img
                            src={`https://cdn.discordapp.com/avatars/${DISCORD_ID}/${userData.avatar}.png`}
                            alt="Discord Avatar"
                            className="w-24 h-24 rounded-full border-4 border-white hover:border-blue-400 shadow-lg"
                        />
                        <p className="text-3xl mt-2">Clarity</p>
                        <p className="text-lg text-gray-300">@clarity_m</p>
                    </div>
                )}
                <p className="text-lg">last seen recently</p>
            </div>

        </section>
    );
};
