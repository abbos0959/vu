const DataModel = require("../model/data");
const ApiFeatures = require("../utils/ApiFeatures");

const getAllData = async (req, res) => {
   try {
      const resultperpage = 6;
      const features = new ApiFeatures(DataModel.find(), req.query)
         .search()
         .filter()
         .pagination(resultperpage);
      const data = await features.query;

      res.status(200).json(data);
   } catch (error) {
      res.status(400).json({
         message: error.message,
      });
   }
};

const createData = async (req, res) => {
   try {
      const data = await DataModel.create(req.body);
      res.status(200).json(data);
   } catch (error) {
      res.status(400).json({
         message: error.message,
      });
   }
};

const deleteData = async (req, res) => {
   try {
      const data = await DataModel.findByIdAndDelete(req.params.id);

      if (!data) {
         return res.status(404).json({
            message: "bunday idli data mavjud emas",
         });
      }
      res.status(200).json({
         message: "delete data",
         data,
      });
   } catch (error) {
      res.status(400).json({
         message: error.message,
      });
   }
};

const updateData = async (req, res) => {
   try {
      const data = await DataModel.findByIdAndUpdate(req.params.id, req.body);

      if (!data) {
         res.status(404).json({
            message: "data update bo'lmadi",
         });
      }

      res.status(200).json(data);
   } catch (error) {
      res.status(400).json({
         message: error.message,
      });
   }
};
const iddata = async (req, res) => {
   try {
      const data = await DataModel.findById(req.params.id);

      if (!data) {
         return res.status(404).json({
            message: "bunday idli data mavjud emas",
         });
      }

      res.status(200).json(data);
   } catch (error) {
      res.status(400).json({
         message: error,
      });
   }
};
module.exports = { getAllData, createData, deleteData, updateData, iddata };
