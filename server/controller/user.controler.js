import { user } from "../model/user.model.js";
import errormiddleware from "../middleware/error.middleware.js";
import bcrypt from "bcrypt"

const createuser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name) {
      next("name is required");
    }
    if (!email) {
      next("email is required");
    }
    if (!password) {
      next("password is required");
    }
    const existemail = await user.findOne({ email });
    if (existemail) {
      next("email is already taken");
    }

    await user.create({ name, email, password, role });
    res.status(201).send({ success: true, message: "new user created" });
  } catch (error) {
    next(error);
  }
};


export const login = async (req,res,next)=>{
    try {
        const {email, password}=req.body;

        const useremail = await user.findOne({email})
        if (!useremail) {
            next("invalid email and password");
        }
        const ismatch = await bcrypt.compare(password, user.password)
        if (!ismatch) {
            next("invlaid email and password");
        }
        res.status(201).json({
            success: true,
            login: true,
            message: "login success fully"
        })

    } catch (error) {
        next(error)
    }
}



export default createuser;
