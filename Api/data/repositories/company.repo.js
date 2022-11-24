import { Company } from "../models/Company.model.js";

const register = async(value) => {
    const {nameCompany,email,password,location,businessActivity} = value;
    const companyCreated = Company.create({
        nameCompany,
        email,
        password,
        location,
        businessActivity
    },{returning: true})
    return companyCreated
}

const update= async (value) => {
    if(!value) return null
    const {id} = value
    const company = await Company.update({
        nameCompany,
        email,        
        location,
        businessActivity,
        where: {id:id}
    })
    return company
}

const deleteOne = async(value) => {
    if(!value) return null
    const {id} = value
    const companyDeleted = await Company.destroy({
        where: {id:id}
    })
    return companyDeleted
}

const findOne = async(value) => {
    //Aqui se regresa todo pero sin la contraseña y el ID
    if(!value) return null
    const {id} = value
    const company = await Company.findOne({
        attributes:["id","nameCompany","email","location","businessActivity"],
        where: {id:id}
    })
    return company
}

const findOneByEmail = async(value) => {
    //Aqui se regresa todo pero sin la contraseña y el ID
    if(!value) return null
    const {id} = value
    const company = await Company.findOne({        
        where: {email:email}
    })
    return company
}

const findAll = async() => {
    const company = await Company.findOne({
        attributes:["id","nameCompany","email","location","businessActivity"],    
    })
    return company
}

export {
    register,
    deleteOne,
    findOne,
    findAll,
    findOneByEmail
}