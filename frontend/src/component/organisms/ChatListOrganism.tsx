import { useEffect, useState } from "react";
import ChatListMolecule from "../molecules/ChatListMolecule";
import { GetAllChatApi } from "../../apiCalls/ChatApi";
import { useSelector } from "react-redux";
import helper from "../../utils/helper";

type Message = {
  _id: string;
  content: string;
  createdAt: string;
};

type Participant = {
  _id: string;
  email: string;
  username: string;
  profilePic: string;
};

type Chat = {
  _id: string;
  chatName?: string | "";
  isGroupChat: boolean;
  lastMessage: Message;
  participants: Participant[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const ChatListOrganism = () => {
  const email = useSelector((state: any) => state.user.email);
  const [chats, setChats] = useState<Chat[]>([]);

  const { getTimeAgo, truncateText } = helper();

  const getUsername = (
    participants: Participant[],
    isGroupChat: boolean,
    chatName?: string
  ) => {
    if (!isGroupChat) {
      if (participants[0].email === email) {
        return participants[1].username;
      } else {
        return participants[0].username;
      }
    } else {
      return chatName;
    }
  };

  const getUserProfilePic = (
    participants: Participant[],
    isGroupChat: boolean
  ) => {
    if (!isGroupChat) {
      if (participants[0].email === email) {
        return participants[1].profilePic;
      } else {
        return participants[0].profilePic;
      }
    } else {
      return participants[0].profilePic;
    }
  };

  useEffect(() => {
    const getAllChats = async () => {
      const result: Chat[] = await GetAllChatApi();
      setChats(result);
    };

    getAllChats();
  }, []);

  console.log("chats", chats);

  return (
    <div className="h-[91vh] overflow-y-scroll">
      {chats.map((chat) => (
        <ChatListMolecule
          key={chat._id}
          chatID={chat._id}
          username={
            getUsername(chat.participants, chat.isGroupChat, chat.chatName) ||
            ""
          }
          lastMessage={truncateText(chat.lastMessage.content, 25)}
          imageUrl={getUserProfilePic(chat.participants, chat.isGroupChat)}
          timestamp={getTimeAgo(chat.lastMessage.createdAt)}
        />
      ))}
    </div>
  );
};

export default ChatListOrganism;
