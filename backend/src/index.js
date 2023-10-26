import express from "express";
import routerStudentReq from'./routes/studentReq.js'
import routerUsers from "./routes/users.js";
import routerAuth from "./routes/authentication.js";
import routerClasses from "./routes/classes.js";
import routerStudents from "./routes/student.js";
import routerProfessor from "./routes/professor.js";
import routerSubjects from "./routes/subjects.js";
import routerSchedule from "./routes/schedule.js";
import routerUploads from "./routes/uploads.js"
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// For testing purposes
app.get("/", (req, res) => {
  res.send("<h2>It's Working!</h2>");
});
app.use("/uploads",routerUploads);
app.use("/students", routerStudents);
app.use("/professors", routerProfessor);
app.use("/subjects", routerSubjects);
app.use("/users", routerUsers);
app.use("/auth", routerAuth);
app.use("/studentReq", routerStudentReq);
app.use("/classes", routerClasses);
app.use("/schedule", routerSchedule)
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
