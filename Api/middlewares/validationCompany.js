import { check,validationResult } from "express-validator";

const validationRegisterCompany = async (req, res, next) => {
    await check("nameCompany","format incorrect").notEmpty().isLength({max:40}).isString().run(req);
    await check('email', 'invalid email').isEmail().notEmpty().run(req);
    await check("businessActivity","format incorrect").notEmpty().isLength({max:40}).isString().run(req);
    await check('location', 'format incorrect').notEmpty().isLength({max: 100}).isString().run(req);
    await check('password','password must have min Length 8, 1 lowercase, 1 uppercase and 1 number').isLength({max: 150, min: 8}).run(req);
    
    let result = validationResult(req);
    if(!result.isEmpty()){
        return res.status(400).send(result);
    }
    next()
}

const validationUpdateCompany = async (req, res, next) => {
    await check('id', 'Invalid company').notEmpty().isString().run(req);
    await check("nameCompany","format incorrect").notEmpty().isLength({max:40}).isString().run(req);
    await check('email', 'invalid email').isEmail().notEmpty().run(req);
    await check("businessActivity","format incorrect").notEmpty().isLength({max:40}).isString().run(req);
    await check('location', 'format incorrect').notEmpty().isLength({max: 100}).isString().run(req);

    let result = validationResult(req);
    if(!result.isEmpty()){
        return res.status(400).send(result);
    }
    next()
}

const validateidCompany = async(req, res, next) =>{
    await check('id', 'Invalid company').notEmpty().isString().run(req);
    let result = validationResult(req);
    if(!result.isEmpty()){
        return res.status(400).send(result);
    }
    next();
}

export default {
    validateidCompany,
    validationRegisterCompany,
    validationUpdateCompany
}