const createError = require('http-errors');
const Project = require("../database/models/Proyect")
const ObjectId = require("mongoose").Types.ObjectId
module.exports = {
    projectList:async(req, res)=>{
        try {
            const projects = await Project.find().where('createBy').equals(req.user)

            return res.status(201).json({
                ok:true,
                msg:"Project list",
                projects
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok:false,
                msg: error.message || "Project list error, contact administrator"
            })
        }
    },
    projectStore : async(req, res)=>{
        try {
            const {name, description, client} = req.body;

            if ([name, description, client].includes("") || !name || !description || !client) {
                throw createError(400,"Los campos no pueden estar vacios")
            }
            if (!req.user) {
                throw createError(400,"Usuario no encontrado")
            }
            const project = new Project(req.body)
            project.createBy=req.user._id
            const projectStore = await project.save()

            return res.status(201).json({
                ok:true,
                msg:"the project has been saved",
                projectStore
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok:false,
                msg: error.message || "a problem occurred while saving the project, contact administrator"
            })
        }
    },
    projectDetail:async(req, res)=>{
        try {
            const {id}= req.params

            if (!ObjectId.isValid(id)) {
                throw createError("No es un ID valido")
            }

            const project = await Project.findById(id)

            if (!project) {
                throw createError("El projecto no fue encontrado")
            }
            if (req.user._id.toString() !== project.createBy.toString()) {
                throw createError("No tienes permiso para acceder a este proyecto")
            }

            return res.status(201).json({
                ok:true,
                msg:"Project detail.",
                project
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok:false,
                msg: error.message || "A problem has occurred with the project detail, contact administrator."
            })
        }
    },
    projectUpdate:async(req, res)=>{
        try {
            const {id}= req.params
            const {name, description, client, dataExpire} = req.body;

            if (!ObjectId.isValid(id)) {
                throw createError("No es un ID valido")
            }

            const project = await Project.findById(id)

            if (!project) {
                throw createError("El projecto no fue encontrado")
            }
            if (req.user._id.toString() !== project.createBy.toString()) {
                throw createError("No tienes permiso para acceder a este proyecto")
            }

            project.name = name || project.name
            project.description = description || project.description
            project.client = client || project.client
            project.dataExpire = dataExpire || project.dataExpire
            
            const projectUpdate = await project.save()

            return res.status(201).json({
                ok:true,
                msg:"the project has been successfully updated",
                projectUpdate
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok:false,
                msg: error.message || "a problem arose when trying to update the project, contact administrator"
            })
        }
    },
    projectRemove: async(req, res)=>{
        try {

            const {id}= req.params
            const {name, description, client, dataExpire} = req.body;

            if (!ObjectId.isValid(id)) {
                throw createError("No es un ID valido")
            }

            const project = await Project.findById(id)

            if (!project) {
                throw createError("El projecto no fue encontrado")
            }
            if (req.user._id.toString() !== project.createBy.toString()) {
                throw createError("No tienes permiso para acceder a este proyecto")
            }

            await project.deleteOne()

            return res.status(201).json({
                ok:true,
                msg:"the project has been successfully delete"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok:false,
                msg: error.message || "a problem arose when trying to delete the project, contact administrator"
            })
        }
    },
    addPartner: async(req, res)=>{
        try {
            return res.status(201).json({
                ok:true,
                msg:"a partner has been added to the project"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok:false,
                msg: error.message || "could not add partner, contact administrator"
            })
        }
    },
    removePartner:async(req, res)=>{
        try {
            return res.status(201).json({
                ok:true,
                msg:"a partner has been remove to the project"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok:false,
                msg: error.message || "could not remove partner, contact administrator"
            })
        }
    }
}