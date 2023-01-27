module.exports = {
    projectList:async(req, res)=>{
        try {
            return res.status(201).json({
                ok:true,
                msg:"Project list"
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
            return res.status(201).json({
                ok:true,
                msg:"the project has been saved"
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
            return res.status(201).json({
                ok:true,
                msg:"proyect detail"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok:false,
                msg: error.message || "a problem has occurred with the project detail, contact administrator"
            })
        }
    },
    projectUpdate:async(req, res)=>{
        try {
            return res.status(201).json({
                ok:true,
                msg:"the project has been successfully updated"
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