import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from './userModel.js';
import errorHandler from '../utiles/error.js'

export const signup = async (req, res, next) => {
  const {
    firstName, 
    lastName,
    phoneNumber,
    emailAddress,
    password,
    confirmPassword,
    acceptTerms,
  } = req.body;

  // Validate user input
  if (
    !firstName ||
    !lastName ||
    !phoneNumber ||
    !emailAddress ||
    !password ||
    !confirmPassword
  ) {
    return res
      .status(400)
      .json({ success: false, error: "All fields are required" });
  }

  if (password !== confirmPassword) {
    return res
      .status(400)
      .json({ success: false, error: "Passwords do not match" });
  }

  if (!acceptTerms) {
    return res
      .status(400)
      .json({
        success: false,
        error: "Terms and conditions must be accepted.",
      });
  }

  try {
    // Check if the email is already registered
    const existingUser = await User.findOne({ emailAddress });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, error: "Email address is already registered" });
    }

    // Hash the password
    const hashedPassword = bcryptjs.hashSync(password, 10);


    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      phoneNumber,
      emailAddress,
      password: hashedPassword,
    });

    // Save the new user
    await newUser.save();

    res.status(201).json('User created successfully!');
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  const { emailAddress, password } = req.body;
  try {
    const validUser = await User.findOne({ emailAddress });
    if (!validUser) return next(errorHandler(404, 'User not found!'));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, 'Wrong credentials!'));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const signOut = async (req, res, next) => {
  try {
    res.clearCookie('access_token');
    res.status(200).json('User has been logged out!');
    
  } catch (error) {
    next(error);
  }
};