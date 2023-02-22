import React, { useEffect, useState } from 'react';
import { CheckIfWalletConnected, connectingWithContract, ConnectWallet } from '../utils/apiFeature';

export const ChatAppContect = React.createContext();

export const ChatAppProvider = ({ children }) => {

    //USESTATE
    const [account, setAccount] = useState('')
    const [username, setUsername] = useState('')
    const [friendLists, setFriendLists] = useState([])
    const [friendMsg, setFriendMsg] = useState([])
    const [loading, setLoading] = useState(false)
    const [userLists, setUserLists] = useState([])
    const [error, setError] = useState('')
    //CHat User
    const [currentUserName, setCurrentUserName] = useState('')
    const [currentUserAddress, setCurrentUserAddress] = useState('')

    const [msg, setMsg] = useState('')

    //fetch data time of page load
    const fetchdata = async () => {
        try {
            //get contract
            const contract = await connectingWithContract();
            //get account
            const connectAccount = await ConnectWallet();
            setAccount(connectAccount);
            //get username
            const username = await contract.getUsername(connectAccount)
            setUsername(username);
            //get friend lists
            const friendLists = await contract.getMyFriendList();
            setFriendLists(friendLists);
            //get all app use
            const userList = await contract.getAllAppUser();
            setUserLists(userList);
const readmessage=await contract.readMessage()

        } catch (error) {
            setError("please install and connect your wallet")
        }
    }

    useEffect(() => {
        fetchdata()
    }, [])

    //read Messages
    const readMessages = async (friendAddress) => {
        try {
            const contract = await connectingWithContract()
            const read = await contract.readMessage(friendAddress)
            setFriendMsg(read)
        } catch (error) {
            setError("Not able to read messages")
        }
    }

    //create account
    const createAccount = async ({ name }) => {
        try {
            const contract = await connectingWithContract();
            const getCreatedUser = await contract.createAccount(name);
            setLoading(true);
            console.log(getCreatedUser);
            await getCreatedUser.wait();
            setLoading(false);
            window.location.reload();
        } catch (error) {
            setError("error while creating account", error);
            console.log(error);
            alert("You should write a something")
        }
    }

    //add your friend
    const addFriend = async ({ name, accountAddress }) => {
        try {
            const contract = await connectingWithContract();
            const addFriend = await contract.addFriend(accountAddress, name);
            console.log(addFriend);
            setLoading(true);
            await addFriend.wait();
            setLoading(false);
            window.location.reload();

        } catch (error) {
            setError(alert(error));
        }
    }

    //send message to friend
    const sendMessage = async ({ address, msg }) => {
        try {
           

            const contract = await connectingWithContract()
            const sendMessage = await contract.sendMessage(address, msg);
            setLoading(true);
            await sendMessage.wait();
            setLoading(false);
            window.location.reload();
        } catch (error) {
            setError("error while sending message")
        }
    }

    //Read info
    const readUser = async (userAddress) => {
        const contract = await connectingWithContract();
        const userName = await contract.getUsername(userAddress);
        setCurrentUserName(userName);
        setCurrentUserAddress(userAddress);
    }


    return (
        <ChatAppContect.Provider value={{
            readMessages,
            createAccount,
            addFriend,
            sendMessage,
            CheckIfWalletConnected,
            connectingWithContract,
            ConnectWallet,
            readUser,
            account,
            username,
            friendLists,
            friendMsg,
            loading,
            userLists,
            error
        }}>
            {children}
        </ChatAppContect.Provider>
    )
}