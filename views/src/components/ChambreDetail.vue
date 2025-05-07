<template>
  
    <div class="card">
      <h2>{{ chambre.nom }}</h2>
      <p>Prix: {{ chambre.prix_par_nuit }}Ar / nuit</p>
      
      <ul class="equipements">
        <li v-for="equipement in chambre.equipements" :key="equipement" class="badge">
          {{ equipement }}
        </li>
      </ul>

      <p :class="chambre.disponible ? 'available' : 'unavailable'">
        {{ chambre.disponible ? 'Disponible' : 'Indisponible' }}
      </p>
      <router-link :to="chambre.disponible ? `/chambre/${chambre._id}` : null" :class="{ disabled: !chambre.disponible}">Réserver</router-link>
    </div>
  </template>
  
  <script setup>
    defineProps(['chambre'])
  </script>
  
  <style>

.card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.disabled {
    pointer-events: none;
    opacity: 0.5;
    cursor: not-allowed;
  }
    .card img {
      width: 100%;
      border-radius: 8px;
    }

  .equipements {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.badge {
  background-color: #72a2d6; /* Couleur principale */
  color: white;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 0.9rem;
}
    .available {
      color: green;
    }
    .unavailable {
      color: red;
    }
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>