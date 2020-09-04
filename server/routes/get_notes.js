let notesArr = require("../bd-imit");

let getNotes = (req, res)=>{
    res.send(notesArr);
}

module.exports = getNotes;