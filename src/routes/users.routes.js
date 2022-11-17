const { Router } = require("express")

const UsersController = require("../controllers/UsersController.js")

const usersRoutes = Router()

const usersController = new UsersController()

usersRoutes.post("/", usersController.create)
usersRoutes.put("/:id", usersController.update)

module.exports = usersRoutes








/* deve ser usada na função "Router"
function MyMiddleware(request, response, next) {
    console.log("você passou pelo MyMiddleware!")
    
    if(!request.body.isAdmin) {
        return response.json({ message: "User unauthorized!" })
    }

    next()
}*/

/*usersRoutes.use(MyMiddleware) aplicando para todas as minhas rotas */
