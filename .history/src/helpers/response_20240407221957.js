// funcao desenvolvida para padronizar respostas
module.exports = {
    success: (obj, name, msg) => {
        let resp = { status: true, msg: msg }
        if (name) {
            resp[name] = obj
        } else {
            resp.obj = obj
        }
        return resp
    },
    fail: (msg) => {
        return { status: false, msg: msg }
    }
}