const express = require('express');
const router = express.Router();
const { taskList, taskStore, taskDetail, taskUpdate, taskRemove, taskChangeState } = require("../controllers//taskController")

//
router.route('/')//es como una ruta dentro de otra, se pasa la ruta compartida y despues se especifica el metodo
    .get(taskList)
    .post(taskStore)
router.route('/:id')
    .get(taskDetail)
    .post(taskUpdate)
    .delete(taskRemove)
router
    .post('/changeState', taskChangeState)
module.exports = router;