import { LocalStorage, Loading } from 'quasar'
import { showErrorMessage } from '../Functions/showErrorMessage'
import { firebaseAuth } from '../boot/firebase'

const state = {
    loggedIn: false
}

const mutations = {
    setLoggedIn(state, value) {
        state.loggedIn = value
    }

}
const actions = {
    loginUser({ }, payload) {
        Loading.show()
        firebaseAuth
            .signInWithEmailAndPassword(payload.email, payload.password)
            .then((response) => {
                console.log('response: ', response)
            })
            .catch((error) => {
                showErrorMessage(error.message)
            })
    },
    logoutUser() {
        firebaseAuth.signOut()
    },

    handleAuthStateChange({ commit, dispatch }) {
        firebaseAuth.onAuthStateChanged((user) => {
            Loading.hide()
            if (user) {
                commit('setLoggedIn', true)
                LocalStorage.set('loggedIn', true)
                this.$router.push('/members')
                dispatch('members/fbReadData', null, { root: true })
                dispatch('groups/fbReadData', null, { root: true })
                dispatch('meetings/fbReadData', null, { root: true })
            } else {
                commit('members/clearMembers', null, { root: true })
                commit('members/setMembersDownloaded', false, { root: true })
                commit('setLoggedIn', false)
                LocalStorage.set('loggedIn', false)
                this.$router.replace('/')
            }
        })
    }
}

const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
