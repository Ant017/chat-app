import axios from 'axios';
import { toast } from 'react-toastify';
import { axiosInstanceToken } from '../utils/axiosInstance';

export const GetAllMessageApi = async (chatID: string): Promise<any> => {
    return axiosInstanceToken.get(`/message/get-messages/${chatID}`)
    .then((response)=>{
        return response.data.data
    })
    .catch((error)=>{
        console.log("error", error)
    })
}