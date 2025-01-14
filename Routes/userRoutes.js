import express from "express";

import {create, deleteUser, getAllUsers, update} from "../controller/userController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getAllUsers", getAllUsers);
route.put("/update/:id", update)
route.delete('/delete/:id',deleteUser)

export default route;
