const studentCollection = require("../models/student");

const students = async (req, res) => {
  const { Sname, SRollNo, IsMerried } = req.body;

  const record = new studentCollection({
    StudentName: Sname,
    StudentRollNo: SRollNo,
    IsMerried: IsMerried,
  });

  await record.save();

  res.send({ message: "Successfully Insert Data" });
};

const showdata = async (req, res) => {
  const data = await studentCollection.find();
  res.send(data);
};

const deleteData = async (req, res) => {
  const id = req.params.abc;
  await studentCollection.findByIdAndDelete(id);
  res.send({ message: "Successfully Delete" });
};

const updateValue = async (req, res) => {
  const id = req.params.abc;
  const record = await studentCollection.findById(id);
  res.send(record);
};

const studentUpdate = async (req, res) => {
  const { Sname, SRollNo, IsMerried } = req.body;
  const id = req.params.abc;
  await studentCollection.findByIdAndUpdate(id, {
    StudentName: Sname,
    StudentRollNo: SRollNo,
    IsMerried: IsMerried,
  });
  res.send({ message: "Successfully update" });
};

module.exports = {
  students,
  showdata,
  deleteData,
  updateValue,
  studentUpdate,
};
