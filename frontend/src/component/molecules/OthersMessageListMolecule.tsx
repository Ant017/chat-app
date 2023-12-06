import React from "react";

type Props = {
  messageID: string;
  content: string;
  profilePic: string;
};

const OthersMessageListMolecule = (props: Props) => {
  return (
    <div className="flex justify-start items-center mb-5 mr-10" key={props.messageID}>
      <div className="flex justify-end items-end gap-3">
        <div className="min-w-[28px]">
          <img className="w-7 h-7 object-cover object-center rounded-full" src={`${props.profilePic}`}></img>
        </div>

        <p className="bg-gray-100 text-black px-4 rounded-2xl text-sm py-2">
          {props.content}
        </p>
      </div>
    </div>
  );
};

export default OthersMessageListMolecule;
