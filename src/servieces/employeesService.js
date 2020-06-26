import http from './httpService';
import { toast } from 'react-toastify';
import { func } from 'prop-types';

function ReadCSVDATA() {
    const reader = new FileReader();
    reader.readAsText('data.csv');
    console.log(reader.result)
}

export async function getEmployess() {

    ReadCSVDATA();
    return;
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