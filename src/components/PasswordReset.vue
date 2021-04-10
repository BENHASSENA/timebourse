<template>
  <div class="modal">
    <div class="modal-content">
      <div @click="$emit('close')" class="close">fermer</div>
      <h3>Réinitialiser le mot de passe</h3>
      <div v-if="!showSuccess">
        <p>Entrer votre adresse mail pour réinitialiser votre mot de passe</p>
        <form @submit.prevent>
          <input v-model.trim="email" type="email" placeholder="Adresse mail" />
        </form>
        <p v-if="errorMsg !== ''" class="error">{{ errorMsg }}</p>
        <button @click="resetPassword()" class="button">Réinitialiser</button>
      </div>
      <p v-else>Success! Check your email for a reset link.</p>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      email: '',
      showSuccess: false,
      errorMsg: ''
    }
  },
  methods: {
    async resetPassword() {
      this.errorMsg = ''
      
      // try {
      //   await auth.sendPasswordResetEmail(this.email)
      //   this.showSuccess = true
      // } catch (err) {
      //   this.errorMsg = err.message
      // }
    }
  }
}
</script>