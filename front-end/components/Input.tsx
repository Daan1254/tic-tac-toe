import {UseFormRegister} from "react-hook-form";
import {GameForm} from "@/pages";

type Props = {
    placeholder?: string
    register: UseFormRegister<GameForm>
}

export default function Input({ placeholder, register }: Props) {
    return (
        <div>
            <label htmlFor="email" className="text-sm text-navy-700 dark:text-white font-bold">Enter your name</label>
            <input {...register('name')} type="text" id="email" placeholder={placeholder} className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"/>
        </div>
    )
}
