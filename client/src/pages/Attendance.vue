<template>
    <div>
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6">col</div>

            <div class="col-xs-12 col-sm-6 col-md-">col</div>
        </div>
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
