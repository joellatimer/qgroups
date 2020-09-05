/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import { uid } from 'quasar';
import Vue from 'vue';
import { firebaseAuth, firebaseDb } from '../boot/firebase';

const state = {
    members: {},
};

const mutations = {
    updateMember(state, payload) {
        Object.assign(state.members[payload.id], payload.updates);
    },
    deleteMember(state, id) {
        Vue.delete(state.members, id);
    },
    addMember(state, payload) {
        Vue.set(state.members, payload.id, payload.member);
    },
    clearMembers(state) {
        state.members = {};
    },
};

const actions = {
    updateMember({ dispatch }, payload) {
        dispatch('fbUpdateMember', payload);
    },
    deleteMember({ dispatch }, id) {
        dispatch('fbDeleteMember', id);
    },
    addMember({ dispatch }, member) {
        const memberId = uid();
        const payload = {
            id: memberId,
            member,
        };
        dispatch('fbAddMember', payload);
    },
    fbReadData({ commit }) {
        console.log('start reading from Firebase Members');
        const userId = firebaseAuth.currentUser.uid;

        const myRef = firebaseDb.ref(`members/${userId}`);
        myRef.on('child_added', (snapshot) => {
            const myMember = snapshot.val();

            const payload = {
                id: snapshot.key,
                member: myMember,
            }

            commit('addMember', payload);
        })
        myRef.on('child_changed', (snapshot) => {
            const myMember = snapshot.val();

            const payload = {
                id: snapshot.key,
                updates: myMember,
            };
            commit('updateMember', payload);
        });
        myRef.on('child_removed', (snapshot) => {
            const id = snapshot.key;
            commit('deleteMember', id);
        });
    },
    fbAddMember({ }, payload) {
        const userId = firebaseAuth.currentUser.uid;
        const myRef = firebaseDb.ref(`members/${userId}/${payload.id}`);
        myRef.set(payload.member);
    },
    fbUpdateMember({ }, payload) {
        const userId = firebaseAuth.currentUser.uid;
        const myRef = firebaseDb.ref(`members/${userId}/${payload.id}`);
        myRef.update(payload.updates);
    },
    fbDeleteMember({ }, memberId) {
        const userId = firebaseAuth.currentUser.uid;
        const myRef = firebaseDb.ref(`members/${userId}/${memberId}`);
        myRef.remove();
    },
};
const getters = {
    members: (state) => state.members,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
