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
    posts: []
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
    },
    setPosts(state, val) {
      state.posts = val
    }
  },
  actions: {
    async login({ dispatch }, loginForm) {
      // const {user} = await fb.auth.signInWithEmailAndPassword(form.email, form.password)
      // // fetch user profile and set in state
      // dispatch('fetchUserProfile', user)

      axios.post(url+'/connexion', {
        email: loginForm.email,
        password: loginForm.password
      })
      .then(function (response) {
        console.log(response);
        dispatch('fetchUserProfile', response);
      })
      .catch(function (error) {
        console.log(error);
      });

    },
    async fetchUserProfile({ commit }, user) {

      commit('setUserProfile', user)
      
      // change route to dashboard
      if (router.currentRoute.path === '/connexion') {
        router.push('/')
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
        dispatch('fetchUserProfile', response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
    },
    async logout({ commit }, loginForm) {
      // await fb.auth.signOut()

      // // clear userProfile and redirect to /login
      axios.post(url+'/logout', {
        
      })
      commit('setUserProfile', {})
      router.push('/connexion')
    },
    async createPost({ state, commit }, post) {
      // await fb.postsCollection.add({
      //   createdOn: new Date(),
      //   content: post.content,
      //   userId: fb.auth.currentUser.uid,
      //   userName: state.userProfile.name,
      //   comments: 0,
      //   likes: 0
      // })
    },
    async likePost ({ commit }, post) {
      // const userId = fb.auth.currentUser.uid
      // const docId = `${userId}_${post.id}`
    
      // // check if user has liked post
      // const doc = await fb.likesCollection.doc(docId).get()
      // if (doc.exists) { return }
    
      // // create post
      // await fb.likesCollection.doc(docId).set({
      //   postId: post.id,
      //   userId: userId
      // })
    
      // // update post likes count
      // fb.postsCollection.doc(post.id).update({
      //   likes: post.likesCount + 1
      // })
    },
    async updateProfile({ dispatch }, user) {
      // const userId = fb.auth.currentUser.uid
      // // update user object
      // const userRef = await fb.usersCollection.doc(userId).update({
      //   name: user.name,
      //   title: user.title
      // })
    
      // dispatch('fetchUserProfile', { uid: userId })
    
      // // update all posts by user
      // const postDocs = await fb.postsCollection.where('userId', '==', userId).get()
      // postDocs.forEach(doc => {
      //   fb.postsCollection.doc(doc.id).update({
      //     userName: user.name
      //   })
      // })
    
      // // update all comments by user
      // const commentDocs = await fb.commentsCollection.where('userId', '==', userId).get()
      // commentDocs.forEach(doc => {
      //   fb.commentsCollection.doc(doc.id).update({
      //     userName: user.name
      //   })
      // })
    }
  },
  
})


export default store