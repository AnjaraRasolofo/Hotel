<template>
    <h1>Nos Clients</h1>
    <router-link to="/client">Nouveau client</router-link>
    <label for="">Rechercher un Client: </label>
    <input type="text" v-model="name" @input="searchClient" placeholder="Rechercher..." class="search-box" />
    <hr> 
    <div class="container">
        <table>
            <tr>
                <th>Nom</th>
                <th>Numéro CIN</th>
                <th>Email</th>
                <th>Adresse</th>
                <th>Contact</th>
                <th>Actions</th>
            </tr>
            <tr v-for="client in clients" :key="client._id">
                <td>{{client.nom}} {{ client.prenom }}</td>
                <td>{{client.cin}}</td>
                <td>{{client.email}}</td>
                <td>{{client.adresse}}</td>
                <td>{{client.telephone}}</td>
                <td><button @click="deleteClient(client._id)">Supprimer</button></td>
            </tr>
        </table>
    </div>
</template>

<script setup>

    import {ref, onMounted} from 'vue'
    import axios from 'axios'

    const clients = ref([])
    const id = ref()
    const name = ref('')

    onMounted(() => {
        fetchAllClient();
    })

    const fetchAllClient = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/client')
            clients.value = response.data
        } catch (error) {
            console.error('Erreur chargement total clients :', error)
        }
    }

    const searchClient = async() => {
        
        try {
            const response = await axios.get(`http://localhost:3000/api/client/${name.value}`)
            clients.value = response.data

        }
        catch(error) {
            console.error('Erreur lors du chargement des clients :', error)
        }
    } 

    const deleteClient = async (idx) => {
    if (confirm("Voulez-vous vraiment supprimer ce client ?")) {
      try {
        await axios.delete(`http://localhost:3000/api/client/${idx}`);
        // Actualise la liste après suppression
        clients.value = clients.value.filter(c => c._id !== idx);
      } catch (error) {
        console.error("Erreur lors de la suppression :", error);
      }
    }
  }

</script>

<style>

    .container {
        background-color: none;
    }

    .search-box {
        padding: 6px;
        margin-bottom: 10px;
        width: 200px;
    }

</style>