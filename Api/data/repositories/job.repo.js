import { Job } from "../models/Job.model.js";

const register = async (value) => {
  const { nameJob, sector, requirement, workingDay, salary } = value;
  const newJob = await Job.create({
    nameJob,
    sector,
    requirement,
    workingDay,
    salary,
  });
  return newJob;
};

const update = async (value) => {
  const { id, nameJob, sector, requirement, workingDay, salary } = value;
  const jobUpdated = await Job.update({
    nameJob,
    sector,
    requirement,
    workingDay,
    salary,
    where: {
      id,
    },
  });
  return jobUpdated;
};

const deleteOne = async (value) => {
  const { id } = value;
  const jobDeleted = await Job.destroy({
    where: { id },
  });
  return jobDeleted;
};

const findOne = async (value) => {
  const { id } = value;
  const job = await Job.findOne({
    where: { id },
  });
  return job;
};

const findAll = async () => {
  const job = await Job.findAll();
  return job;
};

// const customFind = async (value) => {
//     const job = await Job.findAll({
//         where: value
//     })
//     return job;
// };

export {
  register,
  update,
  deleteOne,
  findOne,
  // customFind,
  findAll,
};
