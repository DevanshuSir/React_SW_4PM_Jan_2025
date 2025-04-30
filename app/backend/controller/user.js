const userData = [];

const userFun = (req, res) => {
  try {
    res.status(200).send(userData);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const formData = (req, res) => {
  try {
    const formValue = req.body;
    userData.push(formValue);
    res.status(200).send({ message: "Successfully Insert Data" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const deleteData = (req, res) => {
  // console.log(req.params.id);

  try {
    const userId = req.params.id;
    userData.splice(userId, 1);
    res.status(200).send({ message: "Successfully delete" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = {
  userFun,
  formData,
  deleteData,
};
