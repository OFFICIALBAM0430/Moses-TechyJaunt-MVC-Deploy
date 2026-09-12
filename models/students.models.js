const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, minlegth: 2 },
    email: { type: String },
    phone: { type: String },
    address: { type: String },
    course: { type: String },
    institution: { type: String },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;