const express = require('express')
const rateLimit = require('express-rate-limit');
const config = require('config');
require('./src/db/mongoose')

const rateLimitConfig = config.get('RATE_LIMIT');

const app = express()

// Rate limiter : allows 100 apis from every ip in 15 minutes segment.
const limiter = rateLimit({
    windowMs: rateLimitConfig.windowMs,
    max: rateLimitConfig.max,
});

app.use(limiter);

app.use(express.json())

// Routes
const userRouter = require('./src/routes/UserRoutes')
const noteRouter = require('./src/routes/NoteRoutes')

app.use('/api/auth', userRouter)
app.use('/api/notes', noteRouter)


const webPort = config.get('WEB_PORT')
app.listen(webPort, () => {
    console.log(`Server is running on port ${webPort}`)
})


module.exports = app;