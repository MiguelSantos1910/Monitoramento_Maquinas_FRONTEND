import axios from "axios";
const api = axios.create({
    baseURL: 'monitoramento_maquinas_backend.railway.internal'
});
export default api;