import Joi from "joi";

export const signupValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(100).required(),
        phone: Joi.string().optional().allow("", null)   // ADD THIS
    });

    const { error } = schema.validate(req.body);

    if (error) {
        console.log("VALIDATION ERROR:", error.details);
        return res.status(400).json({
            message: error.details[0].message,
            success: false
        });
    }

    next();
};



export const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(100).required()
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: "Bad request",
            error
        });
    }

    next();
};
