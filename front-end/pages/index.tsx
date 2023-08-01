import React from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import {useForm} from "react-hook-form";

export type GameForm = {
    name: string
}

export default function Home() {

    const {register, handleSubmit} = useForm<GameForm>()


    const onSubmit = (data: GameForm) => {
        console.log(data)
    }

    return (
        <div className="min-h-screen flex-1 bg-gray-200 p-4 flex justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white w-full md:max-w-4xl rounded-lg shadow flex flex-col gap-5 p-4">
                <div className="h-12 flex text-lg justify-between items-center border-b border-gray-200">
                    <h1>
                        Welcome to tic tac toe
                    </h1>
                </div>
                <Input register={register}  placeholder={'Tic tac toe pro 😎'} />
                <Button type={'submit'} onClick={() => {}} className="">Create Game</Button>
                <Button onClick={() => {}} className="bg-red-400 hover:bg-red-600">Join Game</Button>
            </form>
        </div>
    )
}