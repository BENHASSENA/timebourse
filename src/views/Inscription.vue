<template>
  <div id="contact"> 
    <NavbarHome class="navbar-home"></NavbarHome>
    <!-- titre page accueil -->
    <h1 class="title1">Inscrivez-vous</h1>
    <h2 class="title2">N’attendez plus pour nous rejoindre</h2>
    <!-- SECTION 1 -->
    <div class="section1">
        <div class="circle"></div>
        <div class="box-contact">  
            <div class="left">
                <h3>Parce qu’il est temps d’investir en vous même</h3>
                <p>Votre temps vous appartient, dépensez le intelligemment </p>
            </div>
            <div class="right">
                <!-- <form @submit.prevent>
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
                </form> -->
            <div >
                <form @submit.prevent>
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
                <p class="success" v-if="savingSuccessfull">Vous êtes bien inscrit</p>
                <!-- <a @click="toggleForm()">Revenir à la connexion</a> -->
                </form>
            </div>
            </div>
        </div>
        <div class="box-img">
            <img class="before-footer" src="../assets/images/img-inscription.png" alt="inscription" width="300px"/>
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
    savingSuccessfull: false,
    // showPasswordReset: false,
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
    signup() {
        this.$store.dispatch('signupStore', {
                    username: this.signupForm.username,
                    email: this.signupForm.email,
                    password: this.signupForm.password,
        } )
        this.savingSuccessfull = !this.savingSuccessfull   
    }
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
        background-color: $yellow;
        width:40px;
        height: 40px;
        margin-left: 15rem ;
        position: relative;

        @media screen and (max-width: 1200px) {
        margin-left: 10rem;
        margin-top: 5rem;
        }

    }

    .box-contact{
        display: flex;
        justify-content: center;
        margin: 5rem;
        @media screen and (max-width: 1200px) {
        margin: 5rem 0rem;
        }
        @media screen and (max-width: 750px) {
            display: block;

        }
        

        .left{
            width: 30%;
            padding-right: 8rem;

            @media screen and (max-width: 900px) {
                width: 50% ;
                position: relative;
                bottom: 0;                
                margin: 0 auto;

            }
            @media screen and (max-width: 750px) {
                padding-right: 4rem;

            }

            h3{
                // width:50%;
                text-align: left;
            
            }
            p{
                // width:50%;
                margin-top: 2rem;
                text-align: left;
            }

        }

        .right{
            width: 30%;

            @media screen and (max-width: 900px) {
                width: 40%;
            }

            @media screen and (max-width: 750px) {
                margin: 0 auto;
                margin-top: 3rem;
                width: 60%;
            }
        }
    }

    form {
        .message{
            height: 100px;
        }

        p{
            margin-top: 1rem;
        }
    }
}

.circle{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: $yellow;
}
.circle2{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: $bleu;
    position: relative;
    bottom: 10rem;
    left: 80rem;
        @media screen and (max-width: 1300px) {
    position: relative;
    bottom: 10rem;
    left: 50rem;
    }
    @media screen and (max-width: 900px) {
    position: relative;
    bottom: 10rem;
    left: 50rem;
    }

    @media screen and (max-width: 750px) {
    position: relative;
    bottom: 20rem;
    left: 25rem;
    }
}

.box-img{
    width: 100% ;
    position: relative;
    bottom: 50px;
    left: -200px;

      img{
        @media screen and (max-width: 900px) {
            width: 40% ;
            position: relative;
            bottom: 0;
            left: 50px;
        }
        @media screen and (max-width: 750px) {
            margin: 0 auto;
            margin-top: 8rem;
            left: 150px;
        }
    }
}

.line-footer{
    margin: 5rem
}

.before-footer{
    margin-bottom: 3rem;
}


</style>
