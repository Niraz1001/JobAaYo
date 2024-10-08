import express from "express";
import createuser from "../controller/user.controler.js";


const Route = express.Router();

Route.post('/register', createuser);

export default Route;