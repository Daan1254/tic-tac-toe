import React from "react";

export default function Home() {
    return (
        <div className="min-h-screen flex-1 bg-gray-200 p-4 flex justify-center items-center">
            <div className="bg-white w-full md:max-w-4xl rounded-lg shadow">
                <div className="h-12 flex text-lg justify-between items-center border-b border-gray-200 m-4">
                    <h1>
                        Welcome to tic tac toe
                    </h1>
                </div>
            </div>
        </div>
    )
}