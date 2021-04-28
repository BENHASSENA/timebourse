<template>
  <div id="contact"> 
    <NavbarHome class="navbar-home"></NavbarHome>
    <!-- titre page accueil -->
    <h1 class="title1">Connexion</h1>
    <h2 class="title2">Le temps c'est de l'argent</h2>
    <!-- SECTION 1 -->
    <div class="section1">
        <div class="circle"></div>
        <div class="box-contact">  
            <div class="left">
                <img class="before-footer" src="../assets/images/img-connexion-1.png" alt="inscription" width="250px"/>
            </div>
            <div class="center">
                <form @submit.prevent>
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
                    </div>
                </form>
            </div>
            <div class="right before-footer">
                <img class="before-footer" src="../assets/images/img-connexion-2.png" alt="inscription" width="250px"/>
            </div>
        </div>
        <div class="circle2"></div>

    </div>
    <!-- FOOTER -->
    <Footer/>
  </div>
</template>

<script>
import  NavbarHome from '@/components/NavbarHome'
import  Footer from '@/components/Footer'

export default {
  components: {
    NavbarHome, 
    Footer
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
   login() {
      this.$store.dispatch('login', {
        email: this.loginForm.email,
        password: this.loginForm.password
      })
    //   this.$store.push('vous etes bien inscrit')
    },
  }
}
</script>

<style lang="scss" scoped>
$dark: #34495E;
$white: #fff;
$rouge: #A90909;
$bleu: #021F4D;
$yellow: #FFBE0C;
$backgroundgrey: #F9F9F7;
$grey: grey;

.navbar-home{
    margin-bottom: 2rem;
}

.section1{
    .circle{
        background-color: $rouge;
        width:30px;
        height: 30px;
        margin-left: 15rem ;
        position: relative;
        @media screen and (max-width: 900px) {
        margin-top: 5rem ;
        position: relative;
        }

    }

    .box-contact{
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        margin: 5rem;
        @media screen and (max-width: 900px) {
            display: block;
        }
        

        .left{
            width: 30%;
            position: relative;
            top: 100px;
                @media screen and (max-width: 900px) {
                    margin: 0 auto;
                    position: relative;
                    top: -50px;
                }
        }

        .center{
            width: 30%;
            @media screen and (max-width: 900px) {
            margin: 0 auto;
            width: 50%;
            }
            @media screen and (max-width: 750px) {
            margin: 0 auto;
            width: 80%;
            }
        }

        .right{
            width: 30%;
            position: relative;
            bottom: 100px;
            @media screen and (max-width: 900px) {
                margin: 0 auto;
                position: relative;
                top: 100px;
            }

        }
    }

    form {
        .message{
            height: 100px;
        }
    }
}

.circle{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: $rouge;
}
.circle2{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: $yellow;
    position: relative;
    bottom: 10rem;
    left: 80rem;
}

.box-img{
    width: 100% ;
    position: relative;
    bottom: 50px;
    left: -400px;
}

.line-footer{
    margin: 5rem
}

.before-footer{
    margin-bottom: 3rem;
}


</style>
