const Users = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendEmail = require("./sendMail");

// Register a user => /api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  const user = await Users.create({
    firstName,
    lastName,
    email,
    password,
    avatar: {
      public_id: "people/pngwing.com_qyfojj",
      url: "https://res.cloudinary.com/dziw9efzv/image/upload/v1647229197/samples/people/pngwing.com_qyfojj.png",
    },
  });

  const token = user.getJwtToken();

  res.status(201).json({
    success: true,
    token,
  });
});

//Login User => /api/v1/login
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  //Checks if email and password are valid

  if (!email || !password) {
    return next(new ErrorHandler("Please provide email and password", 400));
  }

  //Check if user exists
  const user = await Users.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401)); //unauthenticateduser
  }

  //Checks if password is correct

  const isPasswordMatch = await user.comparePassword(password);

  if (!isPasswordMatch) {
    return next(new ErrorHandler("Invalid email or password", 401)); //unauthenticateduser
  }

  const token = user.getJwtToken();
  
  res.status(200).json({
    success:true,
    token
  })
});
