import axios from 'axios';
import { toast } from 'react-toastify';
import { axiosInstanceToken } from '../utils/axiosInstance';

type Message = {
    _id: string;
    content: string;
    createdAt: string;
  };
  
  type Participant = {
    _id: string;
    email: string;
    username: string;
    profilePic: string;
  };
  
  type Chat = {
    _id: string;
    isGroupChat: boolean;
    chatName?: string | "";
    lastMessage: Message;
    participants: Participant[];
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  

export const GetAllChatApi = async (): Promise<Chat[]> => {
    return axiosInstanceToken.get('/chat/get-all-chats')
    .then((response)=>{
        return response.data.data
    })
    .catch((error)=>{
        console.log("error", error)
    })
}