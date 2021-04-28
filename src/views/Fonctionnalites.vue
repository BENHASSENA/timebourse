<template>
  <div id="fonctionnalites"> 
    <NavbarHome class="navbar-home"></NavbarHome>
    <!-- titre page accueil -->
    <h1 class="title1">Des outils simples et indispensables</h1>
    <h2 class="title2">Profitez des fonctionnalités qui vous feront gagner en efficacité</h2>
    <!-- SECTION 1 -->
    <div id="section1" >
        <div class="box-section1">
            <div class="box-card">
                <div class="card">
                    <div class="img-card">
                        <img src="../assets/images/img-upload.png" alt="upload" >
                    </div>
                    <div>
                        <h3>Mise à jour</h3>
                        <p>Profitez de la mise à jour en temps réel et de la synchronisation sur tous vos appareils</p>
                    </div>
                </div>
                <div class="card">
                    <div class="img-card">
                        <img src="../assets/images/img-bell.png" alt="bell" >
                    </div>
                    <div>
                        <h3>Notifications</h3>
                        <p>Recevez des notifications pour vous alerter afin de rester proche de vos objectifs</p>
                    </div>
                </div>
                <div class="card">
                    <div class="img-card">
                        <img src="../assets/images/img-clock.png" alt="clock" >
                    </div>
                    <div>
                        <h3>Rappels</h3>
                        <p>Prévoyez des rappels pour ne plus rien manquer et mieux vous organiser</p>
                    </div>
                </div>
                <div class="card">
                    <div class="img-card">
                        <img src="../assets/images/img-paper.png" alt="paper" >
                    </div>
                    <div>
                        <h3>Analyser</h3>
                        <p>Consultez les rapports de statistiques de la gestion de votre temps pour gagner en efficacité</p>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="box-section1 ">
            <div class="box-card before-footer">
                <div class="card">
                    <div class="img-card">
                        <img src="../assets/images/img-camembert.png" alt="camembert" >
                    </div>
                    <div>
                        <h3>Synthèse</h3>
                        <p>Observez rapidement comment vous avez rempli votre journée  </p>
                    </div>
                </div>
                <div class="card">
                    <div class="img-card">
                        <img src="../assets/images/img-stat.png" alt="stat" >
                    </div>
                    <div>
                        <h3>Rapports</h3>
                        <p>Visualisez votre productivité grâce à des rapports de statistiques avec différentes vues</p>
                    </div>
                </div>
                <div class="card">
                    <div class="img-card">
                        <img src="../assets/images/img-board.png" alt="board" >
                    </div>
                    <div>
                        <h3>Tableau de bord </h3>
                        <p>Maximisez le rendement de votre journée et redistribuez votre temps en fonction de vos priorités.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="img-card">
                        <img src="../assets/images/img-chrono.png" alt="chrono" >
                    </div>
                    <div>
                        <h3>Chronomètre</h3>
                        <p>Prenez la mesure de votre budget temps </p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    <!-- SECTION 2 -->
    <div id="section2">
        <h1 class="title1">Suivi des activités</h1>
        <div class="box-contact">
            <div class="left">
                <h3>Maîtrisez votre emploi du temps</h3>
                <p>Choisissez consciemment comment dépenser votre temps et analyser vos dépenses de temps par secteur d’activité. </p>
            </div>
            <div class="right">
                <img src="../assets/images/img-activities.png" alt="activities" >
            </div>
        </div>
        <div class="circle"></div>
    </div>
    <!-- SECTION 3 -->
    <div id="section3">
        <h1 class="title1">Suivi des taches</h1>
        <div class="box-contact miror">
            <div class="leftmiror nomiror ">
                <h3>Centralisez toutes vos tâches au même endroit</h3>
                <p>Gagnez du temps en triant vos tâches planifiées par durée estimée, par hiérarchie de priorité et gérez efficacement les imprévus, ajoutez des récurrences, … </p>
                <div class="circle2"></div>
            </div>
            <div class="right nomiror ">
                <img src="../assets/images/img-dashboard.png" alt="dashboard" >
            </div>
        </div>

    </div>
    <!-- SECTION 4 -->
    <div id="section4">
        <h1 class="title1">Suivi des objectifs</h1>
        <div class="box-contact">
            <div class="left">
                <h3>Augmentez votre productivité</h3>
                <p>Soyez efficace et définissez des objectifs réalistes et atteignables grâce aux rapports d’activité et au limitateur de temps des activités prévues dans votre journée</p>
            </div>
            <div class="right">
                <img src="../assets/images/img-objectifs.png" alt="objectifs" >
            </div>
        </div>
        <div class="circle"></div>
    </div>
    <!-- SECTION 5 -->
    <div id="section5" class="before-footer">
        <h1 class="title1">Suivi du budget temporel</h1>
        <div class="box-contact miror">
            <div class="leftmiror nomiror ">
                <h3>Contrôlez  vos dépenses</h3>
                <p>Réajustez vos dépenses là où vous en avez réellement besoin, soyez alerter quand vous vous éloignez de vos objectifs, et planifier les récurrences pour vous permettre de visualiser plus facilement le temps qu’il vous reste</p>
            </div>
            <div class="right nomiror ">
                <img src="../assets/images/img-budget.png" alt="budget" >
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
    background-color: $rouge;
    position: relative;
    top: 5rem;
    left: 10rem;

      @media screen and (max-width: 900px) {
        position: relative;
        top: 5rem;
        left: 5rem;
    }
}


#section1{

    .box-card{
        display: flex;
        width: 70%;
        margin: 0 auto;
        margin-bottom: 5rem;
        
        @media screen and (max-width: 1025px) {
        width: 90%;
        }
        @media screen and (max-width: 900px) {
        width: 100%;
        display: block;

        }
     

        .card{
            width: 25%;    
            padding: 0 2rem ;
            @media screen and (max-width: 900px) {
              width: 40%;
              display: block;
              margin: 0 auto;
              margin-top: 5rem;
            }
     

            .img-card{
                height: 40%;
                margin: 0 auto;
                justify-content: center;
                align-items: center;

                img{
                    width: 25%;
                     @media screen and (max-width: 900px) {
                        width: 15%;

                    }
     

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

#section2, #section3, #section4, #section5{



    .box-contact{
        display: flex;
        justify-content: center;
        margin: 5rem;
        @media screen and (max-width: 900px) {
            margin: 5rem 2rem;
        }
            @media screen and (max-width: 750px) {
                display: block;
            }
            

        .left{
            width: 30%;
            padding-right: 8rem;
            @media screen and (max-width: 1025px) {
                padding-right: 4rem;
            }
            @media screen and (max-width: 900px) {
               margin-bottom: 2rem;
            }
            @media screen and (max-width: 750px) {
                margin: 0 auto;
                width: 70%;
                margin-bottom: 2rem ;
            }
            

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

            @media screen and (max-width: 1025px) {
                width: 70%;
            }

             @media screen and (max-width: 750px) {
                margin: 0 auto;
                margin-bottom: 8rem ;
            }

            img{
                width: 100%;
                border: 4px solid $yellow;

                
            }
        }
    }
    .circle{
        background-color: $bleu;
        width:40px;
        height: 40px;
        margin-left: 20rem ;
        position: relative;
        bottom: 100px;
        
        @media screen and (max-width: 1025px) {
            position: relative;
            bottom: 50px;
            margin-left: 10rem ;
        }
        @media screen and (max-width: 750px) {


        }

        
    }

}

#section3{
     
    .circle{
        background-color: $rouge;

       
    }
}
#section4{
     
    .circle{
        background-color: $yellow;
    }
}

.before-footer{
    margin-bottom: 10rem;
}

.miror {
  transform: scaleX(-1);
}
.leftmiror{
        width: 30%;
        padding-left: 8rem;

         @media screen and (max-width: 1025px) {
                padding-left: 4rem;
            }
            @media screen and (max-width: 900px) {
               margin-bottom: 2rem;
            }
            @media screen and (max-width: 750px) {
                margin: 0 auto;
                width: 70%;
                margin-bottom: 2rem ;
            }

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
            width: 100%;
            border: 4px solid $yellow;
        }
    }

.nomiror {
  transform: scaleX(-1);
}


</style>
