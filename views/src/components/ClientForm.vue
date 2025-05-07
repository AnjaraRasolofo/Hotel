<template>
    <h1>Clients</h1>
    <hr>
    <div class="container">
        <form @submit.prevent="submitClient">
            <label for="">Prénom: </label>
            <input type="text" v-model="client.prenom" required><br>
            <label for="">Nom:</label>
            <input type="text" v-model="client.nom" required><br>
            <label for="">Email:</label>
            <input type="text" v-model="client.email"><br>
            <label for="">Numéro CIN:</label>
            <input type="text" v-model="client.cin"><br>
            <label for="">Téléphone:</label>
            <input type="text" v-model="client.telephone"><br>
            <label for="">Adresse:</label>
            <input type="text" v-model="client.adresse"><br>
            <input v-if="cr" type="submit" value="Enregistrer">
            <button v-else="!cr" @click="updateClient">Mettre à jour</button>
        </form>
        <p v-if="message">{{ message }}</p>
    </div>
</template>

<script setup>
    
    import { ref } from 'vue'
    import axios from 'axios'
    import { useRouter } from 'vue-router'

    const router = useRouter() 

    const props = defineProps(['client'])

    const client = ref({
        nom: '',
        prenom: '',
        cin: '',
        email: '',
        adresse: '',
        telephone: ''
    })

    const message = ref('')

    const submitClient = async () => {
        try {
            console.log(client.value) 
            await axios.post('http://localhost:3000/api/client', client.value)
            message.value = 'Client enregistré avec succès !'
            router.push('/clients') // ou vers la page liste client
        } catch (error) {
            console.error('Erreur:', error)
            message.value = 'Erreur lors de l’enregistrement.'
        }
    }

    const loadClient = async (id) => {
        const response = await axios.get(`http://localhost:3000/api/client/${id}`);
        this.client = response.data;
    }

    const updateClient = async () => {
        try {
        await axios.put(`http://localhost:3000/api/client/${this.client.id}`, this.client);
        alert("Client mis à jour avec succès !");
        } catch (error) {
        console.error("Erreur mise à jour :", error);
        }
    }


</script>
