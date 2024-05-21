import express from 'express';

const PORT = process.env.PORT || 3000;
const app = express();



app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})