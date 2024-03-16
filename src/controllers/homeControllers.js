import db from '../models/index';
import CRUDServices from '../services/CRUDServices';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll()

        return res.render('homePage.ejs', {
            data: JSON.stringify(data)
        })
    } catch (e) {
        console.log(e)
    }
}

let getAbout = (req, res) => {
    return res.render('test/about.ejs')
}

let getCrud = (req, res) => {
    return res.render('test/crud.ejs')
}

let postCrud = async (req, res) => {
    let message = await CRUDServices.createNewUser(req.body);
    console.log(message);
    return res.send('Danh')
}

let displayGetCrud = async (req, res) => {
    let data = await CRUDServices.getAllUser();
    // console.log(data);
    // return res.send('display get crud');
    return res.render('displayCrud.ejs', {
        dataTable: data,
    })
}

let getEditCrud = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDServices.getUserInfoById(userId);
        //check user data not found
        return res.render('editCrud.ejs', {
            user: userData
        })
        return res.send('Found a user!')
    } else {
        return res.send('User not found')
    }
    return res.send('edit form')
}

let putCrud = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDServices.updateUserData(data);
    return res.render('displayCrud.ejs', {
        dataTable: allUsers,
    })
}

let deleteCrud = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDServices.deleteUserById(id);
        return res.send('delete user')
    } else {
        return res.send('user not found')
    }
}

module.exports = {
    getHomePage: getHomePage,
    getAbout: getAbout,
    getCrud: getCrud,
    postCrud: postCrud,
    displayGetCrud: displayGetCrud,
    getEditCrud: getEditCrud,
    putCrud: putCrud,
    deleteCrud: deleteCrud,
}