import { Router } from "express";
import jobController from "../controllers/job.controller.js";
import validationJob from "../middlewares/validationJob.js";
import { isAuthCompany } from "../middlewares/isAuthCompany.js";
const router = Router()

router.post('/job',isAuthCompany,validationJob.validationRegisterJob,jobController.registerJob)

router.get('/jobs', jobController.findAllJob)

router.get('/job/:id',validationJob.validateidJob,jobController.findOneJob)
//Aqui se deben de enviar los parametros del where en el body
// router.get('/jobs', jobController.findCustomJob)

router.put('/job/:id',isAuthCompany,validationJob.validationUpdateJob,jobController.updateJob)

router.delete('/job/:id',isAuthCompany,validationJob.validateidJob,jobController.deleteJob)

export default router