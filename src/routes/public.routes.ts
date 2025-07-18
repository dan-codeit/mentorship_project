import { Router } from "express";
import { usersLogin } from "../controllers/usersLogin.controller.js";
import { signup } from "../controllers/signup.controller.js";
import { signupValidator } from "../validations/signupValidation.js";
import { handleValidationResults } from "../validations/validationResults.js";
import { forgotPasswordRequest } from "../controllers/forgotPasswordRequest.controller.js";

const router = Router();


// Public routes
router.post("/auth/login", usersLogin);
router.post("/auth/register", signupValidator, handleValidationResults, signup);
router.post("/forgot-password/request", forgotPasswordRequest);


export default router;
