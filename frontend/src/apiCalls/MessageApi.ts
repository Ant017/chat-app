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

export const SendMessageApi = async (chatID: string, content: string): Promise<any> => {
    return axiosInstanceToken.post(`/message/send-message`, {content: content, chat: chatID})
    .then((response)=>{
        return response.data.data
    })
    .catch((error)=>{
        console.log("error", error)
    })
}