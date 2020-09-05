<template>
    <q-list bordered separator>
        <div class="row q-pa-sm">
            <div class="col-xs-12 col-sm-6 col-md-3">
                {{ member.firstName }} {{ member.lastName }}
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4">{{ member.email }}</div>

            <div class="col-xs-12 col-sm-6 col-md-3">{{ member.phone }}</div>

            <div class="col-xs-12 col-sm-6 col-md-2">
                <q-btn
                    @click.stop="showEditMember = true"
                    flat
                    round
                    dense
                    color="primary"
                    icon="edit"
                    style="font-size: 0.8em"
                />
                <q-btn
                    @click.stop="promptToDelete(id)"
                    flat
                    round
                    dense
                    color="red"
                    icon="delete"
                    style="font-size: 0.8em"
                />
            </div>
            <q-dialog v-model="showEditMember">
                <edit-member
                    @close="showEditMember = false"
                    :member="member"
                    :id="id"
                />
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
                    message:
                        "All attendance data on this member will be deleted!",
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

<style></style>
