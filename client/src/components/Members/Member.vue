<template>
    <q-list bordered separator dense>
        <div class="row q-pa-sm">
            <div class="col-xs-12 col-sm-2 col-md-2">{{member.firstName}} {{ member.lastName}}</div>

            <div class="col-xs-12 col-sm-2 col-md-2">{{ member.email }}</div>

            <div class="col-xs-12 col-sm-2 col-md-2">{{ member.phone}}</div>

            <div class="col-xs-12 col-sm-2 col-md-1">
                <q-btn
                    @click.stop="showEditMember=true"
                    flat
                    round
                    dense
                    color="primary"
                    icon="edit"
                />
                <q-btn @click.stop="promptToDelete(id)" flat round dense color="red" icon="delete" />
            </div>
            <q-dialog v-model="showEditMember">
                <edit-member @close="showEditMember=false" :member="member" :id="id" />
            </q-dialog>
        </div>
    </q-list>
</template>         
          

<script>
import { mapActions } from "vuex";
import { date } from "quasar";
export default {
    data() {
        return {
            showEditMember: false,
        };
    },
    props: ["member", "id"],
    methods: {
        ...mapActions("members", ["deleteMember"]),
        promptToDelete(id) {
            this.$q
                .dialog({
                    title: "Confirm",
                    message: "Confirm delete?",
                    ok: {
                        push: true,
                    },
                    cancel: {
                        color: "negative",
                    },
                    persistent: true,
                })
                .onOk(() => {
                    this.deleteMember(id);
                });
        },
    },

    components: {
        "edit-member": require("components/Members/Modals/EditMember.vue")
            .default,
    },
};
</script>

<style>
</style>