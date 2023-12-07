import ChatListMolecule from "../molecules/ChatListMolecule";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoIosAdd } from "react-icons/io";
import ChatListOrganism from "../organisms/ChatListOrganism";
import { useEffect, useState } from "react";
import socket from "../../utils/socket";
const ChatPage = () => {
  const [socketConnected, setSocketConnected] = useState(false);
  useEffect(() => {
    const userID = localStorage.getItem('userID');
    socket.emit('setup', userID);
    socket.on("connection", () => {
      setSocketConnected(true);
    })
  }, []);

  return (
    <>
      <div className="py-2">
        <div onClick={
          (e)=>{
            e.stopPropagation();
          }
        } className="flex justify-between items-center w-full px-3 py-2">
          <HiOutlineMenuAlt2 size={20} />
          <p className="text-2xl font-semibold">Chats</p>
          <IoIosAdd size={27} />
        </div>
        <ChatListOrganism/>
      </div>
    </>
  );
};

export default ChatPage;
