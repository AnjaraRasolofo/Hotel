<template>
  
  <div v-if="chambre">
    
    <h1>{{ chambre.nom }}</h1>
    <p>Prix : {{ chambre.prix_par_nuit }}€</p>

    <ul class="equipements">
      <li v-for="equipement in chambre.equipements" :key="equipement" class="badge">
        {{ equipement }}
      </li>
    </ul>

    <ReservationForm :chambre="chambre" :client="client"/>
  </div>

  <div v-else>
    <p>Chargement...</p>
  </div>

</template>

<script setup>

import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ReservationForm from '../components/ReservationForm.vue'
import axios from 'axios'

const route = useRoute()
const chambre = ref(null)

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:3000/api/chambre/${route.params.id}`)
    chambre.value = response.data
  } catch (error) {
    console.error('Erreur lors du chargement de la chambre :', error)
  }
})
</script>

<style>
  
  .equipements {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    list-style: none;
    padding: 0;
    margin: 10px 0;
  }

  .badge {
    background-color: #007bff;
    color: white;
    padding: 5px 10px;
    border-radius: 12px;
    font-size: 0.9rem;
  }
  
</style>
