import { ethers } from "ethers";
import { ChatAppAbi, ChatAppAddress } from "../context/constants"

export const connectingWithContract = async () => {
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const addressAbiSigner = new ethers.Contract(
            ChatAppAddress,
            ChatAppAbi,
            signer
        )
        return addressAbiSigner
    } catch (error) {
        console.log("can't connect to the blockchain", error);
    }
}

export const ConnectWallet = async () => {
    try {
        if (!window.ethereum) return alert("install the metamask")
        const accounts = await ethereum.request({ method: "eth_requestAccounts", })
        console.log(accounts[0]);
        return accounts[0];
    } catch (error) {
        console.log("can't connect to the Metamask");
    }
}

export const converTime = (time) => {
    const newTime = new Date(time.toNumber());

    const realTime =
        newTime.getHours() +
        "/" +
        newTime.getMinutes() +
        "/" +
        newTime.getSeconds() +
        "  Date:" +
        newTime.getDate() +
        "/" +
        (newTime.getMonth() + 1) +
        "/" +
        newTime.getFullYear();

    return realTime;
};