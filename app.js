const express = require('express')
require('./db/mongoose')
const userRouter = require('./routes/UserRoutes')
const noteRouter = require('./routes/NoteRoutes')

const app = express()

app.use(express.json())

app.use('/api/auth', userRouter)
app.use('/api/notes', noteRouter)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})


module.exports = app;