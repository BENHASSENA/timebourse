<template>
  <div id="home"> 
    <NavbarHome class="navbar-home"></NavbarHome>
    <!-- titre page accueil -->
    <h1 class="title1">Bien dépenser son temps</h1>
    <h2 class="title2">Pratiquez l'économie du temps, de l'énergie, et par conséquent de l'argent</h2>
    <!-- SECTION 1 -->
    <div id="section1">
        <div class="box-section1">  
            <div class="gauche" >
               <img class="img1-section1" src="../assets/images/img-home-1.png" alt="" width="400px"/> 
            </div>
            <div class="centre">
                <button class="button"><a href="/connexion">Rejoignez-nous</a></button>
            </div>
            <div class="droite">
                <img class="img2-section1" src="../assets/images/img-home-2.png" alt="" width="200px"/> 
                <div class="circle"></div>
            </div>
        </div>

    </div>
    <!-- SECTION 2 -->
    <div id="section2" >
        <div>
            <img class="logo" src="../assets/images/logo-timebourse-red.png" alt="logo" width="100px">
        </div>
        <h1 class="title1">Un esprit zen, du temps en plus</h1>
        <h2 class="title2">TimeBourse vous aide à équilibrer vos dépense de temps</h2>
        <div class="circle"></div>
        <div class="box-section1">
            <div class="box-card before-footer">
                <div class="card">
                    <div class="img-card">
                        <img src="../assets/images/img-home-3.png" alt="img-planif" >
                    </div>
                    <div>
                        <h3>Planifiez</h3>
                        <p>Assignez facilement vos tâches pour la journée, demain, à venir, ou un jour</p>
                    </div>
                </div>
                <div class="card">
                    <div class="img-card">
                        <img src="../assets/images/img-home-4.png" alt="img-planif" >
                    </div>
                    <div>
                        <h3>Consultez</h3>
                        <p>Consultez vos dépenses de temps. Augmentez la qualité de votre temps en filtrant vos tâches par durées estimées</p>
                    </div>
                </div>
                <div class="card">
                    <div class="img-card">
                        <img src="../assets/images/img-home-5.png" alt="img-planif" >
                    </div>
                    <div>
                        <h3>Ajustez</h3>
                        <p>Mettez à jour vos tâches en fonction des imprévus et restez maître de votre temps</p>
                    </div>
                </div>
                <div class="card">
                    <div class="img-card">
                        <img src="../assets/images/img-home-6.png" alt="img-planif" >
                    </div>
                    <div>
                        <h3>Analyser</h3>
                        <p>Visualisez votre temps et optimisez votre satisfaction avec des rapports pour suivre  vos performances et l'utilisation de votre capital temps</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>  
    <!-- SECTION 3 -->
    <div id="section3">
        <div>
            <div class="circle"></div>
        </div>
        <h1 class="title1">Libérez vous du temps</h1>
        <h2 class="title2">Rééquilibrez le temps passé dans les activités qui vous tiennent à coeur</h2>
        <div class="box-section1">
            <div>
               <img class="img1-section1 before-footer" src="../assets/images/img-home-7.png" alt="" width=""/> 
            </div>
            <div>
                <button class="button">Rejoignez-nous</button>
            </div>
            <div>
                <img class="img2-section1" src="../assets/images/img-home-8.png" alt="" width=""/> 
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

#section1, #section2, #section3{
    margin-top: 10rem;
    margin-bottom: 10rem;

    .centre{
        margin-left: -150px;
    }

    .box-section1{
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin: 5rem;
        width: 80%;
        margin: 0 auto;
    
        .img1-section1{
            position: relative;
            top: 100px;
            width: 80%;
        }
        .img2-section1{
            width: 90%;
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


#section2{

    .logo{
        margin: 5rem 0;
    }

    .circle{
        background-color: $bleu;
        width: 70px;
        height: 70px;
        position: relative;
        left: 7rem;
    }

    .box-card{
        display: flex;
        margin-top: 7rem;
        width: 100%;

        .card{
            width: 25%;    
            padding: 0 2rem ;

            .img-card{
                height: 60%;
                margin: 0 auto;
                justify-content: center;
                align-items: center;

                img{
                    width: 60%;
                    margin-bottom: 5rem;
                }
            }
        }
    }
}

#section3{
    

    .circle{
        background-color: $rouge;
        width:40px;
        height: 40px;
        margin-left: 15rem ;
    }

  
   
}
.before-footer{
    margin-bottom: 3rem;
}


</style>
