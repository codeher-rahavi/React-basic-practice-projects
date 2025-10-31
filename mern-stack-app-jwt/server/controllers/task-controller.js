//add a new task
//to delete a task by user id
// edit a task
const Joi = require('joi');
const Task = require('../models/task')

const taskSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    status: Joi.string().required(),
    priority: Joi.string().required(),
    userId: Joi.string().required(),
})

const addNewTask = async (req, res) => {
    const { title, description, status, userId, priority } = req.body;
    const { error } = taskSchema.validate({ title, description, status, priority, userId });

    if (error) {
        res.status(400).json({
            success: false,
            message: error.details[0].message
        })
    }
    try {
        const newlyCreatedTask = await Task.create({
            title,
            description,
            status,
            priority,
            userId,
        });

        if (newlyCreatedTask) {
            return res.status(200).json({
                success: true,
                message: 'Task added successfully'
            })
        }
        else {
            return res.status(400).json({
                success: true,
                message: 'Some error occured ! please try again'
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong Please try again'
        });
    }

};

const getAllTasks = async (req, res) => {
    const { id } = req.params;


    try {
        const extractAllTasksByUserId = await Task.find({ userId: id });

        if (extractAllTasksByUserId) {
            return res.status(200).json({
                success: true,
                taskList: extractAllTasksByUserId
            });
        } else {
            return res.status(400).json({
                success: false,
                message: 'Some error occured ! please try again'
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong Please try again'
        });


    }
};
const updateTask = async (req, res) => {
    const { title, description, status, priority, userId, _id } = await req.body;
    try {

        const updateTasks = await Task.findByIdAndUpdate({
            _id,
        }, {
            title, description, status, priority, userId
        }, {
            new: true
        });
        if (updateTasks) {
            return res.status(200).json({
                success: true,
                message: "task updated"
            })
        }
        else {
            return res.status(400).json({
                success: false,
                message: 'Some error occured ! please try again'
            });
        }



    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong Please try again'
        });


    }

};


const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) {
            return res.status(400).json({
                success: false,
                message: ' Task id is required'
            });
        }
        const deleteTask = await Task.findByIdAndDelete(id);

        if (deleteTask) {
            return res.status(200).json({
                success: true,
                message: "task deleted"
            })
        }
        else {
            return res.status(400).json({
                success: false,
                message: 'Some error occured ! please try again'
            });
        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong Please try again'
        });


    }
};

module.exports = { addNewTask, getAllTasks, deleteTask, updateTask }