import React from "react";
import {twMerge} from "tailwind-merge";

export type ButtonProps = {
    children: React.ReactNode
    onClick: () => void
    className?: string
}
export default function Button({ children, onClick, className }: ButtonProps) {
    return (
        <div className="p-6 ">
            <button onClick={onClick} className={`${twMerge('p-4 bg-green-400 hover:bg-green-500 w-full rounded-lg shadow text-xl font-medium uppercase text-white', className)}`}>{children}</button>
        </div>
    )
}