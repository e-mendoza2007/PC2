import api from '../api'
import type { Curso } from '../Types/types';

export const dashboardService =  {


    getCursos: async () :Promise<Curso[]> => {
        const response = await api.get('/courses')
        return response.data;
    },

   

}