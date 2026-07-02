const User = require("../../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

const isProduction = process.env.NODE_ENV === "production";

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

    // Generate JWT
    const token = createSecretToken(user._id);

    // Store JWT in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "None" : "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return res.status(201).json({
      success: true,
      message: "User signed up successfully",
      user: user.username,
    });

  } catch (error) {
    console.error("Signup Error:", error);

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
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    // Compare password
    const auth = await bcrypt.compare(password, user.password);

    if (!auth) {
      return res.status(401).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    // Generate JWT
    const token = createSecretToken(user._id);

    // Store JWT in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "None" : "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: user.username,
    });

  } catch (error) {
    console.error("Login Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports.Logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "None" : "Lax",
    });

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });

  } catch (error) {
    console.error("Logout Error:", error);

    return res.status(500).json({
      success: false,
      message: "Logout failed",
    });
  }
};