const app = require('./app')

app.listen(process.env.RUNNING_PORT, (req, res) => {
    console.log('server is running....' + process.env.RUNNING_PORT)
})