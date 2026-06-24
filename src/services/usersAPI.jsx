import axios from "axios";

const API_URL = "https://jslkkkukprxkunzkhrgq.supabase.co/rest/v1/users";
const API_KEY = "sb_publishable_eOhz3JECjgAckBEriBV5xQ_THLysqVb";

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
};

export const usersAPI = {
    async fetchUsers() {
        const response = await axios.get(API_URL, { headers });
        return response.data;
    },

    async registerUser(data) {
        const response = await axios.post(API_URL, data, { headers });
        return response.data;
    },

    async loginUser(username, password) {
        const response = await axios.get(
            `${API_URL}?username=eq.${username}&password=eq.${password}`,
            { headers }
        );
        return response.data;
    },

    async updateUser(id, data) {
        const response = await axios.patch(
            `${API_URL}?id=eq.${id}`,
            data,
            { headers }
        );
        return response.data;
    },

    async deleteUser(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
    },
};