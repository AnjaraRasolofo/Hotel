<template>
    <div>
      <h3>Réserver cette chambre</h3>
      <form @submit.prevent="submitReservation">
        <label>Date d’arrivée :</label>
        <input type="date" v-model="checkIn" required />
        <label>Date de départ :</label>
        <input type="date" v-model="checkOut" required />
        <button type="submit" class="btn btn-outline-primary btn-sm">Réserver</button>
      </form>
      <p v-if="message">{{ message }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const props = defineProps(['room'])
  
  const checkIn = ref('')
  const checkOut = ref('')
  const message = ref('')
  
  function submitReservation() {
    const reservation = {
      roomId: props.room.id,
      checkIn: checkIn.value,
      checkOut: checkOut.value,
    }
  
    // Stockage temporaire en local
    const existing = JSON.parse(localStorage.getItem('reservations') || '[]')
    existing.push(reservation)
    localStorage.setItem('reservations', JSON.stringify(existing))
  
    message.value = "Réservation enregistrée !"
  }
  </script>
  