import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";

dotenv.config({
  path:"./.env",
})   
  
const app = express();
const PORT = process.env.PORT || 4000

app.use(cors({ origin: "https://my-estate-three.vercel.app", credentials: true }));
app.use(express.json());
app.use(cookieParser());


app.get("/user",(req,res)=>{
  res.json({name:"tiger",age:22})
})
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

app.listen(4000, () => {
  console.log("Server is running!");
});
