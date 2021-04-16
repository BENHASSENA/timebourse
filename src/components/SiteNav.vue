<template>
  <header>
    <section>
      <div class="navbar-deconnexion">
        <router-link to="/">
           <img src="../assets/images/logo-timebourse-red.png" alt="logo" height="50px"/>
        </router-link>
        <ul class="inline">
          <!-- <li>
              <input @click="search()" class="button2" placeholder="Rechercher"/>
          </li> -->
          <li>
              <button @click="logout()" class="button">Déconnexion</button>
          </li>
        </ul>
      </div>
    </section>
  </header>
</template>

<script>

export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
}

</script>
