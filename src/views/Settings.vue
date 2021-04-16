<template>
  <section id="settings">
    <div class="col1">
   <!-- titre du dashboard -->
    <h1 class="title1">Réglages</h1>
    <h2 class="title2">Personnalisez vos préférences</h2>
    <!-- barre de navigation du dashboard -->
    <div class="navbaruser">
      <li>
        <router-link to="/">
          <img src="../assets/images/picto-dashboard.png" alt="picto-dashboard"/>
        </router-link>
      </li>
      <li>
        <router-link to="/tasks">
          <img class="en-cours" src="../assets/images/picto-tasks.png" alt="picto-tasks"/>
        </router-link>
      </li>
      <li>
        <router-link to="/activities">
          <img class="en-cours" src="../assets/images/picto-activities.png" alt="picto-activities"/>
        </router-link>
      </li>
      <li>
        <router-link to="/statistiques">
          <img class="en-cours" src="../assets/images/picto-statistiques.png" alt="picto-statistiques"/>
        </router-link>
      </li>
      <li>
        <router-link to="/rapports">
          <img class="en-cours" src="../assets/images/picto-rapports.png" alt="picto-rapports"/>
        </router-link>
      </li>
      <li>
        <router-link to="/objectifs">
          <img class="en-cours" src="../assets/images/picto-goals.png" alt="picto-goals"/>
        </router-link>
      </li>
      <li>
        <router-link to="/compte">
          <img class="en-cours" src="../assets/images/picto-compte.png" alt="picto-compte"/>
        </router-link>
      </li>
      <li>
        <router-link to="/settings">
          <img class="en-cours" src="../assets/images/picto-settings.png" alt="picto-settings"/>
        </router-link>
      </li>
    </div>
    <div class="containerboard">
      <div class="programme4">
        <div class="task">
          <div class="boxtime">
            <span class="picto"><img src="../assets/images/picto-mot-de-passe.png" alt="picto-mot-de-passe"/></span>
            <p class="totaltime"><a @click="udpdateProfile()">Réinitialiser le mot de passe</a></p>
          </div>
        </div>
      </div>

      <img id="inscription" src="../assets/images/img-reglages.png" alt="image homme qui s'inscrit" width="300px"/>
    </div>




<!-- 
      <transition name="fade">
        <p v-if="showSuccess" class="success">Mot de passe réinitialiser</p>
      </transition>

      <form @submit.prevent>
        <label for="name">Name</label>
        <input v-model.trim="name" type="text" :placeholder="userProfile.name" id="name" />

        <label for="title">Job Title</label>
        <input v-model.trim="title" type="text" :placeholder="userProfile.title" id="title" />

        <button @click="updateProfile()" class="button">Mise à jour du mot de passe</button>
      </form> -->
    </div>
  </section>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Settings',
  data() {
    return {
      name: '',
      title: '',
      showSuccess: false
    }
  },
  computed: {
    ...mapState(['userProfile'])
  },
  methods: {
    updateProfile() {
      
    this.$store.dispatch('updateProfile', {
      name: this.name !== '' ? this.name : this.userProfile.name,
      title: this.title !== '' ? this.title : this.userProfile.title
    })

    this.name = ''
    this.title = ''

    this.showSuccess = true

    setTimeout(() => {
      this.showSuccess = false
    }, 2000)
}
  }
}

</script>

<style lang="scss" scoped>

form{
  margin: 0 auto;
}

</style>