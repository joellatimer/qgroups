import Vue from "vue";
import { firebaseDb, firebaseAuth } from "boot/firebase";
import { uid } from "quasar";

const state = {
   groups: {}
};

const mutations = {
   addGroup(state, payload) {
      Vue.set(state.groups, payload.id, payload.group);
   }
};
const actions = {
   fbReadData({ commit }) {
      console.log("start reading from Firebase Groups");
      let groupId = firebaseAuth.currentUser.uid;
      let myRef = firebaseDb.ref("groups/" + groupId);
      myRef.on("child_added", snapshot => {
         let myGroup = snapshot.val();
         let payload = {
            id: snapshot.key,
            group: myGroup
         };

         commit("addGroup", payload);
      });
   }
};

const getters = {
   groups: state => {
      return state.groups;
   }
};

export default {
   namespaced: true,
   state,
   mutations,
   actions,
   getters
};
