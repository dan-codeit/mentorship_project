import { Router } from "express";
import { acceptMentorshipRequest } from "../../controllers/mentor/acceptMentorshipRequest.controller.js";
import { authorizeRoles } from "../../middlewares/authorizeRoles.middleware.js";
import { authenticateUser } from "../../JWT/authenticate.middleware.js";
import { createTimeSlot } from "../../controllers/mentor/createTimeSlot.controller.js";

import { upComingRequests } from "../../controllers/mentor/upComingRequest.controller.js";
import { upcomingSessions } from "../../controllers/mentor/upcomingSessions.controller.js";
import { turnOffMentorAvailabiltity } from "../../controllers/mentor/OffMentorAvailability.controller.js";

const router = Router();

router.use(authenticateUser, authorizeRoles("mentor"));

router.patch("/turn-off/avaialability", turnOffMentorAvailabiltity);

// accept mentorship request
router.post(
  "/:menteeId/accept-mentorship-requests/:requestId",
  acceptMentorshipRequest
);

// create timeslot
router.post(
  "/create/timeslots",
  createTimeSlot
);

//upcoming sessions
router.get(
  "/upcoming/sessions",
  upcomingSessions
);

//upcoming requests
router.get(
  "/upcoming/requests",
  upComingRequests
);

export default router;
