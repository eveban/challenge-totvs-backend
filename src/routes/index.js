import { Router } from "express";
import ClienteController from "../modules/cliente/controllers/ClienteController";

const routes = Router();

routes.get("/fake", ClienteController.fakeData);

routes.post("/cliente", ClienteController.store);
routes.get("/clientes", ClienteController.index);
routes.get("/clientes/cliente", ClienteController.findByName);

export default routes;
