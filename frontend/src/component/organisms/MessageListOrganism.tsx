import React from "react";
import SelfMessageListMolecule from "../molecules/SelfMessageListMolecule";
import OthersMessageListMolecule from "../molecules/OthersMessageListMolecule";

type Props = {};

const MessageListOrganism = (props: Props) => {
  return (
    <div className="h-[84vh] overflow-y-scroll px-3 mt-2">
      {[...Array(50)].map((e,i) => {
        return (
          <div key={i}>
            <SelfMessageListMolecule messageID = {i} />
            <OthersMessageListMolecule messageID = {i} />
          </div>
        );
      })}
    </div>
  );
};

export default MessageListOrganism;
