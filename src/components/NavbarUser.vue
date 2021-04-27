<template>
  <header>
     <div class="navbaruser">
            <li>
                <router-link to="/dashboard">
                <img src="../assets/images/picto-dashboard.png" alt="picto-dashboard"/>
                </router-link>
            </li>
            <li>
                <router-link to="/tasks">
                <img src="../assets/images/picto-tasks.png" alt="picto-tasks"/>
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
                <img  src="../assets/images/picto-compte.png" alt="picto-compte"/>
                </router-link>
            </li>
            <li>
                <router-link to="/settings">
                <img src="../assets/images/picto-settings.png" alt="picto-settings"/>
                </router-link>
            </li>
     </div>
  </header>
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

.navbar-connexion{
  margin-bottom: 2rem;
}
.inscription{
  color: $rouge;
}

</style>
