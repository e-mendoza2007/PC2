import api from '../api'
import type { Register, Login } from '../Types/types'


export const authService =  {


    register: async (data:Register) => {
        const response = await api.post('/auth/register', data)
        return response;
    },

    login: async (data:Login) => {
        const response = await api.post('/auth/register', data)
        return response.data;
    }


}