import express from "express";
import { autoMation } from "./scheduler/autoComplete.js";
import cors from "cors";
import homeRoute from "./routes/home.route.js";
import adminRoutes from "./routes/admin_routes/admin.routes.js";
import publicRoutes from "./routes/public.routes.js";
import protectedRoutes from "./routes/protected.routes.js";
import menteeRoutes from "./routes/mentee/mentee.routes.js";
import mentorRoutes from "./routes/mentor/mentor.routes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", homeRoute);
app.use("/api/admins", adminRoutes);
app.use("/api/users", menteeRoutes);
app.use("/api/users", publicRoutes);
app.use("/api/users", protectedRoutes);
app.use("/api/users", mentorRoutes);

const autoCompleteJob = autoMation();
autoCompleteJob.start();

export { app };
