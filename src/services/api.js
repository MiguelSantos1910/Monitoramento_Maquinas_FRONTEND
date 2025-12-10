import axios from "axios";
const api = axios.create({
    baseURL: 'https://monitoramentomaquinasbackend-production.up.railway.app'
});
export default api;