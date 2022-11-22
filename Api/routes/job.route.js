import { Router } from "express";
import jobController from "../controllers/job.controller.js";

const router = Router()

router.post('/job',jobController.registerJob)

router.get('/jobs', jobController.findAllJob)

router.get('/jobs', jobController.findOneJob)
//Aqui se deben de enviar los parametros del where en el body
router.get('/jobs', jobController.findCustomJob)

router.put('/job/:id',jobController.updateJob)

router.delete('/job/:id',jobController.deleteJob)

export default router