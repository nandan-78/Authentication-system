import mongoose from "mongoose";

const DB = `mongodb+srv://project:test123@cluster0.bzowya1.mongodb.net/Authusers?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("DataBase Connected"))
  .catch((error) => {
    console.log(error);
  });