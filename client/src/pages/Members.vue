<template>
    <div>
        <q-page class="q-ma-lg">
            <q-banner inline-actions class="bg-orange-4">{{groups.groupName }} Community Members</q-banner>
            <q-card class="bg-orange-1" flat bordered>
                <member v-for="(member, key) in members" :key="key" :member="member" :id="key" />
            </q-card>
            <div class="q-pt-xs">
                <q-btn
                    @click="showAddMember=true"
                    class="bg-primary text-white"
                    label="Add a Member"
                />
            </div>
            <q-dialog v-model="showAddMember">
                <add-member @close="showAddMember=false" />
            </q-dialog>
        </q-page>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            showAddMember: false,
        };
    },
    computed: {
        ...mapGetters("members", ["members"]),
        ...mapGetters("groups", ["groups"]),
    },
    components: {
        member: require("components/Members/Member.vue").default,
        "add-member": require("components/Members/Modals/AddMember.vue")
            .default,
    },
    mounted() {
        this.$root.$on("showAddMember", () => {
            this.showAddMember = true;
        });
    },
};
</script>

<style>
.qtext {
    font-size: 1.5em;
}
</style>
