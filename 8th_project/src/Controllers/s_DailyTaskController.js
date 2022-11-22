const StudentTaskModel = require("../Models/s_DailyTaskModel");

exports.createTask = (req, res) => {

  const query = {
    UserName: req.headers.username,
    Subject: req.body["Subject"],
    TodayTopic: req.body["TodayTopic"],
    HomeWork: req.body["HomeWork"],
    HomeWorkSubmitDate: req.body["HomeWorkSubmitDate"],
  };

  StudentTaskModel.create(query, (err, data) => {
    if (err) {
      res.status(400).json({ massage: "error", data });
    } else {
      res.json({ massage: "success", data });
    }
  });
};


exports.showAllTask = (req, res) => {

  const username = req.headers.username

  StudentTaskModel.find({UserName: username}, (err, data) => {
    if (err) {
      res.status(400).json({ massage: "error", data });
    } else {
      res.json({ massage: "success", data });
    }
  })
}


exports.updateTask = (req, res) => {
  const username = req.headers.username
  const id = req.params.id
  const update = req.body

  StudentTaskModel.updateOne({UserName: username, _id: id}, update, (err, data) => {
    if (err) {
      res.status(400).json({ massage: "error", err });
    } else {
      res.json({ massage: "success", data });
    }
  })
}



exports.removeTask = (req, res) => {
  const username = req.headers.username
  const id = req.params.id

  StudentTaskModel.deleteOne({UserName: username, _id: id}, (err, data) => {
    if (err) {
      res.status(400).json({ massage: "error", err });
    } else {
      res.json({ massage: "success", data });
    }
  })
}


exports.filterBySubject = (req, res) => {
  const username = req.headers.username
  const Subject = req.body['Subject']

  StudentTaskModel.find({UserName: username, Subject: Subject}, (err, data) => {
    if (err) {
      res.status(400).json({ massage: "error", err });
    } else {
      res.json({ massage: "success", data });
    }
  })
}



exports.filterByDate = (req, res) => {
  const username = req.headers.username
  const toDate = req.body['ToDate']
  const fromDate = req.body['FromDate']

  StudentTaskModel.find({UserName: username, HomeWorkAssignDate: {$gte: new Date(toDate), $lte: new Date(fromDate)}}, (err, data) => {
    if (err) {
      res.status(400).json({ massage: "error", err });
    } else {
      res.json({ massage: "success", data });
    }
  })
}