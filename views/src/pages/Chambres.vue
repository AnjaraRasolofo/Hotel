<template>
    <h1>Nos Chambres</h1>
    <div class="cards-container">
        <Chambre v-for="chambre in chambres" :key="chambre._id" :chambre="chambre" />
    </div>
</template>

<script setup>
import Chambre from '../components/ChambreDetail.vue'
/*
const rooms = [
  { id: 1, name: 'Suite Deluxe', price: 120000, equipements: ["Wi-Fi", "TV", "Douche", "Climatisation"], disponible: true, photo: "https://via.placeholder.com/400x200?text=Deluxe" },
  { id: 2, name: 'Chambre Double', price: 80000, equipements: ["TV"], disponible: false, photo: 'https://via.placeholder.com/400x200?text=Rose' },
  { id: 2, name: 'Chambre Lavande', price: 35000, equipements: ["Wi-Fi", "Baignoire", "Vue jardin"], disponible: true, photo: 'https://via.placeholder.com/400x200?text=Lavande' },
]*/

import {ref, onMounted} from 'vue'
    import axios from 'axios'

    const chambres = ref([])
    const id = ref()

    onMounted(async () => {
        try {
            
            const response = await axios.get('http://localhost:3000/api/chambre')
            chambres.value = response.data
            console.log(chambres.value)
        }
        catch(error) {
            console.error('Erreur lors du chargement des clients :', error)
        }
    })

    const deleteChambre = async (idx) => {
    if (confirm("Voulez-vous vraiment supprimer cette chambre ?")) {
      try {
        await axios.delete(`http://localhost:3000/api/chambre/${idx}`);
        // Actualise la liste après suppression
        chambres.value = chambres.value.filter(c => c._id !== idx);
      } catch (error) {
        console.error("Erreur lors de la suppression :", error);
      }
    }
  }

</script>

<style>
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>