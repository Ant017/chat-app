import MessageListOrganism from "../organisms/MessageListOrganism";
import { GrSend } from "react-icons/gr";

const MessagePage = () => {

  return (
    <>
      <div className="flex flex-col justify-between pt-2 pb-1 h-screen">
        
        <div className="flex-1">
          <MessageListOrganism />
        </div>
        <div>
          <div className="flex items-center gap-2 p-2">
            <input
              className="w-full h-10 px-3 rounded-2xl outline-none bg-gray-100"
              placeholder="Type a message"
            ></input>
            <GrSend className="text-green-600" size={25}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagePage;
