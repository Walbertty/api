const { Router } = require("express")

const NotesController = require("../controllers/NotesController")

const notesRoutes = Router()

const notesController = new NotesController()

notesRoutes.get("/", notesController.index)
notesRoutes.post("/:user_id", notesController.create)
notesRoutes.get("/:id", notesController.show)
notesRoutes.delete("/:id", notesController.delete)

module.exports = notesRoutes








/* deve ser usada na função "Router"
function MyMiddleware(request, response, next) {
    console.log("você passou pelo MyMiddleware!")
    
    if(!request.body.isAdmin) {
        return response.json({ message: "User unauthorized!" })
    }

    next()
}*/

/*usersRoutes.use(MyMiddleware) aplicando para todas as minhas rotas */
