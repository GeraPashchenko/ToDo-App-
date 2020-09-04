let notesArr = require("../bd-imit");

let getNotesById = (req, res)=>{
    let note = notesArr.find(note => note.id == req.params.id);

    if(!note){
        res.send("Note does not found!!!!");
    }else{
        res.send(note);
    }
}

module.exports = getNotesById;