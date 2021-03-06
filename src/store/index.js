import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)


const url = 'http://localhost:8000/api/user';

const store = new Vuex.Store({
  plugins: [createPersistedState(
  //   {
  //   paths: ['{userProfile}','[userTask]','[userFolder]']
  // }
  )],
  state: {
    userProfile: {},
    userTask:[],
    userFolder:[],
  },
  mutations: {
    enregistrementUtilisateur(state, val) {
      state.userProfile = val
    },
    setUserTask(state, val) {
      state.userTask = val
    },
    setUserFolder(state, val) {
      state.userFolder = val
    },
    // deleteTask(state, id){
    //   let taskIndex = state.userTask.findIndex(t=>t.id ==id)
    //   state.userTask.splice(taskIndex,1)
    // }

  },
  actions: {
    login({commit}, loginForm) {
      axios.post(url+'/connexion',{
        email: loginForm.email,
        password: loginForm.password
      }, {withCredentials: true})
      .then(function (response) {
        // console.log(response.data, "response.data");
        commit('enregistrementUtilisateur', response.data);
        axios.post(url+'/usertask',{
          id: response.data._id,
        })
        .then(function(response){
          // console.log(response,"tache utilisateur");
          commit ('setUserTask', response.data);
        })
        axios.post(url+'/userfolder',{
          id: response.data._id,
        })
        .then(function(response){
          // console.log(response,"dossier utilisateur");
          commit ('setUserFolder', response.data);
        })
        if (router.currentRoute.path === '/connexion') {
          router.push('/dashboard')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    todayStore({state}, dateToday){
      console.log('Aujourdhui')
      for(var i=0; i<state.userTask.length; i++){
        console.log(state.userTask[i],"coucou");
        if(dateToday.echeanceTask == state.userTask[i].echeanceTask){
          console.log("Yes!!");
      //     console.log(state.userTask[i]._id, "????????");
        
        }
      }
     
    },
    signupStore({ dispatch }, form) { 
        axios.post(url+'/register', {
          username: form.username,
          email: form.email,
          password: form.password
        })
        .then(function (response) {
          console.log(response);
          dispatch('traitementUtilisateur', response);
        })
        .catch(function (error) {
          console.log(error);
        });
      
    },
    createFolderStore({dispatch, state}, createFolderForm){
      createFolderForm.user_id = state.userProfile._id
      console.log(createFolderForm,"coucou")
      axios.post(url+'/addfolder', createFolderForm)
        .then(function (response) {
          console.log(response.data._id, "id du dossier");
          dispatch('ajoutDeDossier', response.data);
        })
        .catch(function (error) {
          console.log(error);
        }); 
    },
    ajoutDeDossier({state}, nomDuDossier){
      state.userFolder.push(nomDuDossier)
      // console.log(nomDuDossier,"nomDuDossier");
    }, 
    createTaskStore({ dispatch, state }, createTaskForm) { 
        createTaskForm.user_id = state.userProfile._id
        // console.log(state.userProfile._id)

        axios.post(url+'/addtask', createTaskForm)
        .then(function (response) {
          // console.log(response);
          dispatch('ajoutDeTache', response.data);
        })
        .catch(function (error) {
          console.log(error);
        }); 
    },
    ajoutDeTache({state}, tache){
      state.userTask.push(tache)
    },    
    updateTaskStore({dispatch}, updateTask){
      axios.post(url+'/updateTask', updateTask)
        .then(function (response) {
          console.log(response);
          // console.log(state.userTask);
          dispatch('updateDeTache', updateTask);
        })
        .catch(function (error) {
          console.log(error);
        }); 
    },
    updateDeTache({state},updateTask){
      for(var i=0; i<state.userTask.length; i++){
        // console.log(state.userTask[i]);
        // console.log(idTache, state.userTask[i]._id);
        if(updateTask.idtache == state.userTask[i]._id){
          // console.log("Yes!!");
          state.userTask[i].nameTask = updateTask.nameTask
          state.userTask[i].priorityTask = updateTask.priorityTask
          state.userTask[i].timeEstimateTask = updateTask.timeEstimateTask
          state.userTask[i].timeRealTask = updateTask.timeRealTask
          state.userTask[i].echeanceTask = updateTask.echeanceTask
          state.userTask[i].rappelTask = updateTask.rappelTask
          state.userTask[i].folderTask = updateTask.folderTask
          console.log(updateTask.folderId, "dossier normalement mis ?? jour");
        }
      }
    },
    updateFolderStore({dispatch}, updateFolder){
      // console.log(updateFolder);
      axios.post(url+'/updateFolder', updateFolder)
        .then(function (response) {
          console.log(response);
          // console.log(state.userTask);
          dispatch('updateDeFolder', updateFolder);
        })
        .catch(function (error) {
          console.log(error);
        }); 
    },
    updateDeFolder({state},updateFolder){
      for(var i=0; i<state.userFolder.length; i++){
        console.log(state.userFolder[i], "dossier utilisateur en cours");
        // console.log(idTache, state.userTask[i]._id);
        if(updateFolder.idfolder == state.userFolder[i]._id){
          // state.userFolder[i].idfolder = updateFolder.idfolder
          state.userFolder[i].nameFolder = updateFolder.nameFolder
        }
        
      }
    },
    deleteTaskStore({dispatch},id){
      // console.log(id,"id");
      axios.delete(url+`/task/delete/${id}`)
      .then(function (response) {
        console.log(response);
        // console.log(id, " id2");
        dispatch('suppressionDeTache', id)
      })
    },
    suppressionDeTache({state},idTache){
      for(var i=0; i<state.userTask.length; i++){
        // console.log(state.userTask[i]);
        // console.log(idTache, state.userTask[i]._id);
        if(idTache == state.userTask[i]._id){
          // console.log("Yes!!");
          state.userTask.splice(i,1)
        }
      }
    },
    deleteFolderStore({dispatch},id){
      // console.log(id,"id");
      axios.delete(url+`/folder/delete/${id}`)
      .then(function (response) {
        // console.log(response);
        // console.log(id, " id2");
        dispatch('suppressionDeFolder', id)
      })
    },
    suppressionDeFolder({state},idFolder){
      for(var i=0; i<state.userFolder.length; i++){
        // console.log(state.userFolder[i], "console log suppression de folder");
        // console.log(idTache, state.userTask[i]._id);
        if(idFolder == state.userFolder[i]._id){
          // console.log("Yes!!");
          state.userFolder.splice(i,1)
        }
      }
    },
    logout({ commit }) {
      // // clear userProfile and redirect to /login
      axios.post(url+'/logout', {withCredentials:true})
      .then(()=>{
        console.log('LOGGED OUT')
        commit('enregistrementUtilisateur', {})
        router.push('/')
      })
    },
  },
  
})


export default store

