const Admin = require("../models/Admin");const Student = require("../models/Student");

exports.registerStudent = async (req, res, next) => {
  const { studentID, name, email, contactNumber, password } = req.body;

  try {
    const student = await Student.create({
      studentID,
      name,
      email,
      contactNumber,
      password,
    });
    sendToken(student, 200, res);
  } catch (error) {
    res.status(500).json({
      error,
      desc: "Error occurred in registerstudent" + error,
    });
  }
};

exports.registerAdmin = async (req, res, next) => {
  const { email, phoneno, password } = req.body;

  try {
    const admin = await Admin.create({
      email,
      phoneno,
      password,
    });
     const token = await Admin.getSignedToken();
    sendToken(admin, 201, res);
  } catch (error) {
    res.status(500).json({
      error,
      desc: "Error occurred in registerstudent" + error,
    });
  }
};

exports.studentLogin = async (req, res, next) => {
  const { email, password, role } = req.body;

  if (!email || !password) {
    res.status(400).json({
      success: false,
      desc: "provide email, password",
    });
  }

  try {
    const student = await Student.findOne({ email: email }).select("+password");

    if (!student) {
      res.status(404).json({
        success: false,
        error: "invalid credentials",
      });
    }

    const isMatch = await student.matchPasswords(password);

    if (!isMatch) {
      res.status(401).json({
        success: false,
        error: "Invalid credentials - Please check again",
      });
    } else {
      sendToken(student, 200, res);
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.adminLogin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      success: false,
      desc: "provide email, password and role ",
    });
  }

  try {
    const admin = await Admin.findOne({ email: email }).select("+password");

    if (!admin) {
      res.status(404).json({
        success: false,
        error: "invalid credentials",
      });
    }

    const isMatch = await admin.matchPasswords(password);

    if (!isMatch) {
      res.status(401).json({
        success: false,
        error: "Invalid credentials - Please check again",
      });
    } else {
      sendToken(admin, 200, res);
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ sucess: true, token, user });
};
