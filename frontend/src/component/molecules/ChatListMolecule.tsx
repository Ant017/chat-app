import React from "react";
import { RxDotsHorizontal } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

type Props = {
  chatID: string;
  username: string;
  lastMessage: string;
  imageUrl: string;
  timestamp: string;
};

const ChatListMolecule = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/message/${props.chatID}`);
      }}
      className="flex justify-between items-center px-5 py-2"
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10">
          <img
            className="w-full h-full object-cover object-center rounded-full"
            src={props.imageUrl}
            alt="User Avatar"
          />
        </div>
        <div>
          <p>{props.username}</p>
          <p className="text-sm text-gray-500">{props.lastMessage}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-sm text-gray-500">{props.timestamp}</p>
        <RxDotsHorizontal />
      </div>
    </div>
  );
};

export default ChatListMolecule;
