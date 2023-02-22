import UserAdd from "components/UserAdd";
import Navbar from "components/Navbar";
import SendMessage from "components/SendMessage";
import AllUser from "components/AllUser";
import AddFriend from "components/AddFriend";
import { useContext } from "react";
import { ChatAppContect } from "context/ChatAppContext";
import Friend from "components/AllFriend";
import Fotter from "components/Fotter";
import Link from "next/link";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = () => {
  const { userLists, addFriend, sendMessage, friendMsg } =
    useContext(ChatAppContect);
  return (
    <>
      <Navbar />
      <UserAdd />
      <AddFriend addFriend={addFriend} />
      <AllUser />
      {/* {userLists.map((el, i) => (
        <AddFriend key={i + 1} el={el} i={i} addFriend={addFriend} />
      ))} */}
      <SendMessage />

      <Fotter />
    </>
  );
};
export default Home;
