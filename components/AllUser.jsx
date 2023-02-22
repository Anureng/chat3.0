import { ChatAppContect } from 'context/ChatAppContext'
import React, { useContext, useState } from 'react'

function AllUser() {
    const { userLists ,addFriend} = useContext(ChatAppContect)

    return (
        <div className='bg-blue-400 flex flex-col h-96 items-center justify-center p-4'>
            <div className='text-2xl font-bold border-b border-black'>
                AllUser
            </div>
            <div className='flex flex-wrap space-x-10  space-y-10 items-center justify-center mt-2' >
                {userLists.map((el)=>(
                <div className='border flex flex-col  rounded-xl items-center border-black  px-2 py-1 text-lg ' >
                <div key={el.id} className="">
                {el.name}
                </div>  
             <div key={el.id} className="space-x-6">{el.accountAddress}</div>
            </div>
            ))}
            </div>

            </div>
    )
}

export default AllUser