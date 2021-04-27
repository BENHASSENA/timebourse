<template>
  <div id="home"> 
    <NavbarHome class="navbar-home"></NavbarHome>
    <!-- titre page accueil -->
    <h1 class="title1">Ne perdez plus votre temps</h1>
    <h2 class="title2">Le meilleur moyen de prévenir l’avenir c’est de le créer</h2>
    <!-- SECTION 1 -->
    <div id="section1" >
        <div class="box-card">
                <div class="card">
                    <div class="img-card">
                        <img src="../assets/images/img-apropos-1.png" alt="femme en automne" >
                    </div>
                    <div>
                        <h3>Votre histoire</h3>
                        <p>Parce qu’apprendre à mieux se connaître permet de mieux s’organiser. TimeBourse fait parler votre temps et vous aide à vous organiser.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="img-card">
                        <img src="../assets/images/img-apropos-2.png" alt="promenade chien" >
                    </div>
                    <div>
                        <h3>Votre attention</h3>
                        <p>Parce que focaliser son attention sur les choses importantes permet de mieux s’épanouir.  TimeBourse vous indique où vous avez placé votre attention.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="img-card">
                        <img src="../assets/images/img-apropos-3.png" alt="femme qui regarde dehors" >
                    </div>
                    <div>
                        <h3>Votre temps</h3>
                        <p>Parce que le temps ne s’épargne pas et qu’il se dépense uniquement. TimeBourse vous permet de s’associer avec son temps pour atteindre ses objectifs.</p>
                    </div>
                </div>
        </div>
    </div>
    <!-- SECTION 2 -->
    <div id="section2">
        <div class="circle"></div>
        <div class="box-contact">
            <div class="left">
                <h3>Où passe votre temps?</h3>
                <p>TimeBourse est un outil indispensable dans la gestion de votre temps.
                Parce que vous passez votre temps à résoudre des problématiques, nous mettons à votre disposition un outil révolutionnaire pour vous permettre de mieux gérer votre capital temps.</p>
            </div>
            <div class="right">
                <img src="../assets/images/img-apropos-4.png" alt="homme sur une plaine" >
            </div>
        </div>
    </div>
    <!-- SECTION 3 -->
    <div id="section3">
        <div>
            <div class="circle"></div>
        </div>
        <h1 class="title1">Soyez plus productif</h1>
        <h2 class="title2">Dépensez votre temps de manière qualitative </h2>
        <div class="box-section1">
            <div>
               <img class="img1-section1 before-footer" src="../assets/images/img-apropos-5.png" alt="" width="300px"/> 
            </div>
            <div>
                <button class="button">Rejoignez-nous</button>
            </div>
            <div>
                <img class="img2-section1" src="../assets/images/img-apropos-6.png" alt="" width="150px"/> 
            </div>
        </div>
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

$white: #fff;
$rouge: #A90909;
$bleu: #021F4D;
$yellow: #FFBE0C;
$backgroundgrey: #F9F9F7;
$grey: grey;

.navbar-home{
    margin-bottom: 3rem;
}

#section1{
    margin-top: 10rem;
    margin-bottom: 10rem;

    .box-card{
        display: flex;
        width: 70%;
        margin: 0 auto;
        margin-bottom: 5rem;
        justify-content: center;

        .card{
            width: 30%;    
            padding: 0 2rem ;

            .img-card{
                height: 40%;
                margin: 0 auto;
                justify-content: center;
                align-items: center;
                margin-bottom: 20px;

                img{
                    width: 70%;

                }
            }
        }

        h3{
            font-size: 18px;
        }

        p{
            margin-top: 2rem;
 
        }
    }
}


#section2, #section3{
     margin-bottom: 10rem;

    .box-contact{
        display: flex;
        justify-content: center;
        margin: 5rem;

        .left{
            width: 30%;
            padding-right: 8rem;

            h3{
                text-align: left;
            }

            p{
                margin-top: 2rem;
                text-align: left;
            }

        }

        .right{
            width: 50%;

            img{
                width: 90%;
               
            }
        }
    }
    .circle{
        background-color: $yellow;
        width:40px;
        height: 40px;
        margin-left: 30rem ;
        position: relative;

    }
}


#section3{
    .circle{
        background-color: $rouge;
        width:40px;
        height: 40px;
        margin-left: 70rem ;
        position: relative;

    }

    h2{
        width: 20%;
    }
    .box-section1{
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin: 5rem;
    
        .img1-section1{
            position: relative;
            top: 100px;
        }
        .img2-section1{
            width: 70%;
            position: relative;
            bottom: -10px;
        }
        .circle{
            position: relative;
            top: 200px;
            left:80px;
        }
    }
}


a:-webkit-any-link{ 
    color: $white;
}


.circle{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: $yellow;
}


.before-footer{
    margin-bottom: 3rem;
}


</style>
