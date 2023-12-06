import ChatListMolecule from "../molecules/ChatListMolecule";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoIosAdd } from "react-icons/io";
import ChatListOrganism from "../organisms/ChatListOrganism";
const ChatPage = () => {
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
