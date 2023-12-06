import React from "react";

type Props = {
  messageID: number;
};

const OthersMessageListMolecule = (props: Props) => {
  return (
    <div className="flex justify-start items-center mb-5 mr-10" key={props.messageID}>
      <div className="flex justify-end items-end gap-2">
        <div className="w-28">
          <img className="w-7 h-7 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"></img>
        </div>

        <p className="bg-gray-100 text-black px-4 rounded-2xl text-sm py-2">
          Self MessageL istMol ecule dfvdfdv dfv dfgd fgdfg dfgdf gdfg dfgdf gdfg dfgdfg dfgdf gwfg fg dfg dfgd fgdf dghfgh fghfgh fghdfg dfg dfhfghfg hfg j
        </p>
      </div>
    </div>
  );
};

export default OthersMessageListMolecule;
