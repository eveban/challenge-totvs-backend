import mongoose from "mongoose";

const { Schema } = mongoose;

const ClienteSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    valor: {
      type: Number,
      required: true,
    },
    desde: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
  }
);

const Cliente = mongoose.model("Cliente", ClienteSchema);

export default Cliente;
