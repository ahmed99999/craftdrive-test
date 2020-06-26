import http from './httpService';
import { toast } from 'react-toastify';

export async function getEmployess() {
    const url = `/getEmployessEndPoint`;
    try {
        const response = await http.get(url);
        return response["data"];
    }
    catch (error) {
        toast.error("NO Data Found");
        console.error(error);
        return {
            "items": []
        };
    }
}