const studentCollection = require("../models/student");

const students = async (req, res) => {
  const { Sname, SRollNo, Merried } = req.body;
  const record = new studentCollection({
    StudentName: Sname,
    StudentRollNo: SRollNo,
    IsMerried: Merried,
  });
  await record.save();
  res.send({ message: "Successfully insert data" });
};

const showdata = async (req, res) => {
  const data = await studentCollection.find();
  res.send(data);
};

module.exports = {
  students,
  showdata,
};
