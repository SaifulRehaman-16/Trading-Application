const User = require("../../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username, createdAt } = req.body;

    // Check required fields
    if (!email || !password || !username) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    // Create new user
    const user = await User.create({
      email,
      password,
      username,
      createdAt,
    });

    // Create JWT
    const token = createSecretToken(user._id);

    // Store JWT in cookie
    res.cookie("token", token, {
      httpOnly: false,
      sameSite: "lax",
      secure: false,
    });

    return res.status(201).json({
      success: true,
      message: "User signed up successfully",
      user: user.username,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Signup failed",
    });
  }
};
module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check required fields
    if (!email || !password) {
      return res.json({
        success: false,
        message: "All fields are required",
      });
    }

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    // Compare password
    const auth = await bcrypt.compare(password, user.password);

    if (!auth) {
      return res.json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    // Create JWT
    const token = createSecretToken(user._id);

    // Store cookie
    res.cookie("token", token, {
      httpOnly: false, // Keep false for now since you're using react-cookie
      sameSite: "lax",
      secure: false,
    });

    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: user.username,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports.Logout = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: false,
    sameSite: "lax",
    secure: false,
  });

  return res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};