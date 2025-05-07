const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const Client = require('../models/Client');

const MONGO_URI = 'mongodb://localhost:27017/reservations';

async function loadClients() {
  await mongoose.connect(MONGO_URI);
  console.log('Connected to MongoDB');

  await Client.deleteMany({});
  console.log('Anciennes données supprimées');

  const clients = [];

  for (let i = 0; i < 50; i++) {
    clients.push({
      nom: faker.name.lastName(),
      prenom: faker.name.firstName(),
      email: faker.internet.email(),
      cin: faker.string.alphanumeric(8).toUpperCase(),
      telephone: faker.phone.number('+2126########'),
      adresse: faker.location.streetAddress(),
    });
  }

  await Client.insertMany(clients);
  console.log('50 clients insérés avec succès');

  await mongoose.disconnect();
}

loadClients().catch(console.error);