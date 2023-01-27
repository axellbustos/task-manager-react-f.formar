module.exports = {
    taskList:async(req, res)=>{
        try {
            return res.status(201).json({
                ok:true,
                msg:"Task list"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok:false,
                msg: error.message || "Task list error, contact administrator"
            })
        }
    },
    taskStore : async(req, res)=>{
        try {
            return res.status(201).json({
                ok:true,
                msg:"the task has been saved"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok:false,
                msg: error.message || "a problem occurred while saving the task, contact administrator"
            })
        }
    },
    taskDetail:async(req, res)=>{
        try {
            return res.status(201).json({
                ok:true,
                msg:"task detail"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok:false,
                msg: error.message || "a problem has occurred with the task detail, contact administrator"
            })
        }
    },
    taskUpdate:async(req, res)=>{
        try {
            return res.status(201).json({
                ok:true,
                msg:"the task has been successfully updated"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok:false,
                msg: error.message || "a problem arose when trying to update the task, contact administrator"
            })
        }
    },
    taskRemove: async(req, res)=>{
        try {
            return res.status(201).json({
                ok:true,
                msg:"the task has been successfully delete"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok:false,
                msg: error.message || "a problem arose when trying to delete the task, contact administrator"
            })
        }
    },
    taskChangeState : async(req, res)=>{
        try {
            return res.status(201).json({
                ok:true,
                msg:"the state of the task has been changed"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok:false,
                msg: error.message || "A problem arose when trying to change the state of the task, contact administrator"
            })
        }
    }
}