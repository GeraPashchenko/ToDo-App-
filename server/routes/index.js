const express = require('express');
const router = express.Router();

//rout handlers
const deleteNotesById = require('./delete_notes_by_id');
const getNotes = require('./get_notes');
const getNotesById = require('./get_notes_by_id');
const postNotes = require('./post_notes');
const putNotesById = require('./put_notes_by_id');


router
    .route('/notes')
    .get(getNotes)
    .post(postNotes)

router
    .route('/notes/:id')
    .get(getNotesById)
    .put(putNotesById)
    .delete(deleteNotesById)


module.exports = router;