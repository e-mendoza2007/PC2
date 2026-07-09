import axios from "axios";




const api = axios.create({baseURL: import.meta.env.VITE_API_URL})

api.interceptors.request.use(config => {

    const token = localStorage.getItem('token');
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})
/* NO me corria
 api.interceptors.response.use(
  (response: any) => response,
  (error: AxiosError<ApiError>) => {
    // Si el servidor responde con 401 (No autorizado)
    if (error.response?.status === 401) {
      // Limpiar datos de sesión
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      // Redirigir al login
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
 */

export default api;