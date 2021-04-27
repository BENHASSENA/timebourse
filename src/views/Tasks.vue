<template>
    <div id="settings">
        <div >
            <!-- titre du dashboard -->
            <h1 class="title1">Taches</h1>
            <h2 class="title2">Votre programme</h2>
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
                <img  src="../assets/images/picto-compte.png" alt="picto-compte"/>
                </router-link>
            </li>
            <li>
                <router-link to="/settings">
                <img src="../assets/images/picto-settings.png" alt="picto-settings"/>
                </router-link>
            </li>
            </div> -->
          <NavbarUser></NavbarUser>
        </div>
        <div class="containerboard">
            <div class="boxtasks">
                <div class="programme">
                    <!-- <table>
                    <tr>
                        <td class="titleprogramme">Programme des tâches</td>
                        <td>Biche</td>
                    </tr>
                    <tr>
                        <td>Jeanne</td>
                        <td>Biche</td>
                    </tr>
                    </table> -->


                    <div class="titleboard">
                        <div class="time">
                            <div class="boxtime">
                            <span><img src="../assets/images/img-task-tasks.png" alt="task"/></span>
                            <p class="titleprogramme">Programme des tâches</p>
                            </div>
                        </div>
                        <div class="time">
                            <div class="boxtime">
                            <span><img src="../assets/images/img-chrono-tasks.png" alt="chrono"/></span>
                            </div>
                        </div>                    
                        <div class="time">
                            <div class="boxtime">
                            <span><img src="../assets/images/img-flag-tasks.png" alt="flag"/></span>
                            </div>
                        </div>                    
                        <div class="time">
                            <div class="boxtime">
                            <span><img src="../assets/images/img-folder-tasks.png" alt="folder"/></span>
                            </div>
                        </div>                    
                        <div class="time">
                            <div class="boxtime">
                            <span><img src="../assets/images/img-calendar-tasks.png" alt="calendar"/></span>
                            </div>
                        </div>                    
                    </div>
                    
                    <div class="border"></div>
                    <div class="titleboard">
                        <div class="time">
                                <div class="boxtime">
                                <span><img src="../assets/images/img-check-tasks.png" alt="check"/></span>
                                <p class="titleprogramme">Nom de la tâche</p>
                            </div>
                        </div>
                        <div class="time">
                                <div class="boxtime">
                                <p class="totaltime">30min</p>
                            </div>
                        </div>
                        <div class="time">
                                <div class="boxtime">
                                <p class="titleprogramme">Haute priorité</p>
                            </div>
                        </div>
                        <div class="time">
                                <div class="boxtime">
                                <p class="totaltime">Nom du dossier</p>
                            </div>
                        </div>
                        <div class="time">
                                <div class="boxtime">
                                <p class="totaltime">Date prévue</p>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import  NavbarUser from '@/components/NavbarUser'

export default {
    
  components: {
    NavbarUser,
  }

}

</script>

<style lang="scss" scoped>

#settings{

    .navbaruser{
        margin-bottom: 3rem;
    }

    .containerboard{
        display: flex;

        .boxtasks{
            padding-top: 2%;
             width: 80%;
        }

        .titleboard{
            display: flex;
        }

        .time{
            margin: 1rem 2rem;
            width: 20%;
            justify-content: center;
            align-items: center;
        }
        
    }

    .boxright{
        margin: 3% ;
    }


}
  

</style>