import moment from "moment";
import Cliente from "../entities/Cliente";
// import CreateFuncionarioService from "../services/CreateFuncionarioService";

export default {
  async store(request, response) {
    const data = request.body;
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

  // async update(request, response) {
  //   const data = request.body;
  //   const { id } = request.params;
  //   console.log(id);
  //   await Cliente.updateOne(data, {
  //     where: { id },
  //   });
  //   const funcionarioAtualizado = await Cliente.findById(id);
  //   return response.json(funcionarioAtualizado);
  // },

  // async delete(request, response) {
  //   const { id } = request.params;
  //   console.log(id);
  //   await Funcionario.destroy({
  //     where: { id },
  //   });
  //   return response.json({ message: "Funcionário excluído com sucesso" });
  // },
};
