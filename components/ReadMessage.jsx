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
  

<div>
      <div className='border border-black'>
        <div>
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
        <div>
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