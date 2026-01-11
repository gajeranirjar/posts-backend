require("dotenv").config();
const express = require("express");
const { dbConnect } = require("./configs/dbConnection");
const cors = require("cors");
const app = express();

dbConnect();


app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL
}));

app.get("/" , (req , res) => {
    res.send("hello world");
})


app.use('/api/posts' , require("./routes/postRoute"))

const PORT = process.env.PORT || 1800 ;
app.listen(PORT , () => console.log(`Server Listening On Port :: ${PORT}`))
