/* eslint-disable no-unused-vars */
import { uid } from 'quasar'
// eslint-disable-next-line import/no-extraneous-dependencies
import Vue from 'vue'
import { firebaseAuth, firebaseDb } from '../boot/firebase'

const state = {
    meetings: {}
}

const mutations = {
    addMeeting(state, payload) {
        Vue.set(state.meetings, payload.id, payload.myMeeting)
    },
    updateMeeting(state, payload) {
        Object.assign(state.meetings[payload.id], payload.updates)
    }
}
const actions = {
    updateMeeting({ commit }, payload) {
        // commit('updateMeeting', payload)
        console.log('payload:', payload.id)
        console.log('payload:', payload.updates)
    },

    fbReadData({ commit }) {
        console.log('start reading from Firebase Meetings')
        const userId = firebaseAuth.currentUser.uid
        const myRef = firebaseDb.ref(`meetings/${userId}`)
        myRef.on('child_added', (snapshot) => {
            const myMeeting = snapshot.val()

            const payload = {
                id: snapshot.key,
                myMeeting
            }
            console.log(payload)
            commit('addMeeting', payload)
        })
    }
}

const getters = {
    meetings: (state) => state.meetings,
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
