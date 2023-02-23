import React, { useContext, useEffect, useState } from 'react'
import { ChatAppContect } from 'context/ChatAppContext'
import Card from './Card'
import Chat from './Chat'


function ReadMessage({ el, i, readUser}) {
  const {   functionName,
    friendLists,
    friendMsg,
    account,
    userName,
    loading,
    currentUserName,
    currentUserAddress,
    sendMessage,
    readMessages,
    username
    } = useContext(ChatAppContect)


  return (
<div className='flex  flex-col items-center justify-center p-8'>

  <p className='text-xl font-bold'>{username} FrienList</p>
      <div className='border border-black flex items-center justify-evenly p-8 space-x-10 rounded-xl'>
        <div className='text-xl p-8'>
          {friendLists.map((el, i) => (
            <Card
              key={i + 1}
              el={el}
              i={i}
              readMessage={readMessages}
              readUser={readUser}
            />
          ))}
        </div>
        <div className='text-xl '>
          <Chat
            functionName={sendMessage}
            readMessage={readMessages}
            friendMsg={friendMsg}
            account={account}
            userName={userName}
            loading={loading}
            currentUserName={currentUserName}
            currentUserAddress={currentUserAddress}
            readUser={readUser}
          />
        </div>
      </div>
    </div>
      
  )
}

export default ReadMessage