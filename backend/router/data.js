const express = require("express");

const DataController = require("../controller/data");
const router = express.Router();

router.route("/").get(DataController.getAllData);
router.route("/create").post(DataController.createData);
router.route("/delete/:id").delete(DataController.deleteData);
router.route("/update/:id").patch(DataController.updateData);
router.route("/:id").get(DataController.iddata);

module.exports = router;
