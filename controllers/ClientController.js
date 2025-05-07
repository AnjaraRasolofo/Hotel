const Client = require('../models/Client');

exports.createClient = (req, res, next) => {
  const client = new Client({
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    cin: req.body.cin,
    telephone: req.body.telephone,
    adresse: req.body.adresse,
  });
  client.save().then(
    () => {
      res.status(201).json({
        message: 'Client crée avec succès!'
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

exports.modifyClient = (req, res, next) => {
  const client = new Client({
    _id: req.params.id,
    nom: req.body.nom,
    prenom:req.body.prenom,
    email: req.body.email,
    cin: req.body.cin,
    telephone: req.body.telephone,
    adresse: req.body.adresse,
  });
  Client.updateOne({_id: req.params.id}, client).then(
    () => {
      res.status(201).json({
        message: 'Client modifié avec succès!'
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

exports.getOneClient = (req, res, next) => {
    Client.findOne({
    _id: req.params.id
  }).then(
    (client) => {
      res.status(200).json(client);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
}

exports.deleteClient = (req, res, next) => {
   console.log(req.params.id);
    Client.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Client supprimé!'
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

exports.getAllClients = (req, res, next) => {
    Client.find().then(
    (clients) => {
      res.status(200).json(clients);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}