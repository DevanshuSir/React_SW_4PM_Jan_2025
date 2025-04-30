const router = require("express").Router();
const userController = require("../controller/user");
// console.log(userController);

router.get("/", userController.getData);
router.get("/data", userController.getSecondData);

module.exports = router;
