import { _post } from "./methods";


const auth = {
    post: (data: any): Promise<any> => _post('/login/signIn', data, { headers: { 'Cache-Control': 'no-cache' } }),
    register: (data: any): Promise<any> => {
        console.log('data in register ', data )
        return _post('/athlet', data, { headers: { 'Cache-Control': 'no-cache', 'Content-Type': 'application/json' } })
    }

}

const client = {
    auth,
}

export default client;