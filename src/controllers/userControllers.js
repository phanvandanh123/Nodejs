import userServices from '../services/userServices'

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: `missing input parameter`
        })
    }
    let userData = await userServices.handleUserLogin(email, password);
    return res.status(200).json({
        errCode: userData.errCode,
        meesage: userData.Message,
        user: userData.user ? userData.user : {}
    })
}

let handleGetAllUser = async (req, res) => {
    let id = req.query.id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameters',
            users: []
        })
    }
    let users = await userServices.getAllUsers(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        users
    })
}

let handleCreateNewUser = async (req, res) => {
    let meesage = await userServices.createNewUser(req.body)
    return res.status(200).json(meesage)
}

let handleEditNewUser = async (req, res) => {
    let data = req.body;
    let message = await userServices.updateUserData(data);
    return res.status(200).json(message)
}

let handleDeleteNewUser = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            meesage: "missing parameters"
        })
    }
    let meesage = await userServices.deleteUser(req.body.id)
    return res.status(200).json(meesage)
}

module.exports = {
    handleLogin: handleLogin,
    handleGetAllUser: handleGetAllUser,
    handleCreateNewUser: handleCreateNewUser,
    handleEditNewUser: handleEditNewUser,
    handleDeleteNewUser: handleDeleteNewUser,
}