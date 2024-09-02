const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/generateJWT");
const crypto = require("crypto");



// Register a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {

    const {username, email, password, dob, primaryCurrency, ocupation} = req.body;

    const user = await User.create({
        name: username,
        email,
        password,
        dob,
        primaryCurrency,
        ocupation
    }); 

    sendToken(user, 201, res);

})




// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {

    const {email, password} = req.body

    if (!email || !password) return next(new ErrorHandler("Enter Email and Password", 400));

    const user = await User.findOne({email}).select("+password")
    if (!user) return next(new ErrorHandler("Invalid Email or Password", 401));

    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) return next(new ErrorHandler("Invalid Email or Password", 401));

    sendToken(user, 200, res);

})





// Logout User
exports.logoutUser = catchAsyncErrors(async (req, res, next) => {

    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: "logged out successfully !"
    })

})


// Get User Details

exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {

    const user = await User.findById(req.user.id);

    res.status(201).json({
        success: true,
        user
    })

})

exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {
    
        const users = await User.find();
    
        res.status(201).json({
            success: true,
            users
        })
    
})


exports.getOneUser = catchAsyncErrors(async (req, res, next) => {
    
    const users = await User.findById(req.params.id);

    if (!users){
        return next(new ErrorHandler(`User not found with id: ${req.params.id}`));
    }

    res.status(201).json({
        success: true,
        users
    })

})
