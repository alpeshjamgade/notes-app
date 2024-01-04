const express = require('express')
const authenticate = require('../middleware/authenticate');
const {
    getAllNotes,
    createNote,
    getNoteById,
    updateNote,
    deleteNote,
    shareNote,
    searchNote
} = require('../controllers/NoteController')

const router = express.Router()

router.use('/', authenticate);

router.route('/search').get(searchNote)
router.route('/').get(getAllNotes).post(createNote)
router.route('/:id').get(getNoteById).put(updateNote).delete(deleteNote)
router.route('/:id/share').post(shareNote)

module.exports = router