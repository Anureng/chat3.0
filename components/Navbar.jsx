import React, { useContext } from 'react'
import { ChatAppContect } from 'context/ChatAppContext'
function Navbar() {
    const { ConnectWallet, account, username, createAccount, error } = useContext(ChatAppContect)
    return (
        <div className='flex justify-between bg-blue-500 p-4 items-center text-xl'>
            <div>
                WEBCHAT
            </div>

            <div>
                {
                    account ? (
                        <div className='border border-black px-2 py-1 rounded-xl text-xl'>🥳{account.slice(0, 3)}...{account.slice(38)}</div>
                    )
                        : (
                            <div>
                                <button>
                                    <a href='https://metamask.io/' target={"_blank"} >
                                        Install Metamask</a>
                                </button>
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default Navbar