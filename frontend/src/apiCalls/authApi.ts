import axios from 'axios';
import { toast } from 'react-toastify';
import {
    LOGIN_URL,
} from "../utils/constants";

type FormDataLogin = {
    email: string;
    password: string;
}

export const LoginApi = async (formData: FormDataLogin) => {
    try {
        const response = await axios.post(LOGIN_URL, formData);
        const data = response.data;

        if (data.success === false) {
            toast.error(data.message);
        } else if (data.success === true) {
            toast.success(data.message);
            return data.data;
        }
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                const errorMessage = error.response.data?.message || 'An error occurred during login';
                toast.error(errorMessage);
            } else if (error.request) {
                toast.error('No response received from the server during login');
            } else {
                toast.error('Error setting up the login request');
            }
        } else {
            toast.error(error.message || 'An unknown error occurred during login');
        }
    }
};