import api from '../api'
import type { CursoNuevo, Curso}  from '../Types/types';

export const dashboardService =  {


    getCursos: async () :Promise<Curso[]> => {
        const response = await api.get('/courses')
        return response.data;
    },

    nuevo : async (data:CursoNuevo)  => {
        const response = await api.post('/courses',data)
        return response.data;
    },

    eliminar : async (id:number) => {
        const response = await api.delete(`/courses/${id}`)
        return response.data;
    }
   

}