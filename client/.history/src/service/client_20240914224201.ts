import { _get, _post } from "./methods";


const auth = {
    post: (data: any): Promise<any> => _post('/login/signIn', data, { headers: { 'Cache-Control': 'no-cache' } }),
    register: (data: any): Promise<any> => {
        return _post('/athlet', data, { headers: {'Content-Type': 'application/json' } })
    }
}

const competition = {
    get: (): Promise<any> =>   _get('/events'),
}

const payments = {
    getByAthlet: (idAthlet: string): Promise<any> => _get(`/registration/myPayments/${!idAthlet}`),
}

const client = {
    auth,
    competition,
    payments,
}

export default client;