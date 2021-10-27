import moment from "moment";
import Cliente from "../entities/Cliente";

import { data } from "../../../mock/data";

export default {
  async fakeData(request, response) {
    const cliente = await Cliente.create(data);
    return response.json(cliente);
  },

  async store(request, response) {
    const { data } = request.body;
    const cliente = await Cliente.create(data);
    return response.json(cliente);
  },

  async index(request, response) {
    const cliente = await Cliente.find({
      desde: { $lt: moment(new Date()).format("YYYY-MM-DD") },
    }).sort({ desde: -1 });
    return response.json(cliente);
  },

  async findByName(request, response) {
    const { name } = request.query;
    const cliente = await Cliente.find({
      nome: { $regex: ".*" + name + ".*" },
    });

    return response.json(cliente);
  },
};
