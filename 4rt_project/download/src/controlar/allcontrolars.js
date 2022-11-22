
exports.photo = (req, res) => {
    res.download('/img/favicon.png')
    console.log('photo')
}

exports.personal = (req, res) => {
    res.download('../../img/SOP.png')
    console.log('this is personal')
}

exports.profetional = (req, res) => {
    res.download('../../img/Lov.jpg')
    console.log('this is profetional')
}