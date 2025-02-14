import React from "react";

export const NotFound = () => {
    return (
        <section id="not-found" className="border text-white text-center text-3xl font-extrabold border-black/20 bg-black/30 rounded-lg backdrop-blur-3xl p-6 mb-3 shadow-lg w-full max-w-4xl mx-auto">
            404 - Not Found
            <div className="text-xl font-normal mt-6">
                Looks like the page you requested isn't available! <br /> ¯\_(ツ)_/¯
            </div>
        </section>
    );
};
