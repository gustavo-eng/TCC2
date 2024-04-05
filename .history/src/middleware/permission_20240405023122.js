

const permission = (req, res, next) => {
    // Todo - Adicionar banco de dados aqui
    // Neste caso  é passado o usuario obtido da requisicao
    // como parametro para a busca no banco de dados

    //const jwtUser = req.user
    //const user = await User.findUserByUsername(jwtUser.username)
    console.log('Entrou no middleware permission 99 ')
    if (req.userPermission == 'sensei') {
        return next();
    } else {
        return res.status(403).json({ error: 'Usuario não autorizado' });
    }
}

module.exports = permission;