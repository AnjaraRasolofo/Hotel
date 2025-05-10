FROM node:12.4

# Crée le dossier de travail dans le conteneur
WORKDIR /usr/src/app

# Copie les fichiers de dépendances
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie tout le reste de l'application
COPY . .

# Expose le port 8080
EXPOSE 8080

# Commande à exécuter au démarrage du conteneur 
CMD ["npm", "start"]
