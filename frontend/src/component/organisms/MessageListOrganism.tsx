import React, { useEffect, useState } from "react";
import SelfMessageListMolecule from "../molecules/SelfMessageListMolecule";
import OthersMessageListMolecule from "../molecules/OthersMessageListMolecule";
import { GetAllMessageApi } from "../../apiCalls/MessageApi";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { GetAllChatApi } from "../../apiCalls/ChatApi";
import socket from "../../utils/socket";
import { useRef } from "react";
import Typing from "../atoms/Typing";
type Sender = {
  _id: string;
  username: string;
  email: string;
  profilePic: string;
};

type Message = {
  _id: string;
  sender: Sender;
  content: string;
  chat: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
type LastMessage = {
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
  lastMessage: LastMessage;
  participants: Participant[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const MessageListOrganism = () => {
  const { chatID } = useParams();
  const email = useSelector((state: any) => state.user.email);
  const [message, setMessage] = useState<Message[]>([]);
  const [chats, setChats] = useState<Chat[]>([]);
  const pageReload = useSelector((state: any) => state.reload);
  const scrollableDivRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);
  const [room, setRoom] = useState("");

  const navigate = useNavigate();

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
    let response;
    const getAllMessage = async () => {
      response = await GetAllMessageApi(chatID || "");
      setMessage(response);
    };
    getAllMessage();
  }, [pageReload]);

  useEffect(() => {
    const getAllChats = async () => {
      const result: Chat[] = await GetAllChatApi();
       const newResult = result.filter((chat) => chat._id.toString() === chatID);
      setChats(newResult);
    };
    getAllChats();
  }, []);

  useEffect(() => {
    if (scrollableDivRef.current) {
      (scrollableDivRef.current as HTMLDivElement).scrollTop = (
        scrollableDivRef.current as HTMLDivElement
      ).scrollHeight;
    }
  }, [message,isTyping]);
  
  useEffect(() => {
    socket.on("typing",(room)=>{
      setRoom(room);
      setIsTyping(true);
    })

    socket.on("stop typing",(room)=>{
      setRoom(room);
      setIsTyping(false);
    })

  }, []);

  useEffect(() => {
    socket.on("message received", (newMessageReceived:any) => {
      if(newMessageReceived.chat._id !== chatID) return;
      setMessage([...message, newMessageReceived]);
    });
  });



  return (
    <div>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="flex justify-between items-center w-full px-3 py-2"
      >
        <div className="flex justify-start items-center gap-4">
          <div
            onClick={() => {
              navigate("/chat");
            }}
          >
            <IoArrowBackOutline size={20} />
          </div>
          <div className="flex justify-start items-center gap-4">
            <img
              className="w-10 h-10 object-cover object-center rounded-full"
               src={chats.length>0 ? getUserProfilePic(chats[0].participants, chats[0].isGroupChat):""}
              alt="User Avatar"
            ></img>
            <div>
              <p>{chats.length>0 && getUsername(chats[0].participants, chats[0].isGroupChat , chats[0].chatName)}</p>
              <p className="text-sm text-gray-500">Active Now</p>
            </div>
          </div>
        </div>
        <IoInformationCircleOutline size={25} />
      </div>
      <div ref={scrollableDivRef} className="h-[84vh] overflow-y-scroll px-3 mt-2">
        {message &&
          message.map((message) => {
            return (
              <div key={message._id}>
                {message.sender.email === email ? (
                  <SelfMessageListMolecule
                    messageID={message._id}
                    content={message.content}
                  />
                ) : (
                  <OthersMessageListMolecule
                    messageID={message._id}
                    content={message.content}
                    profilePic={message.sender.profilePic}
                  />
                )}
              </div>
            );
          })}
          {isTyping && room === chatID ? <div><Typing/></div>:null}
      </div>
    </div>
  );
};

export default MessageListOrganism;
