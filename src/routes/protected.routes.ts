import { authorizeRoles } from "../middlewares/authorizeRoles.middleware.js";
import { authenticateUser } from "../JWT/authenticate.middleware.js";
import { editProfile } from "../controllers/profileEdit.controller.js";
import { postFeedback } from "../controllers/postFeedBack.controller.js";
import { feedbackValidator } from "../validations/feedbackValidation.js";
import { changePassword } from "../controllers/changePassword.controller.js";
import { Router } from "express";
import { handleValidationResults } from "../validations/validationResults.js";



const router = Router()

const authAndRole = [authenticateUser, authorizeRoles("meetee", "mentor")];

// Protected routes
router.use(authAndRole);

router.post("/profile/edit", editProfile);

router.post(
  "/post/feedback/:sessionId",
  feedbackValidator,
  handleValidationResults,
  postFeedback
);

router.post("/change-password", changePassword);

export default router