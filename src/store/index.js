import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import axios from 'axios'

Vue.use(Vuex)

// realtime firebase connection
// fb.postsCollection.orderBy('createdOn', 'desc').onSnapshot(snapshot => {
//   let postsArray = []

//   snapshot.forEach(doc => {
//     let post = doc.data()
//     post.id = doc.id

//     postsArray.push(post)
//   })

//   store.commit('setPosts', postsArray)
// })




const url = 'http://localhost:8000/api/user';

const store = new Vuex.Store({
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
    deleteTask(state, id){
      let taskIndex = state.userTask.findIndex(t=>t.id ==id)
      state.userTask.splice(taskIndex,1)
    }

  },
  actions: {
    // rechercheCookieUser({commit}){
    //   axios.post(url+'/')
    //   .then(function(response){
    //     console.log(response);
    //     commit('enregistrementUtilisateur', response.data);
    //     axios.post(url+'/usertask',{
    //       id: response.data._id,
    //     })
    //     .then(function(response){
    //       console.log(response,"tache utilisateur");
    //       commit ('setUserTask', response.data);
    //     })
    //     axios.post(url+'/userfolder',{
    //       id: response.data._id,
    //     })
    //     .then(function(response){
    //       console.log(response,"dossier utilisateur");
    //       commit ('setUserFolder', response.data);
    //     })
    //     if (router.currentRoute.path === '/connexion') {
    //       router.push('/')
    //     }
    //   })
    // },
    login({commit}, loginForm) {
      // const {user} = await fb.auth.signInWithEmailAndPassword(form.email, form.password)
      // // fetch user profile and set in state
      // dispatch('traitementUtilisateur', user)

      axios.post(url+'/connexion',{
        email: loginForm.email,
        password: loginForm.password
      })
      .then(function (response) {
        console.log(response.data, "response.data");
        commit('enregistrementUtilisateur', response.data);
        axios.post(url+'/usertask',{
          id: response.data._id,
        })
        .then(function(response){
          console.log(response,"tache utilisateur");
          commit ('setUserTask', response.data);
        })
        axios.post(url+'/userfolder',{
          id: response.data._id,
        })
        .then(function(response){
          console.log(response,"dossier utilisateur");
          commit ('setUserFolder', response.data);
        })
        if (router.currentRoute.path === '/connexion') {
          router.push('/')
        }
      })
      .catch(function (error) {
        console.log(error);
      });

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
      console.log(createFolderForm)
      axios.post(url+'/addfolder', createFolderForm)
        .then(function (response) {
          console.log(response);
          dispatch('ajoutDeDossier', response.data);
        })
        .catch(function (error) {
          console.log(error);
        }); 
    },
    ajoutDeDossier({state}, nomDuDossier){
      state.userFolder.push(nomDuDossier)
    }, 
    createTaskStore({ dispatch, state }, createTaskForm) { 
        createTaskForm.user_id = state.userProfile._id
        console.log(state.userProfile._id)

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
        }
      }
    },
    updateFolderStore({dispatch}, updateFolder){
      console.log(updateFolder);
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
        console.log(state.userTask[i]);
        // console.log(idTache, state.userTask[i]._id);
        if(updateFolder.idfolder == state.userFolder[i]._id){
          // console.log("Yes!!");
          state.userFolder[i].nameFolder = updateFolder.nameFolder
        }
      }
    },
    deleteTaskStore({dispatch},id){
      // console.log(id,"id");
      axios.delete(url+`/delete/${id}`)
      .then(function (response) {
        // console.log(response);
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
      axios.delete(url+`/delete/${id}`)
      .then(function (response) {
        // console.log(response);
        // console.log(id, " id2");
        dispatch('suppressionDeFolder', id)
      })
    },
    suppressionDeFolder({state},idFolder){
      for(var i=0; i<state.userFolder.length; i++){
        // console.log(state.userTask[i]);
        // console.log(idTache, state.userTask[i]._id);
        if(idFolder == state.userFolder[i]._id){
          // console.log("Yes!!");
          state.userFolder.splice(i,1)
        }
      }
    },
    logout({ commit }, loginForm) {
            // // clear userProfile and redirect to /login
      axios.post(url+'/logout', {
        
      })
      commit('enregistrementUtilisateur', {})
      router.push('/connexion')
    },
  },
  
})


export default store