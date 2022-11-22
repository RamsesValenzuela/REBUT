import { UUID } from "sequelize";
import DataType from "sequelize"
import { sequelize } from "../connection.js";

export const Job = sequelize.define("jobs", {
  id: {
    type: UUID,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  nameJob: {
    type: DataType.STRING(45),
    allowNull: false,
  },
  sector: {
    type: DataType.STRING(120),
    allowNull: false,
    unique: true
  },
  requirement: {
    type: DataType.STRING(150),
    allowNull: false,
  },
  workingDay:{
    type: DataType.STRING(30),
    allowNull: false,
  },
  salary:{
    type: DataType.STRING(10),
    allowNull: false,
  }
});