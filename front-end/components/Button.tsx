import {twMerge} from "tailwind-merge";

export type ButtonProps = {
    children: React.ReactNode
    onClick: () => void
    className?: string
}
export default function Button({ children, onClick, className }: ButtonProps) {
    return (
        <button onClick={onClick} className={twMerge('px-3 py-2 w-full bg-secondary text-white rounded border-0', className)}>
            {children}
        </button>
    )
}