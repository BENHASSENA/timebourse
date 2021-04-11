<template>
  <div id="login">
    <PasswordReset v-if="showPasswordReset" @close="togglePasswordReset()"></PasswordReset>
    <section>
      <div class="col1">
        <img src="../assets/images/logo-timebourse-red.png" alt="logo" width="100px"/>
        <h1>TimeBourse</h1>
        <p>Bienvenue sur l'application qui vous fera gagner du temps  </p>
        <img id="inscription" src="../assets/images/img-inscription.png" alt="image homme qui s'inscrit" width="300px"/>
      </div>
      <div :class="{ 'signup-form': !showLoginForm }" class="col2">
        <form v-if="showLoginForm" @submit.prevent>
          <h1>Connexion</h1>
          <div>
            <label for="email1"></label>
            <input v-model.trim="loginForm.email" type="text" placeholder="Adresse mail" id="email1" />
          </div>
          <div>
            <label for="password1"></label>
            <input v-model.trim="loginForm.password" type="password" placeholder="Mot de passe" id="password1" />
          </div>
          <button @click="login()" class="button">Connexion</button>
          <div class="extras">
            <a @click="togglePasswordReset()">Mot de passe oublié</a>
            <a @click="toggleForm()">Créer un compte</a>
          </div>
        </form>
        <form v-else @submit.prevent>
          <h1>Inscrivez-vous</h1>
          <div>
            <label for="username"></label>
            <input v-model.trim="signupForm.username" type="text" placeholder="Nom ou Pseudo" id="username" />
          </div>

          <div>
            <label for="email2"></label>
            <input v-model.trim="signupForm.email" type="text" placeholder="Adresse mail" id="email2" />
          </div>
          <div>
            <label for="password2"></label>
            <input v-model.trim="signupForm.password" type="password" placeholder="Mot de passe" id="password2" />
          </div>
          <button @click="signup()" class="button">M'inscrire</button>
          <a @click="toggleForm()">Revenir à la connexion</a>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import PasswordReset from '@/components/PasswordReset'

export default {
  components: {
    PasswordReset
  },
  data() {
    return {
      showLoginForm: true,
      showPasswordReset: false,
      loginForm: {
        email: '',
        password: ''
      },
      signupForm: {
        username: '',
        email: '',
        password: ''
      },
    }
  },
  methods: {
    toggleForm() {
      this.showLoginForm = !this.showLoginForm
    },
    togglePasswordReset(){
      this.showPasswordReset = !this.showPasswordReset
    },
    login() {
      this.$store.dispatch('login', {
        email: this.loginForm.email,
        password: this.loginForm.password
      })
    },
    signup() {
      this.$store.dispatch('signupStore', {
        username: this.signupForm.username,
        email: this.signupForm.email,
        password: this.signupForm.password,
      } )
    },
  }
}
</script>