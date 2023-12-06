import React from "react";
import { RxDotsHorizontal } from "react-icons/rx";

type Props = {};

const ChatListMolecule = (props: Props) => {
  return (
    <div className="flex justify-between items-center p-3">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10">
          <img
            className="w-full h-full object-cover object-center rounded-full"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          ></img>
        </div>
        <div>
          <p>Username</p>
          <p>Last Message</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p>04:65 PM</p>
        <RxDotsHorizontal />
      </div>
    </div>
  );
};

export default ChatListMolecule;
