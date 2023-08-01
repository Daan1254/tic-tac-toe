import React from "react";


export default function InviteButton({onClick, children}: { onClick: () => void, children: React.ReactNode}) {
    return (
        <div
            className="flex bg-gray-200 justify-center items-center h-16 p-4 my-6  rounded-lg  shadow-inner">
            <div
                onClick={onClick}
                className="flex items-center border border-gray-400 p-2 border-dashed rounded cursor-pointer">
                <div>
                    <svg className="text-gray-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                    </svg>
                </div>
                <div className="ml-1 text-gray-500 font-medium"> {children}</div>
            </div>
        </div>
    )
}