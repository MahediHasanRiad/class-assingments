
exports.about = (req, res) => {
    res.status(200).json({status: "ok", massage: "This is about Page"})
}

exports.form = (req, res) => {
    let jsonData = req.body
    res.send(JSON.stringify(jsonData))
}