const NoteModel = require("../models/Note");
const UserModel = require("../models/User");


exports.getAllNotes = async (req, res) => {
    try {
        const notes = await NoteModel.find({$or: [
            { createdBy: req.session.user.id },
            { sharedWith: req.session.user.id }
        ]}).select('-sharedWith')

        data = notes.map(async note => {
            const createdByUser = await UserModel.findById(note.createdBy);
            return { ...note.toObject(), createdBy: createdByUser.email };
        });

        data = await Promise.all(data);


        res.json({data: data, status: 'success'})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.createNote = async (req, res) => {
    var notePayload = req.body
    notePayload.createdBy = req.session.user.id
    const note = new NoteModel(notePayload)
    try {
        await note.save(res.body)
        res.json({data: note, status: 'success'})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.getNoteById = async (req, res) => {
    try {
        const note = await NoteModel.findById({_id: req.params.id, createdBy: req.session.user.id})
        res.json({data: note, status: 'success'})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.updateNote = async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['title', 'body']

    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const note = await NoteModel.findById(req.params.id)
        if (!note) {
            return res.status(404).send()
        }

        updates.forEach((update) => note[update] = req.body[update])
        await note.save()
        res.json({data: note, status: 'success'})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.deleteNote = async (req, res) => {
    try {
        const note = await NoteModel.findByIdAndDelete(req.params.id)
        res.json({data: note, status: 'success'})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.shareNote = async (req, res) => {
    try {
        const note = await NoteModel.findById(req.params.id)
        const user = await UserModel.findOne({email: req.query.email})

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        console.log(user)
        note.sharedWith.push(user._id);
        await note.save();

        res.json({data: note, status: 'success'})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}


exports.searchNote = async (req, res) => {
    console.log(req.query)

    try {
        const note = await NoteModel.find({title: { $regex: req.query.q, $options: 'i' }})
        res.json({data: note, status: 'success'})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

