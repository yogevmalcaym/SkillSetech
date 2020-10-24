import axios from 'axios';

export const getComments = async (queryIndex, fixedSkip) => {
    try {
        const response = await axios.get("http://localhost:3030/getComments",
            {params: {queryIndex, fixedSkip}}) || {data: {}};
        if (response.data.error) throw(response.data.error);
        return response.data;
    } catch (error) {
        alert(error.message);
    }
}

export const addNewComment = async (data) => {
    try {
        const response = await axios.post("http://localhost:3030/addComment",
            data) || {data: {}};
        if (response.data.error) throw(response.data.error);
        return response.data;
    } catch (error) {
        alert(error.message);
    }
}


