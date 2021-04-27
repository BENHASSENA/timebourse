<template>
    <div>
        <footer>
            <div class="line-footer"></div>
            <div class="footer">
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
                <ul class="picto inline">
                    <img  class="inline" src="../assets/images/facebook-icon-1.png" alt="picto-facebook" width="20px">
                    <img  class="inline" src="../assets/images/instagram-glyph-1.png" alt="picto-facebook" width="20px">
                    <img  class="inline" src="../assets/images/linkedin-icon-1.png" alt="picto-facebook" width="20px">
                    <img  class="inline" src="../assets/images/twitter-1.png" alt="picto-facebook" width="20px">
                    <img  class="inline" src="../assets/images/pinterest-1.png" alt="picto-facebook" width="18px">
                </ul>
            </div>
        </footer>
    </div>
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

.inscription{
    color: $rouge;
}


footer{

    .line-footer{
        width: 20rem;
        border-top: 1px solid $bleu;
        margin: 0 auto;
    }

    .inscription{
    color: $rouge;
    }

    .picto{
        img{
            margin-left: 1rem;
        }
    }

    .footer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 5rem;
    }
}
</style>
