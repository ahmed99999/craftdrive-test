import http from './httpService';
import { toast } from 'react-toastify';
import employees from './MOCK_DATA.json';


export async function getEmployess() {
    const url = `/getEmployessEndPoint`;
    try {
        // const response = await http.get(url); 
        return employees;
    }
    catch (error) {
        toast.error("NO Data Found");
        console.error(error);
        return [];
    }
}