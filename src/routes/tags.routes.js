const { Router } = require("express")

const TagsController = require("../controllers/TagsController")

const tagsRoutes = Router()

const tagsController = new TagsController()

tagsRoutes.get("/:user_id", tagsController.index)

module.exports = tagsRoutes








/* deve ser usada na função "Router"
function MyMiddleware(request, response, next) {
    console.log("você passou pelo MyMiddleware!")
    
    if(!request.body.isAdmin) {
        return response.json({ message: "User unauthorized!" })
    }

    next()
}*/

/*usersRoutes.use(MyMiddleware) aplicando para todas as minhas rotas */
