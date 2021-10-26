import { Router } from "express";
import ClienteController from "../modules/cliente/controllers/ClienteController";

const routes = Router();

routes.post("/cliente", ClienteController.store);
routes.get("/clientes", ClienteController.index);
routes.get("/cliente/findByName", ClienteController.findByName);

export default routes;
