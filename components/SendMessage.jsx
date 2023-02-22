import { ChatAppContect } from 'context/ChatAppContext'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from "next/router";
import { converTime } from 'utils/apiFeature';
import ReadMessage from './ReadMessage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SendMessage = () => {
    const [address, setAddress] = useState('')
    const [msg, setMsg] = useState('')
    const { sendMessage, setCurrentUserName, readMessages,
        friendMsg,
        account,
        userName,
        loading,
        currentUserName,
        currentUserAddress,
        friendLists,
        readUser } = useContext(ChatAppContect)
    const [chatData, setChatData] = useState({
        name: "",
        address: "",
    });
    const [name, setName] = useState('')
    const notify = () => toast("Transaction is happening!!!");
    const router = useRouter();
    return (
        <div className='bg-blue-500'>
         
            {/* <input type="text" placeholder='enter address' onChange={(e)=>setAddress(e.target.value)} />
            <input type="text" placeholder='enter msg'  onChange={(e)=>setMsg(e.target.value)} />
            <button  onClick={()=>sendMessage({address,msg})}>Send message</button> */}
            <ToastContainer />
            {friendLists.map((el, i) => (
            <ReadMessage
              key={i + 1}
              el={el}
              i={i}
              readMessage={readMessages}
              readUser={readUser}
            />
          ))}
        </div>
    )
}

export default SendMessage