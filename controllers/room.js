const Room = require('../models/Room');

exports.createRoom = (req, res, next) => {
  const room = new Room({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    availableDate: req.body.availableDate
  });
  thing.save().then(
    () => {
      res.status(201).json({
        message: 'Room saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}

exports.modifyRoom = (req, res, next) => {
  const room = new Room({
    _id: req.params.id,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    availableDate: req.body.availableDate
  });
  Room.updateOne({_id: req.params.id}, room).then(
    () => {
      res.status(201).json({
        message: 'Room updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}

exports.getOneRoom = (req, res, next) => {
  Room.findOne({
    _id: req.params.id
  }).then(
    (thing) => {
      res.status(200).json(room);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
}

exports.deleteRoom = (req, res, next) => {
  Room.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}

exports.getAllRooms = (req, res, next) => {
  Room.find().then(
    (rooms) => {
      res.status(200).json(rooms);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}