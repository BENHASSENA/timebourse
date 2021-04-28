<template>
  <div id="settings">
    <SiteNav v-if="showNav" ></SiteNav>
    <div >
    <!-- titre du dashboard -->
    <h1 class="title1">Réglages</h1>
    <h2 class="title2">Personnalisez vos préférences</h2>
    <!-- barre de navigation du compte utilisateur -->

     <NavbarUser></NavbarUser>
    <!-- box settings -->
    <div class="containerboard">
      <div class="boxcontent-settings">
        <div class="boxleft">
          <div class="programme4">
            <div class="task">
              <div class="boxtime">
                <span class="picto"><img src="../assets/images/img-alarm-reglages.png" alt="alarm"/></span>
                <p class="totaltime">Rappels</p>
              </div>
            </div>
          </div>
          <div class="programme4">
            <div class="task">
              <div class="boxtime">
                <span class="picto"><img src="../assets/images/img-bell-reglages.png" alt="bell"/></span>
                 <p class="totaltime">Notifications</p>
              </div>
            </div>
          </div>
          <div class="programme4">
            <div class="task">
              <div class="boxtime">
                <span class="picto"><img src="../assets/images/img-dashboard-reglages.png" alt="dashboard"/></span>
                 <p class="totaltime">Thème couleur</p>
              </div>
            </div>
          </div>

          <div class="programme4">
            <div class="task">
              <div class="boxtime">
                <span class="picto"><img src="../assets/images/picto-mot-de-passe.png" alt="picto-mot-de-passe"/></span>
                <!-- <p class="totaltime"><a @click="udpdateProfile()">Réinitialiser le mot de passe</a></p> -->
                <p class="totaltime">Réinitialiser le mot de passe</p>
              </div>
            </div>
          </div>
        </div>
        <div class="boxright">
          <img id="inscription" src="../assets/images/img-reglages.png" alt="image femme qui regarde un tableau" width="400px"/>
        </div>
       
      </div>
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
  </div>
</template>

<script>

import { mapState } from 'vuex'
import  NavbarUser from '@/components/NavbarUser'
import SiteNav from '@/components/SiteNav'

export default {
  components: {
    NavbarUser,
    SiteNav,
  },
  name: 'Settings',
  data() {
    return {
      name: '',
      title: '',
      showSuccess: false
    }
  },
  computed: {
    ...mapState(['userProfile']),
    showNav() {
      return Object.keys(this.userProfile).length > 1
    },  
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
$error: #ef5777;
$success: #1abc9c;
$light: #F5F8FA;
$medium: #657786;
$dark: #34495E;
$white: #fff;
$rouge: #A90909;
$bleu: #021F4D;
$yellow: #FFBE0C;
$backgroundgrey: #F9F9F7;
$grey: grey;

#settings {

  .navbaruser{
      margin-bottom: 3rem;
  }

  .containerboard{
      
      .boxcontent-settings{
        justify-content: center;
        display: flex;
        margin: 0 auto;

         @media screen and (max-width: 690px) {
          display: block;
          justify-content: center;
          margin: 0 auto;
          margin-top: 2rem;
        }
      }

      .boxleft{
        margin: 3% ;

        .programme4{
          height: 3rem;
          padding: 1rem ;
          box-sizing: border-box;

          .task{
           padding: 0;
          }
        }

      }

      .boxright{
        margin: 3% ;
        @media screen and (max-width: 690px) {
          margin-top: 5rem;
        }

      }

  }
     
}





</style>


