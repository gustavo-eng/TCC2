import { _post } from "./methods";


const auth = {
    //todo colocar tipagem correta
    post: (data: any): Promise<any> => _post('/login/signIn', data)
}

const client = {
    auth,
}

export default client;