import { ChatAppContect } from 'context/ChatAppContext'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { connectingWithContract } from 'utils/apiFeature'

function UserAdd() {
    const [name, setName] = useState('')
    const { createAccount, username } = useContext(ChatAppContect)
    return (
        <div className='flex justify-evenly p-8  bg-blue-400 h-screen'>

            <div className=' flex items-center space-x-8 '>
                <div className='border border-black rounded-xl p-8 space-y-6'>
                    <p className='text-2xl'>Add your Name and create your account</p>
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Add Your Name' className='py-2 px-1 rounded-xl placeholder-black bg-transparent focus:none border border-black text-black' />
                    <button onClick={()=>createAccount({name})}className="px-2 py-1 bg-blue-900 rounded-xl border border-black ml-2">submit</button>
                </div>
                <div>
                    <Image src="/Home.png" width={500} height={500} />
                </div>
            </div>
            <div>{
                username ? (
                    <div className='text-2xl border border-black px-2  flex  space-x-10 py-1 rounded-xl font-bold'>
                    <h1 className='font-light'>Hello,</h1>
                    {username}
                    </div>
                ) : (
                    <div className='text-2xl border border-black px-2 py-1 rounded-xl'>Accounts Need to be Created</div>
                )
            }</div>
        </div>
    )
}

export default UserAdd