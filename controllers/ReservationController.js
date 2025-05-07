const Reservation = require('../models/Reservation');
const Chambre = require('../models/Chambre');

exports.createReservation = async (req, res, next) => {
  const reservation = new Reservation({
    clientId: req.body.clientId,
    chambreId: req.body.chambreId,
    dateDebut: req.body.dateDebut,
    dateFin: req.body.dateFin,
    montant: req.body.montant
  });

  // Vérifie si la chambre est dispo
 
  let chambre = await Chambre.findById(req.body.chambreId);
  if (!chambre || !chambre.disponible) {
    return res.status(400).json({ message: 'Chambre non disponible.' });
  }

  // Mettre la chambre à indisponible
  chambre.disponible = false;
  await chambre.save();

  reservation.save().then(
    () => {
      res.status(201).json({
        message: 'Reservation crée avec succès!'
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

exports.modifyReservation = (req, res, next) => {
  const reservation = new Reservation({
    _id: req.params.id,
    clientId: req.body.clientId,
    chambreId: req.body.description,
    dateDebut: req.body.dateDebut,
    dateFin: req.body.dateFin,
    montant: req.body.montant
  });
  reservation.updateOne({_id: req.params.id}, reservation).then(
    () => {
      res.status(201).json({
        message: 'Reservation enregistré avec succès!'
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

exports.getOneReservation = (req, res, next) => {
  Reservation.findOne({
    _id: req.params.id
  }).then(
    (Reservation) => {
      res.status(200).json(Reservation);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
}

exports.deleteReservation = (req, res, next) => {
  Reservation.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Reservation supprimée avec succès!'
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

exports.getAllReservations = (req, res, next) => {
  Reservation.find().then(
    (Reservations) => {
      res.status(200).json(Reservations);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}