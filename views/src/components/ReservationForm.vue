<template>
  <div>
    <h3>Réserver cette chambre</h3>
    <form @submit.prevent="submitReservation">
      
      <h3>Choisir un client</h3>
      <select v-model="selectedClientId">
        <option disabled value="">-- Sélectionnez un client --</option>
        <option v-for="client in clients" :key="client.id" :value="client._id">
          {{ client.nom }} {{ client.prenom }}
        </option>
      </select>

      <div v-if="selectedClient" class="client-card">
        <h4>Informations du client</h4>
        <p><strong>Nom :</strong> {{ selectedClient.nom }}</p>
        <p><strong>Prénom :</strong> {{ selectedClient.prenom }}</p>
        <p><strong>Email :</strong> {{ selectedClient.email }}</p>
        <p><strong>Téléphone :</strong> {{ selectedClient.telephone }}</p>
        <p><strong>CIN :</strong> {{ selectedClient.cin }}</p>
        <p><strong>Adresse :</strong> {{ selectedClient.adresse }}</p>
      </div>

      <h4>Dates de réservation</h4>
      <label>Date d’arrivée :</label>
      <input type="date" v-model="dateDebut" required />

      <label>Date de départ :</label>
      <input type="date" v-model="dateFin" required />

      <button type="submit">Réserver</button>
    </form>

    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script setup>

import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const clients = ref([])
const selectedClientId = ref('')
const dateDebut = ref()
const dateFin = ref()
const montant = ref()
const message = ref('')

// Props
const props = defineProps({
  chambre: Object
})

const selectedClient = computed(() => {
  return clients.value.find(c => c._id === selectedClientId.value)
})

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/client')
    clients.value = res.data
  } catch (err) {
    console.error("Erreur lors du chargement des clients :", err)
  }
})

async function submitReservation() {
  if (!selectedClient.value) {
    message.value = "Veuillez sélectionner un client.";
    return;
  }

  const reservation = {
    chambreId: props.chambre._id,           // ID MongoDB de la chambre
    clientId: selectedClient.value._id,     // ID MongoDB du client
    dateDebut: dateDebut.value,
    dateFin: dateFin.value,
    //status: status,
    montant: props.chambre.prix_par_nuit
  };

  try {
    console.log(reservation)
    await axios.post('http://localhost:3000/api/reservation', reservation);
    message.value = "Réservation enregistrée avec succès !";

    // Reset du formulaire
    dateDebut.value = '';
    dateFin.value = '';
    selectedClientId.value = '';
  } catch (error) {
    console.error("Erreur lors de l'enregistrement :", error);
    message.value = "Erreur lors de l'enregistrement de la réservation.";
  }
}

</script>

<style scoped>
.client-card {
  margin-top: 1em;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #f9f9f9;
}
</style>
