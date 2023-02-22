import { ChatAppContect } from 'context/ChatAppContext'
import React from 'react'

const AllFriend = () => {
  const {friendLists} = useContext(ChatAppContect)
  
  return (
   <div>{friendLists}</div>
  )
}

export default AllFriend
