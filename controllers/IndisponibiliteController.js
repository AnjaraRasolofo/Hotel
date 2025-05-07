const Indisponibilite = require('../models/Indisponibilite');

exports.createIndisponibilite = (req, res, next) => {
  const Indisponibilite = new Indisponibilite({
    clientId: req.body.name,
    chambreId: req.body.description,
    dateDebut: req.body.price,
    dateFin: req.body.availableDate,
    
  });
  Indisponibilite.save().then(
    () => {
      res.status(201).json({
        message: 'Indisponibilite crée avec succès!'
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

exports.modifyIndisponibilite = (req, res, next) => {
  const Indisponibilite = new Indisponibilite({
    _id: req.params.id,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    availableDate: req.body.availableDate
  });
  Indisponibilite.updateOne({_id: req.params.id}, Indisponibilite).then(
    () => {
      res.status(201).json({
        message: 'Indisponibilite enregistré avec succès!'
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

exports.getOneIndisponibilite = (req, res, next) => {
  Indisponibilite.findOne({
    _id: req.params.id
  }).then(
    (Indisponibilite) => {
      res.status(200).json(Indisponibilite);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
}

exports.deleteIndisponibilite = (req, res, next) => {
  Indisponibilite.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Indisponibilite supprimée avec succès!'
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

exports.getAllIndisponibilites = (req, res, next) => {
  Indisponibilite.find().then(
    (Indisponibilites) => {
      res.status(200).json(Indisponibilites);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}