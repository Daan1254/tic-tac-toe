import React, {useState} from "react";
import Button from "@/components/Button";
import PlayerRow from "@/components/PlayerRow";
import InviteButton from "@/components/InviteButton";


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

    function startGame() {
        if (game?.players.length !== 2) {
            console.log('not enough players')
            return
        }

        // TODO: Start Game
    }

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
                    <InviteButton onClick={() => {
                        console.log('invite button clicked')
                    }}
                    >Invite a friend</InviteButton>
                </div>
                <Button onClick={startGame}> {
                    game?.players.length === 2 ?
                        'Start Game' : 'Waiting for players...'
                }</Button>
            </div>
        </div>
    )
}
