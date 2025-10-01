import express from "express";
import userRouter from "./routes/userRouter";
import postRouter from "./routes/postRouter";

const app = express();
const PORT = process.env.PORT || 3000;

async function startServer() {
  app.listen(Number(PORT),"0.0.0.0", () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

app.use(express.json());



app.use("/api", (req, res, next) => {
  console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
  next();
}); 

app.use("/users", userRouter);
app.use("/posts", postRouter);

app.get("/", (req, res) => {
  res.send({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memoryUsage: process.memoryUsage(),
  });
});

startServer();
