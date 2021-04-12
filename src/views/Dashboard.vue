<template>
  <div id="dashboard"> 
    <h1 class="title1">Tableau de bord</h1>
    <p class="title2">Gestion des tâches</p>
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
          <img src="../assets/images/picto-activities.png" alt="picto-activities"/>
        </router-link>
      </li>
      <li>
        <router-link to="/statistiques">
          <img src="../assets/images/picto-statistiques.png" alt="picto-statistiques"/>
        </router-link>
      </li>
      <li>
        <router-link to="/rapports">
          <img src="../assets/images/picto-rapports.png" alt="picto-rapports"/>
        </router-link>
      </li>
      <li>
        <router-link to="/objectifs">
          <img src="../assets/images/picto-goals.png" alt="picto-goals"/>
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
    </div>
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
          <p class="priorityred">Haute priorité</p>   
        </div>
        <div class="programme2">
          <div class="task">
            <div class="boxtime">
              <span class="picto"><img src="../assets/images/picto-check.png" alt="picto-check"/></span>
              <span class="picto"><img src="../assets/images/picto-chrono.png" alt="picto-chrono"/></span>
              <p class="titleprogramme">Nom de la tâche</p>
            </div>
            <p class="totaltime">Aujourd'hui</p>
          </div>
        </div>
        <div class="programme2">
          <div class="task">
            <div class="boxtime">
              <span class="picto"><img src="../assets/images/picto-check.png" alt="picto-check"/></span>
              <span class="picto"><img src="../assets/images/picto-chrono.png" alt="picto-chrono"/></span>
              <p class="titleprogramme">Nom de la tâche</p>
            </div>
            <p class="totaltime">Aujourd'hui</p>
          </div>
        </div>
        <div class="titlepriority">
          <p class="priorityyellow">Moyenne priorité</p>   
        </div>
        <div class="programme2">
          <div class="task">
            <div class="boxtime">
              <span class="picto"><img src="../assets/images/picto-check.png" alt="picto-check"/></span>
              <span class="picto"><img src="../assets/images/picto-chrono.png" alt="picto-chrono"/></span>
              <p class="titleprogramme">Nom de la tâche</p>
            </div>
            <p class="totaltime">Aujourd'hui</p>
          </div>
        </div>
        <div class="titlepriority">
          <p class="prioritybleu">Faible priorité</p>   
        </div>
        <div class="programme2">
          <div class="task">
            <div class="boxtime">
              <span class="picto"><img src="../assets/images/picto-check.png" alt="picto-check"/></span>
              <span class="picto"><img src="../assets/images/picto-chrono.png" alt="picto-chrono"/></span>
              <p class="titleprogramme">Nom de la tâche</p>
            </div>
            <p class="totaltime">Aujourd'hui</p>
          </div>
        </div>
        <div class="titlepriority">
          <p class="prioritygrey">Pas de priorité</p>   
        </div>
        <div class="programme2">
          <div class="task">
            <div class="boxtime">
              <span class="picto"><img src="../assets/images/picto-check.png" alt="picto-check"/></span>
              <span class="picto"><img src="../assets/images/picto-chrono.png" alt="picto-chrono"/></span>
              <p class="titleprogramme">Nom de la tâche</p>
            </div>
            <p class="totaltime">Aujourd'hui</p>
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
    

    <transition name="fade">
      <CommentModal v-if="showCommentModal" :post="selectedPost" @close="toggleCommentModal()"></CommentModal>
    </transition>

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

    <v-dialog
            v-model="dialog"
            max-width="600px"
          >
      <v-card>
        <v-card-text>
          <v-container>
             <!-- Nom de la tâche -->
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Ajouter une tâche"
                  required
                >
                {{ createTaskForm.nameTask}}
                </v-text-field>
              </v-col>
            <!--  Priorité -->
              <v-list-group
                  no-action
                  sub-group
                >
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title>Priorité</v-list-item-title>
                    </v-list-item-content>
                  </template>

                  <v-list-item
                    v-for="([title], i) in cruds"
                    :key="i"
                    link
                  >
                    <v-list-item-title v-text="title"></v-list-item-title>

                  </v-list-item>
              </v-list-group>
             <!-- Temps estimé -->
              <v-list-group
                      no-action
                      sub-group
                    >
                      <template v-slot:activator>
                        <v-list-item-content>
                          <v-list-item-title>Temps estimé</v-list-item-title>
                        </v-list-item-content>
                      </template>
                        <v-time-picker
                        v-model="time"
                        dark
                        class="mt-4"
                        format="24hr"
                        scrollable>
                        </v-time-picker>

              </v-list-group>
             <!-- Temps réél -->
              <v-list-group
                      no-action
                      sub-group
                    >
                      <template v-slot:activator>
                        <v-list-item-content>
                          <v-list-item-title>Temps réél</v-list-item-title>
                        </v-list-item-content>
                      </template>
                        <v-time-picker
                        v-model="time"
                        dark
                        class="mt-4"
                        format="24hr"
                        scrollable>
                        </v-time-picker>

              </v-list-group>
             <!-- Echéance -->
            <v-list-group
                no-action
                sub-group
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>Echéance</v-list-item-title>
                  </v-list-item-content>
                </template>
               
                <v-col
                  cols="12"
                  lg="12"
                >
                  <v-menu
                    ref="menu1"
                    v-model="menu1"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="Date"
                        persistent-hint
                        prepend-icon="mdi-calendar"
                        v-bind="attrs"
                        @blur="date = parseDate(dateFormatted)"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      no-title
                      @input="menu1 = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>

            </v-list-group>
             <!-- Rappel -->
            <v-list-group
                no-action
                sub-group
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>Rappel</v-list-item-title>
                  </v-list-item-content>
                </template>
               
                <v-col
                  cols="12"
                  lg="12"
                >
                  <v-menu
                    ref="menu1"
                    v-model="menu1"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="Date"
                        persistent-hint
                        prepend-icon="mdi-calendar"
                        v-bind="attrs"
                        @blur="date = parseDate(dateFormatted)"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      no-title
                      @input="menu1 = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>

            </v-list-group>         
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false , createTask()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'
import CommentModal from '@/components/CommentModal'


export default {
  components: {
    CommentModal,
  },
  data() {
    return {
      createTaskForm: {
        nameTask: '',
        // priorityTask: '',
        // timeEstimateTask:'',
        // timeRealTask:'',
        // echeanceTask:'',
        // rappelTask:'',
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
    }
    },
  computed: {
    ...mapState(['userProfile', 'posts']),

  },
  methods: {
    createTask() {
      console.log('ok bien ajouter');
        this.$store.dispatch('createTaskStore', {
        nameTask: this.createTaskForm.nameTask,
        // priorityTask: this.createTaskForm.priorityTask,
        // timeEstimateTask:this.createTaskForm.timeEstimateTask,
        // timeRealTask:this.createTaskForm.timeRealTask,
        // echeanceTask:this.createTaskForm.echeanceTask,
        // rappelTask:this.createTaskForm.rappelTask,
        })
    },
    createPost() {
      this.$store.dispatch('createPost', { content: this.post.content })
      this.post.content = ''
    },
    toggleFormulaire(){
      this.dialog = true
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

</style>
