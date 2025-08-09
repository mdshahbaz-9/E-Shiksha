// const express = require("express");

// const app = express();

// const userRoutes = require("./routes/User");
// const paymentRoutes = require("./routes/Payments");
// const profileRoutes = require("./routes/Profile");
// const CourseRoutes = require("./routes/Course");

// const database = require("./config/database");
// const cookieParser = require("cookie-parser");

// const cors = require("cors");
// const fileUpload = require("express-fileupload");
// const { cloudnairyconnect } = require("./config/cloudinary");

// const dotenv = require("dotenv");
// dotenv.config();

// const PORT = process.env.PORT || 5000;
// database.connect();

// app.use(express.json());
// app.use(cookieParser());

// const whitelist = process.env.CORS_ORIGIN
//   ? JSON.parse(process.env.CORS_ORIGIN)
//   : ["*"];

// app.use(
//   cors({
//     origin: whitelist,
//     credentials: true,
//     maxAge: 14400,
//   })
// );

// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp",
//   })
// );

// cloudnairyconnect();

// app.use("/api/v1/auth", userRoutes);

// app.use("/api/v1/payment", paymentRoutes);

// app.use("/api/v1/profile", profileRoutes);

// app.use("/api/v1/course", CourseRoutes);

// app.use("/api/v1/contact", require("./routes/ContactUs"));

// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Welcome to the API",
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`); 
// });

 const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
const paymentRoutes = require("./routes/Payments");
const profileRoutes = require("./routes/Profile");
const courseRoutes = require("./routes/Course");
const contactRoutes = require("./routes/ContactUs");

const database = require("./config/database");
const cookieParser = require("cookie-parser");

const cors = require("cors");
const fileUpload = require("express-fileupload");
const { cloudnairyconnect } = require("./config/cloudinary");

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;
database.connect();

app.use(express.json());
app.use(cookieParser());

// --- CORS SETUP START ---
const CORS_ORIGIN = process.env.CORS_ORIGIN || ""; // e.g., 'https://e-shiksha-v8yj.vercel.app,https://other.com'

const whitelist = CORS_ORIGIN.split(",").map(origin => origin.trim()).filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps, curl, etc.)
      if (!origin) return callback(null, true);
      if (whitelist.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    maxAge: 14400,
  })
);
// --- CORS SETUP END ---

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

// cloudinaryConnect();
cloudnairyconnect();


app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/contact", contactRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the API",
  });
});

// Generic error handler (optional but good practice)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
