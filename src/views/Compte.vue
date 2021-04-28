<template>
  <div id="settings">
    <SiteNav v-if="showNav" ></SiteNav>
    <div >
    <!-- titre du dashboard -->
    <h1 class="title1">Compte</h1>
    <h2 class="title2">Informations du compte</h2>
    <!-- barre de navigation du compte utilisateur -->
    <!-- <div class="navbaruser">
      <li>
        <router-link to="/dashboard">
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
          <img src="../assets/images/picto-compte.png" alt="picto-compte"/>
        </router-link>
      </li>
      <li>
        <router-link to="/settings">
          <img src="../assets/images/picto-settings.png" alt="picto-settings"/>
        </router-link>
      </li>
    </div> -->
     <NavbarUser></NavbarUser>
    <!-- box settings -->
    <div class="containerboard">
      <div class="boxcontent-settings">
        <!-- <div class="description">
          <p class="totaltime">Avatar</p>
          <p class="totaltime">Nom d'utilisateur</p>
          <p class="totaltime">Compte</p>
          <p class="totaltime">Mot de passe</p>
        </div> -->
        <div class="boxleft">
          <div class="programme4">
            <div class="task">
              <div class="boxtime">
                <span class="picto"><img src="../assets/images/picto-profil.png" alt="picto-profil"/></span>
                <p>Télécharger une photo de profil</p>
              </div>
            </div>
          </div>
          <div class="programme4">
            <div class="task">
              <div class="boxtime">
                 <p>Nom de l'utilisateur</p>
              </div>
            </div>
          </div>
          <div class="programme4">
            <div class="task">
              <div class="boxtime">
                 <p>email du compte</p>
              </div>
            </div>
          </div>

          <div class="programme4">
            <div class="task">
              <div class="boxtime">
                <p>Modifier le mot de passe</p>
              </div>
            </div>
          </div>
        </div>
          
        <!-- <div class="boxleft2">
         <div class="flex">
          <p class="totaltime">Avatar</p>
          <div class="programme4">
            <div class="task">
              <div class="boxtime">
                <span class="picto"><img src="../assets/images/picto-profil.png" alt="profil"/></span>
                <p >Télécharger une image de profil</p>
              </div>
            </div>
          </div>
         </div>
         <div class="flex">
            <p class="totaltime">Nom</p>
            <div class="programme4">
              <div class="task">
                <div class="boxtime">
                  <p>Nom de l'utilisateur</p>
                </div>
              </div>
            </div>
         </div>
          <div class="flex">
            <p class="totaltime">Compte</p>
            <div class="box-count">
              <div class="task">
                <div class="boxtime">
                  <p>adresse mail de l'utilisateur</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex">
            <p class="totaltime">Mot de passe</p>
            <div class="box-count">
              <div class="task">
                <div class="boxtime">
                  <p>Modifier le mot de passe</p>
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <div class="boxright">
          <img id="inscription" src="../assets/images/img-compte.png" alt="image femme qui regarde un tableau" width="300px"/>
        </div>
       
      </div>
    </div>
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

    padding-top: 5rem;
      
      .boxcontent-settings{
        justify-content: center;
        display: flex;


        @media screen and (max-width: 690px) {
          display: block;
          justify-content: center;
          margin: 0 auto;
        }



        .boxtime{
          align-items: center;
        }
      }
      


      .boxright{
        margin: 3% ;
        padding-top: 4rem;

      }

  }
}

</style>


