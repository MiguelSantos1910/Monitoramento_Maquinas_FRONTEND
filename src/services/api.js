import axios from "axios";
const api = axios.create({
    baseURL: 'monitoramentomaquinasbackend-production.up.railway.app'
});
export default api;