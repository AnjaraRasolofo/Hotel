<template>
  <div class="container mt-5">
    <div class="row align-items-center mb-5">
      <div class="col-md-6">
        <h1 class="display-5">Réservez votre chambre d'hôtel idéale</h1>
        <p class="lead">Découvrez les meilleures offres, choisissez la chambre parfaite et réservez en quelques clics.</p>
        <router-link to="/chambres" class="btn btn-primary btn-lg">Voir les chambres</router-link>
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-4 text-center">
        <!--<img src="https://source.unsplash.com/600x400/?hotel-room" alt="Chambre d'hôtel" class="img-fluid rounded">-->
         <div class="card shadow-sm">
          <div class="card-header bg-secondary text-white">
            <h5 class="mb-0">Entrez votre Nom ou N° de téléphone ou Email</h5>
          </div>
          <div class="card-body">
            <form @submit.prevent="rechercherClient">
              <div class="input-group">
                <input
                  v-model="termeRecherche"
                  type="text"
                  class="form-control"
                  placeholder="Nom, téléphone ou email"
                />
                <button class="btn btn-primary" type="submit">Rechercher</button>
              </div>
            </form>
          </div>
          </div>

      </div>
    </div>

    <h2 class="mb-4">Chambres disponibles</h2>
    <div class="cards-container">
        <Chambre v-for="chambre in chambres" :key="chambre._id" :chambre="chambre" />
    </div>

  </div>
</template>

<script setup>

    import Chambre from '../components/ChambreDetail.vue'
    import {ref, onMounted} from 'vue'
    import axios from 'axios'

    const chambres = ref([])
    const id = ref()

    onMounted(async () => {
            try {
                
                const response = await axios.get('http://localhost:3000/api/chambre')
                chambres.value = response.data
                //console.log(chambres.value)
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
        body {
            background-color: #f8f9fa;
        }

        .cards-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            padding: 20px;
        }
    </style>
