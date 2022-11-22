const app = require('./app')

app.listen(process.env.RUNNING_PORT, (req, res) => {
    console.log('server is on...' + process.env.RUNNING_PORT)
})