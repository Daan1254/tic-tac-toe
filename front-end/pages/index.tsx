import React from "react";
import Button from "@/components/Button";


export default function Home() {
    return (
        <main className="min-h-screen w-full bg-primary flex items-center justify-center">
          <div className='w-72 h-max p-4 flex flex-col gap-4'>
            <h1 className='text-3xl font-bold text-white'>Enter username</h1>
            <input className='bg-secondary border-0 rounded-lg p-3 placeholder-white text-white' placeholder='username'/>
              <Button onClick={() => {
                  console.log('clicked')
              }} >Create Game</Button>
              <Button onClick={() => {
                  console.log('clicked')
              }}>Join Game</Button>
          </div>
        </main>
    )
}
