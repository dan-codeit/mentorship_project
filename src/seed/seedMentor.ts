import { Mentor } from "../models/z-index.js";
import { isUserEmailUnique } from "../validations/isUserEmailUnique.js";

export async function seedMentors() {
  const mentorsData = [
    {
      firstName: "Joy",
      lastName: "Olawale",
      shortBio: "Helping people grow in their careers.",
      email: "olawale@example.com",
      goals: "Guide mentees toward professional success.",
      skills: ["Career Coaching", "Interview Prep", "Resume Review"],
      password: "pass$43GRJo6*8rd123",
      isAvailable: true,
    },
    {
      firstName: "Tolu",
      lastName: "Deji",
      shortBio: "Full-stack engineer passionate about mentorship.",
      email: "tolu@example.com",
      goals: "Help others break into software engineering.",
      skills: ["JavaScript", "Node.js", "React", "System Design"],
      password: "passf#5woG123",
      isAvailable: true,
    },
    {
      firstName: "Mike",
      lastName: "Obi",
      shortBio: "UX designer focused on accessibility and simplicity.",
      email: "obimike@example.com",
      goals: "Support aspiring designers entering the UX field.",
      skills: ["UX Design", "Figma", "User Research", "Design Thinking"],
      password: "passFtwor$6d123",
      isAvailable: true,
    },
  ];

  for (const mentor of mentorsData) {
    const isEmailUnique = await isUserEmailUnique(mentor.email);
    if (!isEmailUnique) {
      console.log("Email is already in use.");
      return;
    }

    const existing = await Mentor.findOne({ where: { email: mentor.email } });

    if (existing) {
      console.log("Email already exists");
      return;
    }

    await Mentor.create(mentor);
  }

  console.log("Mentor seeding completed.");
}
