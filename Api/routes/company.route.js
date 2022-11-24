import { Router } from "express";
import companyController from "../controllers/company.controller.js";
import validationCompany from "../middlewares/validationCompany.js";
import { isAuthCompany } from '../middlewares/isAuthCompany.js';

const router = Router()

router.post('/register',validationCompany.validationRegisterCompany, companyController.registerCompany)

router.get('/companies',companyController.findAllCompanies)

router.get('/companies/:id', validationCompany.validateidCompany, companyController.findOneCompany)

router.delete('/company/:id',isAuthCompany,validationCompany.validateidCompany,companyController.deleteCompany)

export default router