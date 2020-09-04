let notesArr = require("../bd-imit");

let postNotes = (req, res)=>{
    let oldNote = req.body;
    let newNote = {};

    newNote.id = notesArr[notesArr.length - 1].id + 1;
    newNote.title = oldNote.title;
    newNote.description = oldNote.description;
    newNote.date = oldNote.date;

    notesArr.push(newNote);
    res.send(notesArr)
}

module.exports = postNotes;