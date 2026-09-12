const Student = require("../models/students.models");

const createStudent = async (req, res) => {
    const { name, age, email, phone, address, course, institution } = req.body;
    try {
        const student = new Student({
            name,
            age,
            email,
            phone,
            address,
            course,
            institution
        });
        await student.save();
        return res.status(200).json({ message: "Student Data Created Successffuly", student });
    } catch (error) {
        return res.status(500).json({ message: "Student Data Not Created" });
    };
}


const updateStudentById = async (req, res) => {
    const { id } = req.params;
    const { name, age, email, phone, address, course, institution } = req.body;
    try {
        const student = await Student.findByIdAndUpdate(
            id,
            { name, age, email, phone, address, course, institution },
            { new: true },
        );
        return res.status(200).json({ message: "Student Data Updated Successfully", student });
    } catch (error) {
        return res.status(500).json({ message: "Student Data Not Updated" });
    };
}


const deleteStudentById = async (req, res) => {
    const { id } = req.params;
    try {
        const student = await Student.findByIdAndDelete({ id });
        return res.status(200).json({ message: "Student Data Deleted Successfully", student });
    } catch (error) {
        return res.status(500).json({ message: "Student Data Not Deleted" });
    };
}


const getStudent = async (req, res) => {
    try {
        const student = await Student.find();
        return res.status(200).json({ message: "All Student's Data Fetched Successfully", student });
    } catch (error) {
        return res.status(500).json({ message: "Unable to fetch student data" });
    };
}


const getStudentById = async (req, res) => {
    const { id } = req.params;
    try {
        const student = await Student.findById({ id });
        return res.status(200).json({ message: "Student Data Fetched Successfully", student });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    };
}



const getStudentByName = async (req, res) => {
    const { name } = req.query;
    try {
        const student = await Student.find({ name });
        return res.status(200).json({ message: "Student Data Fetched Successfully", student });
    } catch (error) {
        return res.status(500).json({ message: "Unable to fetch student data" });
    };
}


const getStudentByEmail = async (req, res) => {
    const { email } = req.query;
    try {
        const student = await Student.find({ email });
        return res.status(200).json({ message: "Student Data Fetched successfully", student });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    };
}


module.exports = {
    createStudent,
    updateStudentById,
    deleteStudentById,
    getStudent,
    getStudentById,
    getStudentByName,
    getStudentByEmail,
};