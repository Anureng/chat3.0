import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { converTime } from "utils/apiFeature";
import Loader from "./Loader";

//INTERNAL IMPORT



const Chat = ({
  functionName,
  readMessage,
  friendMsg,
  account,
  userName,
  loading,
  currentUserName,
  currentUserAddress,
  readUser,
  pubkey
}) => {
  //USTE STATE
  const [message, setMessage] = useState("");
  const [chatData, setChatData] = useState({
    name: "",
    address: "",
  });

  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    setChatData(router.query);
  }, [router.isReady]);

  useEffect(() => {
    if (chatData.address) {
      readMessage(chatData.address);
      readUser(chatData.address);
    }
  },[]);

  console.log(chatData.address, chatData.name);
  console.log(pubkey);
  return (
    <div>

      <div className="space-y-8">
        <div >
          <div className="border border-black p-4 rounded-xl">
            {friendMsg.map((el, i) => (
              <div key={el.id}>
                {el.sender !=chatData.address ? (
                  <div >
                    <span>
                      <p className="text-xl font-bold">
                      {chatData.name} {""}
                      </p>
                      <small>Time: {converTime(el.timestamp)}</small>
                    </span>
                  </div>
                ) : (
                  <div>
                    <span>
                      {userName} {""}
                      <small>Time: {converTime(el.timestamp)}</small>
                    </span>
                  </div>
                )}
                <p key={i + 1}>
                  {el.msg}
                  {""}
                  {""}
                </p>
              </div>
            ))}
          </div>
        </div>


          <div >
            <div >
              <input
                type="text"
                placeholder="Type your message"
                onChange={(e) => setMessage(e.target.value)}
                className='px-2 py-1 focus:outline-none bg-transparent '

              />

             <button 
             className="border border-black  bg-blue-700 text-white px-2 py-1 rounded-xl"

             onClick={() =>
                    functionName({address: chatData.address, msg: message })
                  }>
click for send
             </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Chat;