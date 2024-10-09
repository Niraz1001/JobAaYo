import express from "express";
import createuser, { login } from "../controller/user.controler.js";


const Route = express.Router();

Route.post('/register', createuser);
Route.post('/login', login);
export default Route;