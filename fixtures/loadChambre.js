// fixtures/chambres.js
const mongoose = require('mongoose');
const Chambre = require('../models/Chambre');
const { faker } = require('@faker-js/faker');

mongoose.connect('mongodb://localhost:27017/reservations', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const types = ['simple', 'double', 'suite', 'familiale', 'dortoir'];

async function seedChambres() {
  await Chambre.deleteMany({}); // Nettoie les anciennes

  const chambres = [];
  const equipementsList = ['Wi-Fi', 'TV', 'Climatisation', 'Minibar', 'Sèche-cheveux', 'Coffre-fort'];

  for (let i = 1; i <= 30; i++) {
    chambres.push({
      name: 'Chambre' + i,
      description: faker.lorem.sentences(2),
      type: faker.helpers.arrayElement(types),
      capacite: faker.number.int({ min: 1, max: 5 }),
      prix_par_nuit: faker.number.int({ min: 20000, max: 200000 }),
      photo: faker.image.urlPicsumPhotos({ width: 640, height: 480 }),
      disponible: faker.datatype.boolean(),
      equipements: faker.helpers.arrayElements(equipementsList, faker.number.int({ min: 2, max: 5 }))
    });
  }

  await Chambre.insertMany(chambres);
  console.log('✅ 30 chambres ajoutées avec succès !');
  mongoose.disconnect();
}

seedChambres();
