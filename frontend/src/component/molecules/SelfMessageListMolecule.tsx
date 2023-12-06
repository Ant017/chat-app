import React from "react";

type Props = {
  messageID: string;
  content: string;
};

const SelfMessageListMolecule = (props: Props) => {
  return (
    <div className="flex justify-end items-center mb-5 ml-10" key={props.messageID}>
        <p className="bg-blue-500 text-white px-4 rounded-t-2xl rounded-bl-2xl text-sm py-2">{props.content}</p>
    </div>
  );
};

export default SelfMessageListMolecule;
