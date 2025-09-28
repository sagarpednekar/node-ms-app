import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

async function startServer() {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

app.use(express.json());

import userRouter from "./routes/userRouter";

app.use("/api", (req, res, next) => {
  console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
  next();
}); 

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memoryUsage: process.memoryUsage(),
  });
});

startServer();
