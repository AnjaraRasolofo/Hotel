<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Login from './pages/login.vue'
  import Home from './pages/Home.vue'

  const requireAuth = (to, from, next) => {
  
  const token = localStorage.getItem('token');
    if (!token) { 
    } else {
      next();
    }
  };  

  const routes = [
    { path: '/login', component: Login },
    //{ path: '/', component: Home, beforeEnter: requireAuth },
  ];

</script>

<template>
  <header class="py-3 text-center">
  <h1 class="mb-0">
    <RouterLink to="/" class="text-decoration-none text-dark">RANDRANA HOTEL</RouterLink>
  </h1>

    <!--div class="wrapper">
      <nav>
        <RouterLink to="/clients">Clients</RouterLink>
        <RouterLink to="/chambres">Chambres</RouterLink>
      </nav>
    </div>-->
  </header>

  <RouterView />
</template>

<style scoped>
.wrapper {
  margin-left: 25px;
}
header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: mediumseagreen;
}

header h1 {
  margin: 0 auto;
  text-align: center;
  color: white; /* facultatif */
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: flex;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
