import { Router } from "express";
import companyController from "../controllers/company.controller.js";

const router = Router()

router.post('/register', companyController.registerCompany)

router.get('/companies',companyController.findAllCompanies)

router.get('/companies/:company', companyController.findOneCompany)

router.delete('/company', companyController.deleteCompany)

export default router