import axios from "axios";

const endpoint = "http://localhost:8000";

let update_data;

export const update = async (formdata) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        if (process.env.NODE_ENV === "production") {
            update_data = await axios.put(`/user`, formdata, config);
        } else {
            update_data = await axios.put(`${endpoint}/user`, formdata, config);
        }
    } catch (error) {
        const err = error.response;
        if (err.status === 400) {
            console.log("Error Message", err.data.msg);
        }
        console.log("Error", err);
    }
};
