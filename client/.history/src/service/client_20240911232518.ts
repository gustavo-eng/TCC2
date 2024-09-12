import { _post } from "./methods";


const auth = {
    post: (data: any): Promise<any> => _post('/login/signIn', data, {headers: {'Content-Type': 'application/json', Authorization: 'Bearer '},})
}

const client = {
    auth,
}

export default client;