<template>
    <div>

    <!-- <div class="modal">
        <div class="programme modal-content">
        <form @submit.prevent>
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
        
        <div>
            <label for="username"></label>
            <input v-model.trim="createTaskForm.username" type="text" placeholder="Nom de la tâche" id="username" />
        </div>

        <div>
            <label for="email2"></label>
            <input class="input-formulaire" v-model.trim="createTaskForm.email" type="text" placeholder="Adresse mail" id="email2" />
        </div>
        <button @click="createtask()" class="button">Ajouter</button>
        <a @click="toggleForm()">Revenir au tableau de bord</a>
        </form>
        
        </div>
    </div> -->
    
    
    </div>
</template>

<script>

export default {

data() {
    return {
        createTaskForm: {
            username: '',
        email: '',
      },
    dialog:false,
    on:{},
    attrs:{},
    }
    
  },
  methods: {
      createtask() {
          this.$store.dispatch('createTaskStore', {
              username: this.createTaskForm.username,
        email: this.createTaskForm.email,
      } )
    },
  }
}

</script>

<style>



</style>