import React from "react";
import { RxDotsHorizontal } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

type Props = {
  chatID: number;
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
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          ></img>
        </div>
        <div>
          <p>Username</p>
          <p className="text-sm text-gray-500">Last Message</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-sm text-gray-500">04:65 PM</p>
        <RxDotsHorizontal />
      </div>
    </div>
  );
};

export default ChatListMolecule;
