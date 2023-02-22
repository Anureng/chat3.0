import { ChatAppContect } from 'context/ChatAppContext'
import React, { useContext, useState } from 'react'
const AddFriend = ({ el, i, addFriend }) => {
    const [name, setName] = useState('')
    const [accountAddress, setAccountAddress] = useState('')
    const { friendLists } = useContext(ChatAppContect)

    return (
        <div className='bg-blue-400 flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold'>Add Your Friend</h1>
            <div className=' border border-black p-8 flex flex-col space-y-6 rounded-xl'>
            <input className=' focus:outline-none py-2 px-1 rounded-xl placeholder-black bg-transparent focus:none border border-black text-black' onChange={(e) => setName(e.target.value)} placeholder='NAME...' type="text" />
            <input className='focus:outline-none  py-2 px-1 rounded-xl placeholder-black bg-transparent focus:none border border-black text-black' onChange={(e) => setAccountAddress(e.target.value)} placeholder='Address...' type="text" />
            <button className='px-2 py-1 bg-blue-900 rounded-xl border border-black ml-2' onClick={() => addFriend({ name, accountAddress })}>submit</button>
            </div>
            {/* {friendLists} */}
        </div>
    )
}

export default AddFriend