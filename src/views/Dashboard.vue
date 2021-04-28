<template>
  <div id="dashboard"> 
    <SiteNav v-if="showNav" ></SiteNav>
    <!-- titre du dashboard -->
    <h1 class="title1">Tableau de bord</h1>
    <h2 class="title2">Gestion des tâches</h2>
    <!-- barre de navigation du dashboard -->
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
    <!-- contenu du dashboard -->
    <div class="containerboard">
      <div class="boxleft">
        <div class="programme">
          <div class="time">
            <div class="boxtime">
              <span><img src="../assets/images/picto-sun.png" alt="picto-sun"/></span>
              <p class="titleprogramme" @click="today()">Aujourd'hui</p>
            </div>
            <p class="totaltime">4h</p>
          </div>
          <div class="time">
            <div class="boxtime">
              <span><img src="../assets/images/picto-suntomorrow.png" alt="picto-suntomorrow"/></span>
              <p class="titleprogramme" @click="tomorrow()">Demain</p>
            </div>
            <p class="totaltime">6h</p>
          </div>
          <div class="time">
            <div class="boxtime">
              <span><img src="../assets/images/picto-calendar.png" alt="picto-calendar"/></span>
              <p class="titleprogramme" @click="oneDay()">Un jour</p>
            </div>
            <p class="totaltime">2h</p>
          </div>
          <div class="time">
            <div class="boxtime">
              <span><img src="../assets/images/picto-sunoneday.png" alt="picto-sunoneday"/></span>
              <p class="titleprogramme" @click="come()">A venir</p>
            </div>
            <p class="totaltime">20h</p>
          </div>
          <div class="border"></div>

          <!-- <div class="time">
            <div class="boxtime2">
              <span class="circle"><img src="../assets/images/picto-dossier.png" alt="picto-dossier"/></span>
              <p class="titleprogramme">Santé</p>
            </div>
            <p class="totaltime">1h</p>
          </div>
          <div class="time">
            <div class="boxtime2">
              <span class="circle"><img src="../assets/images/picto-dossier.png" alt="picto-dossier"/></span>
              <p class="titleprogramme">Famille</p>
            </div>
            <p class="totaltime">10h</p>
          </div>
          <div class="time">
            <div class="boxtime2">
              <span class="circle"><img src="../assets/images/picto-dossier.png" alt="picto-dossier"/></span>
              <p class="titleprogramme">Sport</p>
            </div>
            <p class="totaltime">5h</p>
          </div>
          <div class="time">
            <div class="boxtime2">
              <span class="circle"><img src="../assets/images/picto-dossier.png" alt="picto-dossier"/></span>
              <p class="titleprogramme">Bénévolat</p>
            </div>
            <p class="totaltime">10h</p>
          </div>
          <div class="time">
            <div class="boxtime2">
              <span class="circle"><img src="../assets/images/picto-dossier.png" alt="picto-dossier"/></span>
              <p class="titleprogramme"></p>
            </div>
            <p class="totaltime">6h</p>
          </div> -->
          <div class="time">
            <div class="boxtime2">
              <span class="circle"><img src="../assets/images/picto-dossier-ajout.png" alt="picto-dossier-ajout"/></span>
              <p class="totaltime"><a @click="toggleFormFolder()">Ajouter un dossier</a></p>              
            </div>
          </div>
          <div class="time" v-for="folder in userFolder" :key="folder._id" >
            <div class="boxtime2" >
              <span class="circle"><img src="../assets/images/picto-dossier.png" alt="picto-dossier"/></span>
              <p class="titleprogramme" >{{folder.nameFolder}}</p>
            </div>
            <p class="totaltime">
              <v-icon small @click="toggleFormFolder(folder)">{{ icons.mdiPencil }}</v-icon>
              <v-icon small @click="supprimerFolder(folder._id)">{{ icons.mdiDelete }}</v-icon>
            </p>
          </div>
        </div>
      </div>


      <div class="boxcenter">
        <div class="programme4">
          <div class="task">
            <div class="boxtime">
              <span class="picto"><img src="../assets/images/picto-add.png" alt="picto-check"/></span>
              <p class="totaltime"><a @click="toggleFormulaire()">Ajouter une tâche</a></p>
            </div>
          </div> 
        </div>
        
        <div class="titlepriority">
          <p class="priorityred">Mes tâches</p>   
        </div>
        <div  v-for="task in userTask" :key="task._id" class="programme2">
          <div class="task">
            <div class="boxtime">
              <span class="picto"><img src="../assets/images/picto-check.png" alt="picto-check"/></span>
              <p class="titleprogramme">{{task.nameTask}}</p>
            </div>
            <p class="totaltime">
            <v-icon small  @click="toggleFormulaire(task)">{{ icons.mdiPencil }}</v-icon>
            <v-icon small  @click="supprimer(task._id)">{{ icons.mdiDelete }}</v-icon>
            </p>
          </div>
        </div>
      </div>

      <!-- <div class="boxright">
        <div class="programme">
          <div class="task">
            <div class="boxtime">
              <span class="picto"><img src="../assets/images/picto-flag.png" alt="picto-flag"/></span>
              <span class="picto"><img src="../assets/images/picto-check.png" alt="picto-check"/></span>
              <span class="picto"><img src="../assets/images/picto-chrono.png" alt="picto-chrono"/></span>
              <p class="titleprogrammeboxright">Nom de la tâche</p>
            </div>
          </div>        
          <div class="task">
            <div class="boxtime">
              <span class="picto"><img src="../assets/images/picto-chrono.png" alt="picto-chrono"/></span>
            <p class="totaltime">Temps estimé</p>
            </div>
            <div class="boxtime">
              <span class="picto"><img src="../assets/images/picto-chrono.png" alt="picto-chrono"/></span>
              <p class="totaltime">1h</p>
            </div>
          </div>     
          <div class="task">
            <div class="boxtime">
              <span class="picto"><img src="../assets/images/picto-chrono.png" alt="picto-chrono"/></span>
            <p class="totaltime">Temps réél</p>
            </div>
            <div class="boxtime">
              <span class="picto"><img src="../assets/images/picto-chrono.png" alt="picto-chrono"/></span>
              <p class="totaltime">1h</p>
            </div>
          </div>      
          <div class="task">
            <div class="boxtime">
              <span class="picto"><img src="../assets/images/picto-calendar.png" alt="picto-calendar"/></span>
            <p class="totaltime">Echéance</p>
            </div>
            <p class="titleprogramme">Aujourd'hui</p>
          </div>      
          <div class="task">
            <div class="boxtime">
              <span class="picto"><img src="../assets/images/picto-dossier-jaune.png" alt="picto-dossier-jaune"/></span>
            <p class="totaltime">Dossier</p>
            </div>
            <p class="titleprogramme">Travail</p>
          </div>      
          <div class="task">
            <div class="boxtime">
              <span class="picto"><img src="../assets/images/picto-reveil.png" alt="picto-reveil"/></span>
            <p class="totaltime">Rappel</p>
            </div>
            <p class="totaltime">Aucun</p>
          </div>      
          <div class="task">
            <div class="boxtime">
              <span class="picto"><img src="../assets/images/picto-recurrence.png" alt="picto-recurrence"/></span>
            <p class="totaltime">Récurrence</p>
            </div>
            <p class="titleprogramme">Chaque jour</p>
          </div>
          <div class="border"></div>  
          <div class="task">
            <div class="boxtime">
              <span class="picto"><img src="../assets/images/picto-check.png" alt="picto-check"/></span>
            <p class="titleprogramme">Nom de la sous tâche</p>
            </div>
          </div>  
          <div class="border"></div>  
          <div class="task">
            <div class="boxtime">
              <span class="picto"><img src="../assets/images/picto-add.png" alt="picto-check"/></span>
            <p class="totaltime">Ajouter une sous tâche</p>
            </div>
          </div> 
        </div>
      </div> -->
    </div>
    <!-- formulaire ajout de tache -->
    <v-dialog
            v-model="dialog"
            max-width="600px"
    >
      <v-card>
          <v-container>
            <div class="programme">
              <div class="task">
                <div class="boxtime">
                  <span class="picto"> <img src="../assets/images/picto-add.png" alt="picto-add"/></span>
                  <p class="titleprogrammeboxright">          
                  <!-- Nom de la tâche -->
                  <input class="toto" type="text" v-model="createTaskForm.nameTask" placeholder="Nom de la tache"></p>
                </div>
              </div>        
              <div class="task">
                <div class="boxtime">
                  <span class="picto"><img src="../assets/images/picto-chrono.png" alt="picto-chrono"/></span>
                <p class="totaltime">Temps estimé</p>
                </div>
                <div class="boxtime">
                  <!-- Durée temps estimé -->
                  <input class="totaltime" type="time" v-model="createTaskForm.timeEstimateTask" placeholder="Durée de la tache">
                </div>
              </div>     
              <div class="task">
                <div class="boxtime">
                  <!-- Priorité -->
                  <span class="picto"><img src="../assets/images/picto-flag.png" alt="picto-flag"/></span>
                <p class="totaltime">Priorité</p>
                </div>
                <div class="boxtime">
                  <p class="totaltime">
                    <!-- <v-select v-model="selected" :options="['Haute priorité', 'Moyenne priorité','Faible priorité','Pas de priorité']"></v-select> -->
                    
                  <select class="totaltime" v-model="createTaskForm.priorityTask"  id="priority">
                    <option>Pas de priorité</option>
                    <option>Faible priorité</option>
                    <option>Moyenne priorité</option>
                    <option>Haute priorité</option>
                  </select>
                  </p>
                </div>
              </div>      
              <div class="task">
                <div class="boxtime">
                  <span class="picto"><img src="../assets/images/picto-calendar.png" alt="picto-calendar"/></span>
                <p class="totaltime">Echéance</p>
                </div>
                <p class="titleprogramme">
                  <!-- Echeance -->
                  <input type="date" v-model="createTaskForm.echeanceTask" placeholder="echeance de la tache">
                </p>
              </div>   
              <div class="task">
                <div class="boxtime">
                  <!-- Priorité -->
                  <span class="picto"><img src="../assets/images/picto-dossier-jaune.png" alt="picto-dossier-jaune"/></span>
                <p class="totaltime">Dossier</p>
                </div>
                <div class="boxtime">
                  <p class="totaltime">
                    <select class="totaltime" v-model="createTaskForm.folderTask"> //l'info ds v-model correspond à une liste de tous les dossiers
                      <option v-for="folder in userFolder" :key="folder._id" >{{folder.nameFolder}}</option>
                    </select>
                  </p>
                </div>
              </div>      
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="yellow darken-1"
                  @click="dialog = false , createTask()"
                >
                  Enregister
                </v-btn>
              </v-card-actions>
              <!-- <div class="task">
                <div class="boxtime">
                  <span class="picto"><img src="../assets/images/picto-dossier-jaune.png" alt="picto-dossier-jaune"/></span>
                <p class="totaltime">Dossier</p>
                </div>
                <p class="titleprogramme">Travail</p>
              </div>      
              <div class="task">
                <div class="boxtime">
                  <span class="picto"><img src="../assets/images/picto-reveil.png" alt="picto-reveil"/></span>
                <p class="totaltime">Rappel</p>
                </div>
                <p class="totaltime">Aucun</p>
              </div>      
              <div class="task">
                <div class="boxtime">
                  <span class="picto"><img src="../assets/images/picto-recurrence.png" alt="picto-recurrence"/></span>
                <p class="totaltime">Récurrence</p>
                </div>
                <p class="titleprogramme">Chaque jour</p>
              </div>
              <div class="border"></div>  
              <div class="task">
                <div class="boxtime">
                  <span class="picto"><img src="../assets/images/picto-check.png" alt="picto-check"/></span>
                <p class="titleprogramme">Nom de la sous tâche</p>
                </div>
              </div>  
              <div class="border"></div>  
              <div class="task">
                <div class="boxtime">
                  <span class="picto"><img src="../assets/images/picto-add.png" alt="picto-check"/></span>
                <p class="totaltime">Ajouter une sous tâche</p>
                </div>
              </div>  -->
            </div>
          </v-container>
      </v-card>
    </v-dialog>
        <!-- formulaire ajout de dossier -->
    <v-dialog
            v-model="dialogFolder"
            max-width="600px"
    >
      <v-card>
          <v-container>
            <div class="programme">
              <div class="task">
                <div class="boxtime">
                  <span class="picto"> <img src="../assets/images/picto-dossier-jaune.png" alt="picto-jaune"/></span>
                  <p class="titleprogrammeboxright">          
                  <!-- Nom de la tâche -->
                  <input class="toto" type="text" v-model="createFolderForm.nameFolder" placeholder="Nom du dossier"></p>
                </div>
              </div>           
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="yellow darken-1"
                  @click="dialogFolder = false , createFolder()"
                >
                  Enregister
                </v-btn>
              </v-card-actions>
            </div>
          </v-container>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import  NavbarUser from '@/components/NavbarUser'
import moment from 'moment'
import SiteNav from '@/components/SiteNav'
import {
    mdiPencil,
    mdiDelete,
    mdiClockTimeFive,
    mdiTimer,
  } from '@mdi/js'


export default {
  components: {
    NavbarUser,  
    SiteNav,
  },
  data() {
    return {
      createFolderForm:{
        nameFolder:'',
      },
      createTaskForm: {
        nameTask: '',
        priorityTask: '',
        timeEstimateTask:'',
        timeRealTask:'',
        echeanceTask:'',
        rappelTask:'',
        folderTask:'',
      },
      icons: {
        mdiPencil,
        mdiDelete,
        mdiClockTimeFive,
        mdiTimer
      },
      showFormulaire: false,
      dialog: false,
      dialogFolder:false,
      time: '',
      menu1:'',
      date:'',
      currentTask:null,

      dateToday:'',
    }
  },

  computed: {
    ...mapState(['userProfile',  'userTask', 'userFolder']),
    showNav() {
      return Object.keys(this.userProfile).length > 1
    },  
  },

  methods: {
    createFolder(){
      // console.log('dossier bien ajouter');
      // this.$store.dispatch('createFolderStore', {
      //   nameFolder: this.createFolderForm.nameFolder,
      // })

      // Si je n'ai pas de dossier en cours, je lance la fonction createFolderStore
      if(!this.currentFolder){
        this.$store.dispatch('createFolderStore', {
          nameFolder: this.createFolderForm.nameFolder,
        })
      //Sinon je lance la fonction updateFormStore
      }else{
        // console.log('je passe ici', this.currentTask)
        this.$store.dispatch('updateFolderStore', {
          idfolder: this.currentFolder._id,
          nameFolder: this.createFolderForm.nameFolder,
        })
      }
    },
    toggleFormFolder(folder){
      // console.log('toggleFormFolder')
       if(folder){
        this.currentFolder = folder
        this.createFolderForm.nameFolder = folder.nameFolder
      }
      else{
        this.createFolderForm.nameFolder = ""
        this.nameFolder = null
      }
      console.log(folder);
      this.dialogFolder = true
    },
    createTask(){
      // console.log('ok bien ajouter');
      //Si je n'ai pas de tache en cours, je lance la fonction createTaskStore
      console.log(this.createTaskForm.folderTask)
      console.log(this.createTaskForm.priorityTask)
      if(!this.currentTask){
        this.$store.dispatch('createTaskStore', {
          nameTask: this.createTaskForm.nameTask,
          priorityTask: this.createTaskForm.priorityTask,
          timeEstimateTask:this.createTaskForm.timeEstimateTask,
          timeRealTask:this.createTaskForm.timeRealTask,
          echeanceTask:this.createTaskForm.echeanceTask,
          rappelTask:this.createTaskForm.rappelTask,
          folderTask:this.createTaskForm.folderTask
        })
      //Sinon je lance la fonction updateTaskStore
      }else{
        // console.log('je passe ici', this.currentTask)
        this.$store.dispatch('updateTaskStore', {
          idtache: this.currentTask._id,
          nameTask: this.createTaskForm.nameTask,
          priorityTask: this.createTaskForm.priorityTask,
          timeEstimateTask:this.createTaskForm.timeEstimateTask,
          timeRealTask:this.createTaskForm.timeRealTask,
          echeanceTask:this.createTaskForm.echeanceTask,
          rappelTask:this.createTaskForm.rappelTask,
          folderId: this.createTaskForm.folderTask,
        })
      }
    },
    toggleFormulaire(task){
      // console.log(task,'toggleFormulaire')
      
      if(task){
        console.log(task.folderTask)
        this.currentTask = task
        this.createTaskForm.nameTask = task.nameTask
        this.createTaskForm.priorityTask = task.priorityTask
        this.createTaskForm.timeEstimateTask = task.timeEstimateTask
        this.createTaskForm.timeRealTask = task.timeRealTask
        this.createTaskForm.echeanceTask = task.echeanceTask
        this.createTaskForm.rappelTask = task.rappelTask
        this.createTaskForm.folderTask = task.folderTask
      }
      else{
        this.createTaskForm.nameTask = ""
        this.currentTask = null
      }
      // console.log(task);
      this.dialog = true
    },
    supprimer(id){
      // console.log(id);
      this.$store.dispatch('deleteTaskStore', id)
    },
    supprimerFolder(id){
      // console.log(id);
      this.$store.dispatch('deleteFolderStore', id)
    },
    today(dateToday){
      // console.log('Aujourdhui')
      this.$store.dispatch('todayStore', dateToday)
    },
    tomorrow(){

    },
    oneDay(){

    },
    come(){

    }
  },
  filters: {
    formatDate(val) {
      if (!val) { return '-' }
      
      let date = val.toDate()
      return moment(date).fromNow()
    },
    trimLength(val) {
      if (val.length < 200) { return val }
      return `${val.substring(0, 200)}...`
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



.boxleft{
   @media screen and (max-width: 690px) {
      display: none;
    }
}

    .programme{
      // box-shadow: 10px 10px 20px 0px rgba($dark, 0.3);
      padding: 30px 20px;
      // border-radius: 10px;

    } 

    .time,.task{
      display: flex;
      align-items: center;
      padding: 10px 0px;
      justify-content: space-between;
      align-items: center;

      .boxtime{
        display: flex;
      }
      .boxtime2{
        display: flex;
        justify-content: left;
        align-items: center;
        margin: 10px 0px;
        width: 100%;

        .circle{
          background-color: $yellow;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
       }
      }

      .titleprogramme{
        margin-left: 0.8rem;
        font-size: 12px;
        font-weight: bold;
      }
      .titleprogrammeboxright{
        font-size: 14px;
        font-weight: bold;
      }

      .totaltime{
        display: flex;
        font-size: 12px;
        opacity: 80%;
        z-index: 0;
      }

      .picto{
        width: 40px;
        margin-right:  5px;
      }
    }
    .border{
      border-top: 1px solid $bleu;
      width: 100%;
      margin : 20px  0; 
    }

    .activities{
      display: flex;
      justify-content: space-between;
      max-width: 15rem;

    }

   
</style>


