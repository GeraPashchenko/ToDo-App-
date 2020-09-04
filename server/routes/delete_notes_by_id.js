let notesArr = require("../bd-imit");

let deleteNotesById = (req, res)=>{
    let note = notesArr.find(note => note.id == req.params.id);

    if(!note){
        res.send("Note does not found!!!!");
    }else{
        for(let i = 0; i < notesArr.length; i++){
            if(notesArr[i].id == req.params.id){
                notesArr.splice(i, 1);
            }
        }
        res.send(notesArr);
    }
}

module.exports = deleteNotesById;