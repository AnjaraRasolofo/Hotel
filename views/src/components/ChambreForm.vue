<template>
  <div class="container mt-5">
    <div class="card shadow-sm">
      <div class="card-header bg-primary text-white">
        <h5 class="mb-0">Ajouter une chambre</h5>
      </div>
      <div class="card-body">
        <form @submit.prevent="soumettreFormulaire">
          <div class="mb-3">
            <label class="form-label">Titre</label>
            <input v-model="titre" type="text" class="form-control" required />
          </div>

          <div class="mb-3">
            <label class="form-label">Description</label>
            <textarea v-model="description" class="form-control" rows="3" required></textarea>
          </div>

          <div class="mb-3">
            <label class="form-label">Prix (€)</label>
            <input v-model="prix" type="number" class="form-control" required />
          </div>

          <div class="mb-3">
            <label class="form-label">Image</label>
            <input type="file" class="form-control" @change="handleFileUpload" required />
          </div>

          <div v-if="preview" class="mb-3">
            <img :src="preview" alt="Preview" class="img-thumbnail" style="max-height: 200px;" />
          </div>

          <button type="submit" class="btn btn-success">Ajouter</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const titre = ref('');
const description = ref('');
const prix = ref('');
const image = ref(null);
const preview = ref(null);

const handleFileUpload = (e) => {
  image.value = e.target.files[0];
  preview.value = URL.createObjectURL(image.value);
};

const soumettreFormulaire = async () => {
  if (!image.value) return;

  try {
    // 1. Upload image
    const formData = new FormData();
    formData.append('image', image.value);

    const uploadRes = await axios.post('http://localhost:3000/api/chambres/upload', formData);
    const imagePath = uploadRes.data.path;

    // 2. Créer chambre
    await axios.post('http://localhost:5000/api/chambres', {
      titre: titre.value,
      description: description.value,
      prix: prix.value,
      image: imagePath
    });

    alert('Chambre ajoutée avec succès');
    // Réinitialiser
    titre.value = '';
    description.value = '';
    prix.value = '';
    image.value = null;
    preview.value = null;
  } catch (err) {
    console.error(err);
    alert('Erreur lors de l’ajout');
  }
};
</script>


<style>

    .container {
        background-color: none;
    }

</style>