const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload")

const UsersController = require("../controllers/UsersController");
const UserAvatarController = require("../controllers/UserAvatarController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update);

module.exports = usersRoutes;








/* deve ser usada na função "Router"
function MyMiddleware(request, response, next) {
    console.log("você passou pelo MyMiddleware!")
    
    if(!request.body.isAdmin) {
        return response.json({ message: "User unauthorized!" })
    }

    next()
}*/

/*usersRoutes.use(MyMiddleware) aplicando para todas as minhas rotas */
