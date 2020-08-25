import Vue from "vue";
import Vuex from "vuex";
import auth from "./store-auth";
import meetings from "./store-meetings";
import members from "./store-members";
import attendance from "./store-attendance";
import groups from "./store-groups";

Vue.use(Vuex);

export default function(/* { ssrContext } */) {
   const Store = new Vuex.Store({
      modules: {
         members,
         auth,
         meetings,
         attendance,
         groups
      },

      strict: process.env.DEV
   });

   return Store;
}
