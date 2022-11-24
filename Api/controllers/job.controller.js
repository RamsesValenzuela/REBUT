import { Job } from "../data/models/Job.model.js";
import * as jobRepo from "../data/repositories/job.repo.js";

const registerJob = async (req, res, next) => {
  try {
    const { nameJob, sector, requirement, workingDay, salary } = req.body;
    const newJob = Job.build({
      nameJob,
      sector,
      requirement,
      workingDay,
      salary,
    });
    const job = await jobRepo.register(newJob)
    res.status(201).send({
        nameJob: job.nameJob,
        sector:job.sector,
        requirement: job.requirement,
        workingDay: job.workingDay,
        salary: job.salary,  
    })
  } catch (err) {
    next(err);
  }
};

const updateJob = async(req, res, next) => {
  try {
    const {id} = req.params;
    const data = req.body;
    const job = await jobRepo.findOne({id})
    if(!job){
        const error = new Error('Job not found');
        error.httpStatusCode = 400;
        next(error);
        return;
    }
    const newJob = {...job.dataValues, ...data}
    const jobUpdated = jobRepo.update(newJob)
    if (jobUpdated === 0) {
        const error = new Error('Client not found');
        error.httpStatusCode = 400;
        next(error);
    }
    res.status(201).send({
        nameJob: newJob.nameJob,
        sector:newJob.sector,
        requirement: newJob.requirement,
        workingDay: newJob.workingDay,
        salary: newJob.salary,  
    })
  } catch (err) {
    next(err);
  }
};

const deleteJob = async(req, res, next) => {
  try {
    const {id} = req.params
    const job = await jobRepo.findOne({id})
    if(!job){
        const error = new Error('Job not found');
        error.httpStatusCode = 400;
        next(error);
        return;
    }
    const deleteJob = await jobRepo.deleteOne({id})
    if (deleteJob === 0) {
        const error = new Error('Client not found');
        error.httpStatusCode = 400;
        next(error);
    }
    res.status(200).send({
        msg: "Deleted Client",
        job
    });
  } catch (err) {
    next(err);
  }
};

const findOneJob = async(req, res, next) => {
  try {
    const {id} = req.params
    const job = await jobRepo.findOne({id})
    if(!job){
        const error = new Error('Job not found');
        error.httpStatusCode = 400;
        next(error);
        return;
    }
    res.status(200).send(job)
  } catch (err) {
    next(err);
  }
};

const findAllJob = async(req, res, next) => {
    try {
        const allJobs = await jobRepo.findAll()
        if(!allJobs){
            const error = new Error('Error');
            error.httpStatusCode = 400;
            next(error);
            return;
        }
        res.status(200).send(allJobs)
    } catch (err) {
      next(err);
    }
    
};
// const findCustomJob = async(req, res, next) => {
//   try {
//   } catch (err) {
//     next(err);
//   }
// };

export default {
  registerJob,
  updateJob,
  deleteJob,
  findAllJob,
//   findCustomJob,
  findOneJob,
};
