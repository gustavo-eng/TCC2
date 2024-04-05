

const permission = (req, res, next) => {
    // Todo - Adicionar banco de dados aqui

    onst jwtUser = req.user
    //const user = await User.findUserByUsername(jwtUser.username)
    if (req.userPermission == 'sensei') {
        return next();
    } else {
        return res.status(403).json({});
    }
}