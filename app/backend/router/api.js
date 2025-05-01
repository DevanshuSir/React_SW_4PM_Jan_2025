const router = require("express").Router();
const userController = require("../controller/user");
const studentController = require("../controller/student");

router.get("/data", userController.userFun);
router.post("/userdata", userController.formData);
router.delete("/datadelete/:id", userController.deleteData);
router.post("/studentdata", studentController.students);
router.get("/showdata", studentController.showdata);
router.delete("/deletedata/:abc", studentController.deleteData);
router.get("/updatevalue/:abc", studentController.updateValue);
router.put("/studentupdate/:abc", studentController.studentUpdate);

module.exports = router;
