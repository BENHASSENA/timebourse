<template>
  <header>
    <section >
      <nav class="navbar-connexion">
        <router-link to="/">
          <img class="inline" src="../assets/images/logo-timebourse-red.png" alt="logo" height="50px"/>
        </router-link>
        
        <ul class="inline boxmenuburger" >
          <svg  @click="toggleMenuBurger()" class=burger version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="34px" height="27px" viewBox="0 0 34 27" enable-background="new 0 0 34 27" xml:space="preserve">
          <rect fill="#A90909" width="34" height="4"></rect>
          <rect y="11" fill="#A90909" width="34" height="4"></rect>
          <rect y="23" fill="#A90909" width="34" height="4"></rect>
        </svg>
          <router-link to="/">
            <li v-if="showMenuBurger">TimeBourse</li>
          </router-link>
          <router-link to="/fonctionnalites">
            <li v-if="showMenuBurger">Fonctionnalités</li>
          </router-link>
          <router-link to="/apropos">
            <li v-if="showMenuBurger">A propos</li>
          </router-link>
          <router-link to="/contact">
            <li v-if="showMenuBurger">Contact</li>
          </router-link>
          <router-link to="/inscription">
            <li v-if="showMenuBurger" class="inscription"> Inscription</li>
          </router-link>
          <li v-if="showMenuBurger">  
            <router-link to="/connexion">
            <button class="button">Connexion</button>
            </router-link>
          </li>
        </ul>
      </nav>
    </section>
  </header>
</template>

<script>

export default {
  data() {
    return {
      showMenuBurger: true,
    }
  },
  methods:{
    toggleMenuBurger() {
      this.showMenuBurger = !this.showMenuBurger
    }
  }

}

</script>

<style lang="scss" scoped>
$white: #fff;
$rouge: #A90909;
$bleu: #021F4D;
$yellow: #FFBE0C;
$backgroundgrey: #F9F9F7;
$grey: grey;


.burger{
  position: relative;
  bottom: 15px;
  left: 5px;


  @media screen and (min-width: 900px) {
    display: none;
  }
}

.boxmenuburger{

  @media screen and (max-width: 900px){
  position: relative;
    bottom: 60px;
    left: 100px;
  }
}

ul.inline{
  @media screen and (max-width: 900px) {
        margin: 0;
      }

}

.inline{

  li{
      @media screen and (max-width: 900px) {
        display: block;
        float: inherit;  
        position: relative;
        z-index: 10;
        margin: 0;
        padding-left: 0;
      }
  }

  .button{
    min-width: 50px;
    margin-top: 1rem;
  }

  
}

section{
   @media screen and (max-width: 900px) {
        float: inherit;  
      }

}


.navbar-connexion{
  margin-bottom: 2rem;  

}

.inscription{

  color: $rouge;
}

</style>
