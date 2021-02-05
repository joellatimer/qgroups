<template view="hHh lpR fFf">
    <q-layout>
        <q-header class="bg-primary" elevated>
            <q-toolbar>
                <!-- <q-toolbar-title>
                Communities
                </q-toolbar-title>-->
                <q-tabs class="tabs">
                    <q-route-tab
                        v-for="(nav, index) in navs"
                        :key="index"
                        :to="nav.to"
                        :icon="nav.icon"
                        :label="nav.label"
                    />
                </q-tabs>

                <q-space></q-space>
                <q-btn
                    v-if="loggedIn"
                    to="/"
                    @click="logoutUser"
                    flat
                    icon-right="account_circle"
                    label="logout"
                    class="absolute-right"
                />
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { openURL } from "quasar";
export default {
    name: "Layout",
    data() {
        return {
            leftDrawerOpen: this.$q.platform.is.desktop,
            navs: [
                {
                    label: "Members",
                    to: "/members",
                },
                {
                    label: "Meetings",
                    to: "/meetings",
                },
                {
                   label: 'Admin',
                   to: '/admin'
                }
            ],
        };
    },
    computed: {
        ...mapState("auth", ["loggedIn"]),
        openURL,
    },
    methods: {
        ...mapActions("auth", ["logoutUser"]),
    },
};
</script>

<style>
@media screen and (min-width: 768px) {
    /* .q-footer {
        display: none;
    } */
}
.q-drawer .q-router-link-exact-active {
    color: white !important;
}
.tabs {
    font-size: x-small;
}
</style>
