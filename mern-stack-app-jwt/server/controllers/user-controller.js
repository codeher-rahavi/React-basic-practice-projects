const Joi = require('joi')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//to register an user
//to login a user
//logout

const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
});


const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
});

const generateToken = (getId) => {
    return jwt.sign({ getId }, 'DEFAULT_SECRET_KEY', {
        expiresIn: 3 * 24 * 60 * 60
    })
}

const registerUser = async (req, res, next) => {
    const { name, email, password } = req.body;


    const { error } = registerSchema.validate({ name, email, password })

    if (error) {
        return res.status(400).json({
            success: false,
            message: error.details[0].message
        })
    }
    try {
        const isUserEmailAlredyExists = await User.findOne({ email })//findOne is used to find a single document in MongoDB collections that matches a given condition

        if (isUserEmailAlredyExists) {
            return res.status(400).json({
                success: false,
                message: 'User email already exists ! please try with different email'
            })
        }
        else {
            const hashPassword = await bcrypt.hash(password, 12);

            const newlyCreatedUser = await User.create({
                name,
                email,
                password: hashPassword,
            });

            if (newlyCreatedUser) {
                const token = generateToken(newlyCreatedUser?._id);

                res.cookie('token', token, {
                    withCredentials: true,
                    httpOnly: false
                });

                res.status(201).json({
                    success: true,
                    message: 'User registration successful',
                    userData: {
                        name: newlyCreatedUser.name,
                        email: newlyCreatedUser.email,
                        _id: newlyCreatedUser._id,
                    },
                });


            }
        }
    }
    catch (error) {

        return res.status(500).json({
            success: false,
            message: 'Something Went Wrong! Please try again'
        });

    }
};

const loginUser = async (req, res, next) => {
    const { password, email } = req.body;


    const { error } = loginSchema.validate({ password, email })

    if (error) {
        return res.status(400).json({
            success: false,
            message: error.details[0].message
        });
    }

    try {
        const getUser = await User.findOne({ email });

        if (!getUser) {
            return res.json({
                message: 'Incorrct email',
                success: false,
            });
        }

        const checkAuth = await bcrypt.compare(password, getUser.password);

        if (!checkAuth) {
            return res.json({
                message: 'Incorrct password',
                success: false,
            });
        }

        const token = generateToken(getUser?._id);
        res.cookie('token', token, {
            withCredentials: true,
            httpOnly: false
        });

        res.status(201).json({
            success: true,
            message: 'User logged In'
        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: 'Something Went Wrong! Please try again'
        });
    }
};

const logout = async (req, res) => {
    res.cookie('token', "", {
        withCredentials: true,
        httpOnly: false
    })

    return res.status(200).json({
        success: true,
        message: "Logout successfully",
    })
}

module.exports = { registerUser, loginUser, logout }