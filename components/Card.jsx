import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Chat from "./Chat";

//INTERNAL IMPORT

const Card = ({ readMessage, el, i, readUser }) => {
  console.log(el);
  return (
    <Link
      href={{
        pathname: "/",
        query: { name: `${el.name}`, address: `${el.pubkey}` },
      }}
    >
      <div className="border border-black p-8 rounded-xl"
        onClick={() => (readMessage(el.pubkey), readUser(el.pubkey))}
      >
        <div >
          <div>
          </div>
          <div >
            <div >
              <h4>{el.name}</h4>
              <small>{el.pubkey.slice(21)}..</small>
            </div>
            <div >
              <small>{i + 1}</small>
            </div>
          </div>
        </div>
      </div>

    </Link>
  );
};

export default Card;