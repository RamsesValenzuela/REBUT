import jwt from "jsonwebtoken";

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const company = await companyRepo.findOneCompany({ email });
    if (company) {
      if (!admin.verifyPassword(password)) {
        return res.status(404).send({ message: "incorrect password" });
      }
      const token = jwt.sign(
        { idAdmin: admin.idAdmin, useraName: admin.userName },
        process.env.SECRET_KEY_ADMIN,
        {
          expiresIn: "1d",
        }
      );
      return res.status(200).send({
        message: "successful Admin",
        token: token,
      });
    }

    return res.status(404).send({
      message: "Unsuccess login",
    });
  } catch (err) {
    next(err);
  }
};

export default {login}