import React from "react";
import ChatListMolecule from "../molecules/ChatListMolecule";

type Props = {};

const ChatListOrganism = (props: Props) => {
  return (
    <div className="h-[91vh] overflow-y-scroll">
      {[...Array(50)].map((e,i) => {
        return (
          <div key={i}>
            <ChatListMolecule chatID = {i} />
          </div>
        );
      })}
    </div>
  );
};

export default ChatListOrganism;
