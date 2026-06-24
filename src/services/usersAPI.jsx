import axios from "axios";

const API_URL = "https://jslkkkukprxkunzkhrgq.supabase.co/rest/v1/users ";
const API_KEY = "sb_publishable_eOhz3JECjgAckBEriBV5xQ_THLysqVb";

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
};

export const usersAPI = {
    // Ambil semua user (kalau dibutuhkan nanti)
    async fetchUsers() {
        const response = await axios.get(API_URL, { headers });
        return response.data;
    },

    // Daftar user baru
    async registerUser(data) {
        const response = await axios.post(API_URL, data, { headers });
        return response.data;
    },

    // Cek login: cari user dengan username & password yang cocok
    async loginUser(username, password) {
        const response = await axios.get(
            `${API_URL}?username=eq.${username}&password=eq.${password}`,
            { headers }
        );
        return response.data;
    },
};