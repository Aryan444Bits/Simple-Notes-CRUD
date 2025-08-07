const express = require('express');
const { MessageEvent } = require('http');


const app = express();

app.use(express.json()); // middleware 

/*
notes : 
{
title : "",
content  : ""
}
*/

let notes = [];

app.get("/",(req,res)=>{
    res.send("Hello Cohort!")
})

app.post("/notes",(req,res)=>{ // to create a note(frontend to backed)
    console.log(req.body);

    notes.push(req.body);
    res.json({
        Message:"Note created Successfully"
    })
})

app.get("/notes",(req,res)=>{ // get data from server to frontend
    res.json(notes)
})

app.delete("/notes/:index",(req,res)=>{ //delete the data from the server
    const index = req.params.index;

    delete notes[index];

    res.json({
        Message:"Note is Deleted Successfully"
    })
})


app.patch("/notes/:index", (req, res) => {
    const index = req.params.index;
    const { title } = req.body;
    notes[index].title = title;
    res.json({
        message: "note updated successfully",
    });
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
}) 