import { IoInformationCircleOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import MessageListOrganism from "../organisms/MessageListOrganism";
import { GrSend } from "react-icons/gr";
const MessagePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-between pt-2 pb-1 h-screen">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="flex justify-between items-center w-full px-3 py-2"
        >
          <div className="flex justify-start items-center gap-4">
            <div
              onClick={() => {
                navigate("/chat");
              }}
            >
              <IoArrowBackOutline size={20} />
            </div>
            <div className="flex justify-start items-center gap-4">
              <img
                className="w-10 h-10 object-cover object-center rounded-full"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3V5c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              ></img>
              <div>
                <p>Username</p>
                <p className="text-sm text-gray-500">Active Now</p>
              </div>
            </div>
          </div>
          <IoInformationCircleOutline size={25} />
        </div>
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
