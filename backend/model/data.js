const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
   name: {
      type: String,
      trim: true,
      required: [true, "siz ism kiritishingiz kerak"],
   },
   price: {
      type: Number,

      required: [true, "siz price kiritishingiz kerak"],
   },
   description: {
      type: String,
      trim: true,
      required: [true, "siz description kiritishingiz kerak"],
   },
});

module.exports = mongoose.model("data", DataSchema);
