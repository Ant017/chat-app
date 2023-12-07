import MessageListOrganism from "../organisms/MessageListOrganism";
import { GrSend } from "react-icons/gr";
import { useEffect, useState } from "react";
import { SendMessageApi } from "../../apiCalls/MessageApi";
import { useParams } from "react-router-dom";
import { pageReload } from "../../redux/slices/ReloadSlice";
import { useDispatch } from "react-redux";
import socket from "../../utils/socket";

const MessagePage = () => {
  const [newMessage, setnewMessage] = useState("");
  const { chatID } = useParams<string>();
  const [typing, setTyping] = useState(false);
  const dispatch = useDispatch();

  const sendMessage = () => {
    let response;
    const sendMessage = async () => {
      response = await SendMessageApi(chatID || "", newMessage);
      socket.emit("new message", response);
      socket.emit("stop typing", chatID);
    };
    sendMessage();
    setnewMessage("");
    dispatch(pageReload());
  };

  useEffect(() => {
    socket.emit("join chat", chatID);
  }, []);

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
              value={newMessage}
              onChange={(e) => {
                setnewMessage(e.target.value);
                if (!typing) {
                  socket.emit("typing", chatID);
                  setTyping(true);
                  const timer = setTimeout(() => {
                    socket.emit("stop typing", chatID);
                    setTyping(false);
                  }, 3000);
                  return () => clearTimeout(timer);
                }
              }}
            ></input>
            <GrSend
              onClick={() => {
                sendMessage();
              }}
              className="text-green-600"
              size={25}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagePage;
