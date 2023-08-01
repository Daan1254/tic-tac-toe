import React from "react";
import {twMerge} from "tailwind-merge";

type Props = {
    children: React.ReactNode
    onClick: () => void
    className?: string
    type?: 'submit' | 'button'
}
export default function Button({ children, onClick, className, type = 'button' }: Props) {
    return (
        <button type={type} onClick={onClick} className={`${twMerge('p-4 bg-green-400 hover:bg-green-500 w-full rounded-lg shadow text-xl font-medium uppercase text-white', className)}`}>{children}</button>
    )
}