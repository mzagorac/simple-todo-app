const TaskModel = require("../models/Task");

const getAllTasks = (req, res) => {
  console.log("GOT REQ", req.body);
  TaskModel.find()
    .exec()
    .then(data => {
      res.send(data);
    })
    .catch(err => console.log("Error fetching data", err));
};

const getTask = (req, res) => {
  const id = req.params.id;
  TaskModel.findById(id)
    .exec()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(401).send("Unable to find task");
    });
};

const createTask = (req, res) => {
  const task = new TaskModel({
    text: req.body.text
  });
  task.save(function(err, data) {
    if (err) return res.status(501).send("Unable to save task");
    res.status(200).send(data);
  });
};

const editTask = (req, res) => {
  const id = req.params.id;
  TaskModel.findByIdAndUpdate(
    id,
    req.body,
    {
      new: true
    },
    (err, data) => {
      if (err) return res.status(501).send("Unable to edit task");
      res.status(200).send(data);
    }
  );
};

const deleteTask = (req, res) => {
  console.log("INSIDE DELETE");
  const id = req.params.id;
  TaskModel.findByIdAndDelete(id, (err, data) => {
    if (err) return res.status(401).send("Unable to delete task");
    res.send(data);
  });
};

module.exports.getAll = getAllTasks;
module.exports.get = getTask;
module.exports.create = createTask;
module.exports.edit = editTask;
module.exports.delete = deleteTask;
