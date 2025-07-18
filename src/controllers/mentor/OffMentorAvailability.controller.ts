import { Mentor } from "../../models/z-index.js";
import { RequestHandler } from "express";

export const turnOffMentorAvailabiltity: RequestHandler = async (req, res) => {
  try {
    if (!req || !req.user) {
      res.status(401).json({ message: "Not unauthorized" });
      return;
    }
    const mentorId = req.user.id;
    const { newAvailable } = req.body;

    const mentor = await Mentor.findByPk(mentorId);

    if (!mentor) {
      res.status(404).json({ message: "User not found." });
      return;
    }

    mentor.isAvailable = newAvailable;
    mentor.save();

    res
      .status(200)
      .json({
        message: "Availability is updated successfully",
        isAvailable: mentor.isAvailable,
      });
      
  } catch (error) {
    console.error("Error in turning off mentor availability", error);
    res
      .status(500)
      .json({ message: "Error in turning off mentor availability" });
  }
};
