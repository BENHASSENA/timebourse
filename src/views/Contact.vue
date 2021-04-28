<template>
  <div id="contact"> 
    <NavbarHome class="navbar-home"></NavbarHome>
    <!-- titre page accueil -->
    <h1 class="title1">Contactez-nous</h1>
    <h2 class="title2">Vous avez une question ?</h2>
    <!-- SECTION 1 -->
    <div class="section1">
        <div class="circle"></div>
        <div class="box-contact">  
            <div class="left">
                <h3>Posez nous votre question</h3>
                <p>Envoyez-nous vos questions et notre équipe se chargera de vous répondre rapidement</p>
            </div>
            <div class="right">
                <div>
                    <form @submit.prevent>
                        <div>
                            <label for="username"></label>
                            <input type="text" placeholder="Nom ou Pseudo" id="username" />
                        </div>

                        <div>
                            <label for="email2"></label>
                            <input  type="text" placeholder="Adresse mail" id="email2" />
                        </div>
                        <div>
                            <label for="objet"></label>
                            <input type="text" placeholder="Objet" id="objet" />
                        </div>
                        <div>
                            <label for="message"></label>
                            <input class="message" type="text" placeholder="Message" id="message" />
                        </div>
                        <button class="button">Envoyez</button>
                    </form>
                </div>
            </div>
            
        </div>
        <div class="box-img">
            <img class="before-footer" src="../assets/images/img-contact.png" alt="" width="400px"/>
            
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
        @media screen and (max-width: 900px) {

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

    @media screen and (max-width: 800px) {
    position: relative;
    bottom: 10rem;
    left: 40rem;
    }
    @media screen and (max-width: 750px) {
    position: relative;
    bottom: 10rem;
    left: 25rem;
    }
}

.box-img{
    width: 100% ;
    position: relative;
    bottom: 120px;
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
