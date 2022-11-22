import { Company } from "./Company.model.js";
import { Job } from "./Job.model.js";

export const executeAssociations = async () => {
  Company.hasMany(Job, {
    foreignKey: "idCompany",
    allowNull: false,
    onDelete: "CASCADE",
  });
  Job.belongsTo(Company, { foreignKey: "idCompany", allowNull: false });
  
  await Company.sync();
  await Job.sync();  
};
