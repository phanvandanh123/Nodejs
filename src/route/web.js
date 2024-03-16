import express from "express";
import homeControllers from "../controllers/homeControllers";
import userControllers from "../controllers/userControllers"
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeControllers.getHomePage);
    router.get('/about', homeControllers.getAbout);
    router.get('/crud', homeControllers.getCrud);
    router.post('/port-crud', homeControllers.postCrud);
    router.get('/get-crud', homeControllers.displayGetCrud);
    router.get('/edit-crud', homeControllers.getEditCrud);
    router.post('/put-crud', homeControllers.putCrud);
    router.get('/delete-crud', homeControllers.deleteCrud);
    router.post('/api/login', userControllers.handleLogin);
    router.get('/api/get-all-user', userControllers.handleGetAllUser);
    router.post('/api/create-new-user', userControllers.handleCreateNewUser);
    router.put('/api/edit-new-user', userControllers.handleEditNewUser);
    router.delete('/api/delete-new-user', userControllers.handleDeleteNewUser);
    router.get('/', (req, res) => {
        return res.send('Hello word')
    })
    return app.use("/", router)
}

module.exports = initWebRoutes;