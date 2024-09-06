const express = require("express");
const { 
    registerUser, 
    loginUser, 
    logoutUser, 
    forgotPassword, 
    resetPassword, 
    getUserDetails,
    updateUserPassword,
    updateUserProfile,
    getAllUsers,
    getOneUser
} = require("../controllers/userController");
const { isUserAuthenticated, authorizeRoles } = require("../middleware/auth");

const router = new express.Router();

// User Authentication Routes
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);

// User CRUD
router.route("/me").get(isUserAuthenticated, getUserDetails)

// Admin CRUD
router.route("/admin/users").get(isUserAuthenticated, getAllUsers);
router.route("/admin/user/:id").get(isUserAuthenticated, getOneUser);

module.exports = router;