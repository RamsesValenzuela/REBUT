import { UUID } from "sequelize";
import DataType from "sequelize"
import { sequelize } from "../connection.js";

export const Company = sequelize.define("companies", {
  id: {
    type: UUID,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  nameCompany: {
    type: DataType.STRING(40),
    allowNull: false,
  },
  email: {
    type: DataType.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataType.STRING(150),
    allowNull: false,
  },
  location:{
    type: DataType.STRING(100),
    allowNull: false,
  },
  businessActivity:{
    type: DataType.STRING(40),
    allowNull: false,
  }
},{ timestamps: true ,
  hooks:{
    beforeCreate: async(admin)=>{
      const salt = await bcrypt.genSalt(10);
      admin.password = await bcrypt.hash(admin.password, salt);
    }
  }
});

Company.prototype.verifyPassword = function(password){
  return bcrypt.compareSync(password, this.password);
}
