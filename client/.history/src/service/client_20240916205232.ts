import { _delete, _get, _post } from "./methods";


const auth = {
    post: (data: any): Promise<any> => {
        console.log('data no auth do cliente ', data)
        return _post('/login/signIn', data)
    },
    register: (data: any): Promise<any> => {
        return _post('/athlet', data)
    },
    //update: (data:updateUser): Promise<> =>
}

const competition = {
    get: (): Promise<any> => _get('/events'),
}

const payments = {
    getByAthlet: (idAthlet: string): Promise<any> => _get(`/registration/myPayments/${idAthlet}`),
    delete: (idPayment?: string | number): Promise<any> => _delete(`/registration/${String(idPayment)}`),
    post: (data: any) => _post('/registration', data, {headers: {"Content-Type": "multipart/form-data"}})
}


const client = {
    auth,
    competition,
    payments,
}

export default client;