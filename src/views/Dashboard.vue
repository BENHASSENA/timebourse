<template>
  <div id="dashboard"> 
    <!-- titre du dashboard -->
    <h1 class="title1">Tableau de bord</h1>
    <p class="title2">Gestion des tâches</p>
    <!-- barre de navigation du dashboard -->
    <div class="navbaruser">
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
          <img class="en-cours" src="../assets/images/picto-compte.png" alt="picto-compte"/>
        </router-link>
      </li>
      <li>
        <router-link to="/settings">
          <img class="en-cours" src="../assets/images/picto-settings.png" alt="picto-settings"/>
        </router-link>
      </li>
    </div>
    <!-- contenu du dashboard -->
    <div class="containerboard">
      <div class="boxleft">
        <div class="programme">
          <div class="time">
            <div class="boxtime">
              <span><img src="../assets/images/picto-sun.png" alt="picto-sun"/></span>
              <p class="titleprogramme">Aujourd'hui</p>
            </div>
            <p class="totaltime">4h</p>
          </div>
          <div class="time">
            <div class="boxtime">
              <span><img src="../assets/images/picto-suntomorrow.png" alt="picto-suntomorrow"/></span>
              <p class="titleprogramme">Demain</p>
            </div>
            <p class="totaltime">6h</p>
          </div>
          <div class="time">
            <div class="boxtime">
              <span><img src="../assets/images/picto-calendar.png" alt="picto-calendar"/></span>
              <p class="titleprogramme">Un jour</p>
            </div>
            <p class="totaltime">2h</p>
          </div>
          <div class="time">
            <div class="boxtime">
              <span><img src="../assets/images/picto-sunoneday.png" alt="picto-sunoneday"/></span>
              <p class="titleprogramme">A venir</p>
            </div>
            <p class="totaltime">20h</p>
          </div>
          <div class="border"></div>
          <div class="time">
            <div class="boxtime2">
              <span class="circle"><img src="../assets/images/picto-dossier.png" alt="picto-dossier"/></span>
              <p class="titleprogramme">Travail</p>
            </div>
            <p class="totaltime">10h</p>
          </div>
          <div class="time">
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
              <p class="titleprogramme">Maison</p>
            </div>
            <p class="totaltime">6h</p>
          </div>
          <div class="time">
            <div class="boxtime2">
              <span class="circle"><img src="../assets/images/picto-dossier.png" alt="picto-dossier"/></span>
              <p class="titleprogramme">Sommeil</p>
            </div>
            <p class="totaltime">10h</p>
          </div>
        </div>
      </div>

      <div class="boxcenter">
        <div class="programme2">
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
        <div  v-for="(task, i) in userTask" :key="i" class="programme2">
          <div class="task">
            <div class="boxtime">
              <span class="picto"><img src="../assets/images/picto-check.png" alt="picto-check"/></span>
              <p class="titleprogramme">{{task.nameTask}}</p>
            </div>
            <p class="totaltime">
            <v-icon @click="toggleFormulaire(task)">{{ icons.mdiPencil }}</v-icon>
            <v-icon @click="supprimer()">{{ icons.mdiDelete }}</v-icon>
            </p>
          </div>
        </div>

      </div>

      <div class="boxright">
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
      </div>
    </div>
    <!-- utilisation du composant Componantmodal -->
    <transition name="fade">
      <CommentModal v-if="showCommentModal" :post="selectedPost" @close="toggleCommentModal()"></CommentModal>
    </transition>
    <!-- creation d'un post -->
    <section>
      <div class="col1">
        <div class="profile">
          <h5>{{ userProfile.name }}</h5>
          <p>{{ userProfile.title }}</p>
          <div class="create-post">
            <p>create a post</p>
            <form @submit.prevent>
              <textarea v-model.trim="post.content"> hello</textarea>
              <button @click="createPost()" :disabled="post.content === ''" class="button">post</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col2">
        <div v-if="posts.length">
          <div v-for="post in posts" :key="post.id" class="post">
            <h5>{{ post.userName }}</h5>
            <span>{{ post.createdOn | formatDate }}</span>
            <p>{{ post.content | trimLength }}</p>
            <ul>
              <li><a @click="toggleCommentModal(post)">comments {{ post.comments }}</a></li>
              <li><a @click="likePost(post.id, post.likes)">likes {{ post.likes }}</a></li>
              <li><a @click="viewPost(post)">view full post</a></li>
            </ul>
              </div>
            </div>
            <div v-else>
          <p class="no-results">There are currently no posts</p>
        </div>
      </div>
    </section>
    <!-- full post modal -->
    <transition name="fade">
      <div v-if="showPostModal" class="p-modal">
        <div class="p-container">
          <a @click="closePostModal()" class="close">close</a>
          <div class="post">
            <h5>{{ fullPost.userName }}</h5>
            <span>{{ fullPost.createdOn | formatDate }}</span>
            <p>{{ fullPost.content }}</p>
            <ul>
              <li><a>comments {{ fullPost.comments }}</a></li>
              <li><a>likes {{ fullPost.likes }}</a></li>
            </ul>
          </div>
          <div v-show="postComments.length" class="comments">
            <div v-for="comment in postComments" :key="comment.id" class="comment">
              <p>{{ comment.userName }}</p>
              <span>{{ comment.createdOn | formatDate }}</span>
              <p>{{ comment.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- formulaire de la pop up -->
    <v-dialog
            v-model="dialog"
            max-width="600px"
    >
      <v-card>
          <v-container>
            <div class="programme">
              <div class="task">
                <div class="boxtime">
                  <span class="picto"><input type="checkbox"></span>
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
                    <select class="totaltime" v-model="createTaskForm.priorityTask"  id="priority">
                      <option value="">Pas de priorité</option>
                      <option value="1">Faible priorité</option>
                      <option value="2">Moyenne priorité</option>
                      <option value="3">Haute priorité</option>
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

  </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'
import CommentModal from '@/components/CommentModal'
import {
    mdiPencil,
    mdiDelete,
    mdiClockTimeFive,
    mdiTimer,
  } from '@mdi/js'

export default {
  components: {
    CommentModal,
  },
  data() {
    return {
      createTaskForm: {
        nameTask: '',
        priorityTask: '',
        timeEstimateTask:'',
        timeRealTask:'',
        echeanceTask:'',
        rappelTask:'',
      },
      showFormulaire: false,
      post: {
        content: ''
      },
      showCommentModal: false,
      selectedPost: {},
      showPostModal: false,
      fullPost: {},
      postComments: [],
      dialog: false,
      time: '',
      menu1:'',
      date:'',
      admins: [
        ['Settings', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Haute priorité'],
        ['Moyenne priorité'],
        ['Faible priorité'],
        ['Pas de priorité'],
      ],
      currentTask:{},
      icons: {
        mdiPencil,
        mdiDelete,
        mdiClockTimeFive,
        mdiTimer
      },
    }
    },
  computed: {
    ...mapState(['userProfile', 'posts', 'userTask']),
    // ...mapGetters(['userTask']),
    
  },
  methods: {
    createTask() {
      console.log('ok bien ajouter');
        this.$store.dispatch('createTaskStore', {
        nameTask: this.createTaskForm.nameTask,
        priorityTask: this.createTaskForm.priorityTask,
        timeEstimateTask:this.createTaskForm.timeEstimateTask,
        timeRealTask:this.createTaskForm.timeRealTask,
        echeanceTask:this.createTaskForm.echeanceTask,
        rappelTask:this.createTaskForm.rappelTask,
        })
    },
    toggleFormulaire(task){
      if(task){
        this.currentTask = task
        this.createTaskForm.nameTask = task.nameTask
      }
      else{
         this.createTaskForm.nameTask = ""
      }
      console.log(task);
      this.dialog = true
    },
    createPost() {
      this.$store.dispatch('createPost', { content: this.post.content })
      this.post.content = ''
    },
    supprimer(){
      console.log("effacer");
       this.$store.dispatch('deleteTaskStore', {

        })
    },
    toggleCommentModal(post) {
      this.showCommentModal = !this.showCommentModal

      // if opening modal set selectedPost, else clear
      if (this.showCommentModal) {
        this.selectedPost = post
      } else {
        this.selectedPost = {}
      }
    },
    likePost(id, likesCount) {
      this.$store.dispatch('likePost', { id, likesCount })
    },
    async viewPost(post) {
      // const docs = await commentsCollection.where('postId', '==', post.id).get()

      // docs.forEach(doc => {
      //   let comment = doc.data()
      //   comment.id = doc.id
      //   this.postComments.push(comment)
      // })

      // this.fullPost = post
      // this.showPostModal = true
    },
    closePostModal() {
      this.postComments = []
      this.showPostModal = false
    },
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


.toto{
  font-size: 16px;
  color: $bleu;
}

.yellow{
  color: $yellow;
}
    .programme{
      box-shadow: 10px 10px 20px 0px rgba($dark, 0.3);
      padding: 30px 20px;
      border-radius: 10px;

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


