const express = require('express');
const dotenv = require('dotenv');
const weatherRoutes = require('./Routes/weatherRoutes');
const cors=require('cors')

const app = express();

app.use(express.json());
app.use(
  cors({
  origin:"https://weather-dashboard-application-two.vercel.app/",
 credentials:true, 
}))
dotenv.config();

app.use("/weather", weatherRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json("Server is running");
  console.log("Server is running");
});

const PORT = process.env.PORT || 3000 ;
app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`)
});
