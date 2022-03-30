require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const mongoose = require("mongoose");
const forms = require ("./routes/forms");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

//Routes
app.use ('/user', require('./routes/userRoute'))
app.use ('/api/v1', forms)
app.use('/api', require('./routes/upload'))

//Connect to mongoDb
const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("DB connected");
    }
  }
);

const PORT = process.env.PORT || 8080; // set our port
app.listen(PORT, () => {
  console.log("Sever is connected to port", PORT);
});
