const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const StudentSchema = new Schema({
  StudentName: String,
  StudentRollNo: Number,
  IsMerried: Boolean,
});

module.exports = model("Student", StudentSchema);
