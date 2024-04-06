// funcao desenvolvida para padronizar respostas
module.exports = {
    success: (obj, name) => {
        let resp = { status: true }
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