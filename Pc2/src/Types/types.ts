export interface Register {

    email: string
    username: string
    password : string
    fullName : string
}

export interface Login {

    username: string
    email: string
    password : string
    
}


export interface Curso {

   id: number
    name: string
    code: string
    credits: number
    grade: number
    status: string
}