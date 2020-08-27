import Vue from "vue";

import { firebaseAuth, firebaseDb } from "boot/firebase";
import { uid } from "quasar";

const state = {
   members: {}
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
   }
};

const actions = {
   updateMember({ dispatch }, payload) {
      dispatch("fbUpdateMember", payload);
   },
   deleteMember({ dispatch }, id) {
      dispatch("fbDeleteMember", id);
   },
   addMember({ dispatch }, member) {
      let memberId = uid();
      let payload = {
         id: memberId,
         member: member
      };
      dispatch("fbAddMember", payload);
   },
   fbReadData({ commit }) {
      console.log("start reading from Firebase Members");
      let userId = firebaseAuth.currentUser.uid;

      let myRef = firebaseDb.ref("members/" + userId);
      myRef.on("child_added", snapshot => {
         let myMember = snapshot.val();

         let payload = {
            id: snapshot.key,
            member: myMember
         };

         commit("addMember", payload);
      });
      myRef.on("child_changed", snapshot => {
         let myMember = snapshot.val();

         let payload = {
            id: snapshot.key,
            updates: myMember
         };
         commit("updateMember", payload);
      });
      myRef.on("child_removed", snapshot => {
         let id = snapshot.key;
         commit("deleteMember", id);
      });
   },
   fbAddMember({}, payload) {
      let userId = firebaseAuth.currentUser.uid;
      let myRef = firebaseDb.ref("members/" + userId + "/" + payload.id);
      myRef.set(payload.member);
   },
   fbUpdateMember({}, payload) {
      let userId = firebaseAuth.currentUser.uid;
      let myRef = firebaseDb.ref("members/" + userId + "/" + payload.id);
      myRef.update(payload.updates);
   },
   fbDeleteMember({}, memberId) {
      let userId = firebaseAuth.currentUser.uid;
      let myRef = firebaseDb.ref("members/" + userId + "/" + memberId);
      myRef.remove();
   }
};
const getters = {
   members: state => {
      return state.members;
   }
};

export default {
   namespaced: true,
   state,
   mutations,
   actions,
   getters
};
