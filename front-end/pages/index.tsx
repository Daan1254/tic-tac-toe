import React, {useState} from "react";
import Button from "@/components/Button";
import PlayerRow from "@/components/PlayerRow";


export type Player = {
    id: string
    name: string
    rating: number
}


export type Game = {
    id: string
    host: Player
    players: Player[]
}


export default function Home() {

    const [game, setGame] = useState<Game | null>({
        id: '1',
        host: {
            id: '1',
            name: 'Lirik',
            rating: 6
        },
        players: [
            {
                id: '1',
                name: 'Lirik',
                rating: 6
            },
            // {
            //     id: '2',
            //     name: 'MembTV',
            //     rating: 4
            // }
        ]
    });
    return (
        <div className="min-h-screen flex-1 bg-gray-200 p-4 flex justify-center items-center">
            <div className="bg-white w-full md:max-w-4xl rounded-lg shadow">
                <div className="h-12 flex justify-between items-center border-b border-gray-200 m-4">
                    <div >
                        <div className="text-xl font-bold text-gray-700">{game?.host.name} Lobby</div>
                        <div className="text-sm font-base text-gray-500">
                            {game?.players.length === 2 ?
                            'Ready to start game': 'Waiting for players'}
                        </div>
                    </div>
                </div>
                <div className="px-6">
                    {game?.players.map((player) => (
                        <PlayerRow key={player.id} {...player} />
                    ))}
                    <div
                        className="flex bg-gray-200 justify-center items-center h-16 p-4 my-6  rounded-lg  shadow-inner">
                        <div
                            className="flex items-center border border-gray-400 p-2 border-dashed rounded cursor-pointer">
                            <div>
                                <svg className="text-gray-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                                </svg>
                            </div>
                            <div className="ml-1 text-gray-500 font-medium"> Invite a friend</div>
                        </div>
                    </div>
                </div>
                <Button onClick={() => {

                }}> {
                    game?.players.length === 2 ?
                        'Start Game' : 'Waiting for players...'
                }</Button>
            </div>
        </div>
    )
}
