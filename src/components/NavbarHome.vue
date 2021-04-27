<template>
  <header>
    <section>
      <div class="navbar-connexion">
        <router-link to="/">
           <img class="inline" src="../assets/images/logo-timebourse-red.png" alt="logo" height="50px"/>
        </router-link>
        <ul class="inline">
          <router-link to="/">
            <li>TimeBourse</li>
          </router-link>
          <router-link to="/fonctionnalites">
            <li>Fonctionnalités</li>
          </router-link>
          <router-link to="/apropos">
          <li>A propos</li>
          </router-link>
          <router-link to="/contact">
            <li>Contact</li>
          </router-link>
          <router-link to="/inscription">
            <li class="inscription"> Inscription</li>
          </router-link>
          <li>  
            <router-link to="/connexion2">
            <button class="button">Connexion</button>
            </router-link>
          </li>
        </ul>
      </div>
    </section>
  </header>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
$white: #fff;
$rouge: #A90909;
$bleu: #021F4D;
$yellow: #FFBE0C;
$backgroundgrey: #F9F9F7;
$grey: grey;

.navbar-connexion{
  margin-bottom: 2rem;
}
.inscription{
  color: $rouge;
}

</style>
