const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();


// url="mongodb://0.0.0.0:27017/";
url="mongodb://127.0.0.1:27017/social-media"


mongoose.connect(url , (err)=>{
if (err)
{
    console.log(err)
}
else
{
    console.log('Connected to:', url);
    console.log("connected Success")
}

} )
