import { _post } from "./methods";


const auth = {
    post: (data: any): Promise<any> => _post('/login/signIn', data, { headers: { 'Cache-Control': 'no-cache' } }),
    register: (data: any): Promise<any> => _post('/athlet', data, { headers: { 'Cache-Control': 'no-cache' } })

}

const client = {
    auth,
}

export default client;