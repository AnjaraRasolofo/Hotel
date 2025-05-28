const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//require('dotenv').config();

const app = express();
app.use(express.json());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/reservations')
    .then(() => 
        console.log('Connexion à MongoDB réussie !')
    )
    .catch(err => console.error('Erreur de connexion à MongoDB :', err));


app.use((req, res, next) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200); 
    }

    next();

  });

const chambreRoutes = require('./routes/chambreRoute');
const clientRoutes = require('./routes/clientRoute');
const reservationRoutes = require('./routes/reservationRoute');
const authRoutes = require('./routes/authRoute');
const indisponibiliteRoutes = require('./routes/indisponibiliteRoute');

app.use('/api/chambre', chambreRoutes);
app.use('/api/client', clientRoutes);
app.use('/api/reservation', reservationRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/indisponibilite', indisponibiliteRoutes);

module.exports = app;