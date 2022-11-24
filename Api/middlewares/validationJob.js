import { check,validationResult } from "express-validator";

const validationRegisterJob = async (req, res, next) => {
    // nameJob,
    // sector,
    // requirement,
    // workingDay,
    // salary,
    await check("nameJob","format incorrect").notEmpty().isLength({max:45}).isString().run(req);
    await check('sector', 'format incorrect').isEmail().isLength({max:60}).isString().run(req);
    await check("requirement","format incorrect").notEmpty().isLength({max:150}).isString().run(req);
    await check('workingDay', 'format incorrect').notEmpty().isLength({max:30}).isString().run(req);
    await check('salary','format incorrect').isLength({max:10}).isString().run(req);
    
    let result = validationResult(req);
    if(!result.isEmpty()){
        return res.status(400).send(result);
    }
    next()
}

const validationUpdateJob = async (req, res, next) => {
    await check('id', 'Invalid job').notEmpty().isString().run(req);
    await check("nameJob","format incorrect").notEmpty().isLength({max:45}).isString().run(req);
    await check('sector', 'format incorrect').isEmail().isLength({max:60}).isString().run(req);
    await check("requirement","format incorrect").notEmpty().isLength({max:150}).isString().run(req);
    await check('workingDay', 'format incorrect').notEmpty().isLength({max:30}).isString().run(req);
    await check('salary','format incorrect').isLength({max:10}).isString().run(req);
    
    let result = validationResult(req);
    if(!result.isEmpty()){
        return res.status(400).send(result);
    }
    next()
}

const validateidJob = async(req, res, next) =>{
    await check('id', 'Invalid job').notEmpty().isString().run(req);
    let result = validationResult(req);
    if(!result.isEmpty()){
        return res.status(400).send(result);
    }
    next();
}

export default {
    validateidJob,
    validationRegisterJob,
    validationUpdateJob
}