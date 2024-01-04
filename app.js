const express = require('express')
const rateLimit = require('express-rate-limit');

require('./src/db/mongoose')
const userRouter = require('./src/routes/UserRoutes')
const noteRouter = require('./src/routes/NoteRoutes')

const app = express()

// Rate limiter : allows 100 apis from every ip in 15 minutes segment.
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});

app.use(limiter);

app.use(express.json())

app.use('/api/auth', userRouter)
app.use('/api/notes', noteRouter)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})


module.exports = app;