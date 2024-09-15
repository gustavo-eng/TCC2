import { _get, _post } from "./methods";


const auth = {
    post: (data: any): Promise<any> => _post('/login/signIn', data, { headers: { 'Cache-Control': 'no-cache' } }),
    register: (data: any): Promise<any> => {
        console.log('data in register ', data )
        return _post('/athlet', data, { headers: {'Content-Type': 'application/json' } })
    }
}

const competition = {
    get: async  (): Promise<any> => _get('/events')
}

const client = {
    auth,
}

export default client;