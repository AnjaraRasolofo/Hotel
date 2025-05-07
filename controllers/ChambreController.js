const Chambre = require('../models/Chambre');

exports.createChambre = (req, res, next) => {
  const chambre = new Chambre({
    nom: req.body.nom,
    description: req.body.description,
    prix_par_nuit: req.body.prix_par_nuit,
    capacite: req.body.capacite,
    photo: req.body.photo,
    type: req.body.type,
    disponible: req.body.disponible
  });
  chambre.save().then(
    () => {
      res.status(201).json({
        message: 'Chambre crée avec succès!'
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

exports.modifyChambre = (req, res, next) => {
  const chambre = new Chambre({
    _id: req.params.id,
    nom: req.body.nom,
    description: req.body.description,
    prix_par_nuit: req.body.prix_par_nuit,
    capacite: req.body.capacite,
    photo: req.body.photo,
    disponible: req.body.disponible
  });
  Chambre.updateOne({_id: req.params.id}, chambre).then(
    () => {
      res.status(201).json({
        message: 'Chambre enregistré avec succès!'
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

exports.getOneChambre = (req, res, next) => {
  Chambre.findOne({
    _id: req.params.id
  }).then(
    (chambre) => {
      res.status(200).json(chambre);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
}

exports.deleteChambre = (req, res, next) => {
  Chambre.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Chambre supprimée avec succès!'
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

exports.getAllChambres = (req, res, next) => {
  Chambre.find().then(
    (chambres) => {
      res.status(200).json(chambres);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}