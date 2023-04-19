const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req,res) => {

    res.send("Hello Worldss456789");

})

app.listen(port, ()=>{
    console.log("Listening on %d ",port);
})