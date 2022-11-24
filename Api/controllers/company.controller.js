import * as companyRepo from "../data/repositories/company.repo.js";
import { Company } from "../data/models/Company.model.js";

const registerCompany = async(req, res, next) => {
  try {
    const { nameCompany, email, password, location, businessActivity } =
      req.body;
    const newCompany = Company.build({
      nameCompany,
      email,
      password,
      location,
      businessActivity,
    });
    const company = await companyRepo.register(newCompany)
    res.status(201).send(company.dataValues);
  } catch (err) {
    next(err);
  }
};

const deleteCompany = async(req, res, next) => {
  try {
    res.send("No hace nada")
  } catch (err) {
    next(err);
  }
};

const findOneCompany = async(req, res, next) => {
  try {
    const {id} = req.params
    const company = await companyRepo.findOneCompany({id})
    res.status(201).send(company)
  } catch (err) {
    next(err);
  }
};

const findAllCompanies = async(req, res, next) => {
  try {
    const companies = await companyRepo.findAllCompany();
        if (!companies) {
            const error = new Error('Error');
            error.httpStatusCode = 400;
            next(error);
        }
        res.send(companies);
  } catch (err) {
    next(err);
  }
};

export default {
  registerCompany,
  deleteCompany,
  findOneCompany,
  findAllCompanies,
};
