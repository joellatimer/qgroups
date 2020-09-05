<template>
    <div id="q-app">
        <div class="q-px-sm" style="max-width: 350px">
            <q-list>
                <q-item tag="label" v-ripple>
                    <q-item-section>
                        <q-item-label>Nate Chapman </q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-checkbox v-model="check1"></q-checkbox>
                    </q-item-section>
                </q-item>
            </q-list>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import { date } from "quasar";
export default {
    data() {
        return {
            showEditMember: false,
            check1: false,
            volume: 6,
            brightness: 3,
            mic: 8,
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
