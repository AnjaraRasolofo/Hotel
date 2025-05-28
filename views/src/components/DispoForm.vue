<template>
  <form @submit.prevent="searchRooms">
    <input type="date" v-model="from" required />
    <input type="date" v-model="to" required />

    <select v-model="type">
      <option value="">Tous les types</option>
      <option value="single">Single</option>
      <option value="double">Double</option>
      <option value="suite">Suite</option>
    </select>

    <button>Rechercher</button>

    <div v-if="rooms.length">
      <h2>Chambres disponibles</h2>
      <div v-for="room in rooms" :key="room._id">
        <h3>{{ room.name }}</h3>
        <p>{{ room.description }}</p>
        <p>{{ room.price }}€ / nuit</p>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import axios from '../axios'; // ton axios configuré avec le token

const from = ref('');
const to = ref('');
const type = ref('');
const rooms = ref([]);

const searchRooms = async () => {
  const response = await axios.get('/search', {
    params: {
      from: from.value,
      to: to.value,
      type: type.value,
    },
  });
  rooms.value = response.data;
};
</script>
