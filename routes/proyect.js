const express = require('express');
const router = express.Router();
const { projectList, projectStore, projectDetail, projectUpdate, projectRemove, addPartner, removePartner } = require("../controllers/proyectController")

//
router.route('/')//es como una ruta dentro de otra, se pasa la ruta compartida y despues se especifica el metodo
    .get(projectList)
    .post(projectStore)
router.route('/:id')
    .get(projectDetail)
    .post(projectUpdate)
    .delete(projectRemove)
router
    .get('/partner/add', addPartner)
    .delete("/partner/remove", removePartner)
module.exports = router;