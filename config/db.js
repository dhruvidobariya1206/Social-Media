const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();


url="mongodb://0.0.0.0:27017/";


mongoose.connect(url , (err)=>{
if (err)
{
    console.log(err)
}
else
{
    console.log("connected Success")
}

} )
