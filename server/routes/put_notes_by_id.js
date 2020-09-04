let notesArr = require("../bd-imit");

let putNotesById = (req, res)=>{

    notesArr.forEach(note =>{
       if(note.id == req.params.id){
           note.title = req.body.title;
           note.description = req.body.description;
           note.date = req.body.date;
       }
    });

    res.send(notesArr);
}

module.exports = putNotesById;