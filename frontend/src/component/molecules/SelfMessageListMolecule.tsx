import React from "react";

type Props = {
  messageID: number;
};

const SelfMessageListMolecule = (props: Props) => {
  return (
    <div className="flex justify-end items-center mb-5 ml-10" key={props.messageID}>
        <p className="bg-blue-500 text-white px-4 rounded-t-2xl rounded-bl-2xl text-sm py-2">SelfMe sage List olecu le fghbf bfgf  fghf f gnhfg dsfgdfg dfgdfg dfg dfg dfg dfg</p>
    </div>
  );
};

export default SelfMessageListMolecule;
