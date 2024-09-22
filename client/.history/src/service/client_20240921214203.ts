import { updateUser } from "../pages/myProfile/MyProfileTypes";
import { _delete, _get, _post, _put } from "./methods";
import { responseUpdateUser } from "./types";

const auth = {
    post: (data: any): Promise<any> => {
        return _post('/login/signIn', data)
    },
    register: (data: any): Promise<any> => {
        return _post('/athlet', data)
    },
    update: (data:updateUser, userId?:string): Promise<responseUpdateUser> => _put(`/athlet/${userId}`, data)

}

const competition = {
    get: (): Promise<any> => _get('/events'),
}

const payments = {
    getByAthlet: (idAthlet: string): Promise<any> => _get(`/registration/myPayments/${idAthlet}`),
    delete: (idPayment?: string | number): Promise<any> => _delete(`/registration/${String(idPayment)}`),
    post: (data: any) => _post('/registration', data, {headers: {"Content-Type": "multipart/form-data"}}),
    getByGym: (idGym: string) : Promise<any> => _get(`/registration/gym/${idGym}`),
}

const gym = {
    list: (): Promise<any> => _get('/gym'),
    solicitation: (id: string): Promise<any> => _get(`/request/gym?idGym=${id}`),
    acceptSolicitation: (id: string | number) => _put(`/request/${String(id)}`, {}),
    listAthlets: (idGym: string | number): Promise<any> => _get(`/gym/athlets?idGym=${String(idGym)}`),
    update : (idGym: string | number, data: any): Promise<any> => _put(`/gym/${String(idGym)}`, data),
}

const category = {
    get: (): Promise<any> => _get('/category')
}



const athlet = {
    delete: (idAthlet: string | number): Promise<any> => _delete(`/athlet/${idAthlet}`)
}

const client = {
    auth,
    competition,
    payments,
    gym,
    athlet
}

export default client;