<template>
    <div class="q-pa-md">
        <div class="row">
            <div class="col-xs-8 col-sm-6 q-pa-md" style="width: 350px">
                <q-table
                    title="Meetings"
                    dense
                    :data="arrayMeetings"
                    :columns="columns"
                    row-key="date"
                    class="bg-orange-1"
                    clickable
                >
                </q-table>
            </div>

            <div class="col-xs-8 col-sm-6 q-pa-md" style="width: 350px">
                <q-banner inline-actions class="bg-orange-4">
                    {{ groups.groupName }} Attendance
                </q-banner>
                <q-list>
                    <attend
                        v-for="(member, key) in members"
                        :key="key"
                        :member="member"
                        :id="key"
                        class="bg-orange-1"
                    >
                    </attend>
                </q-list>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            columns: [
                {
                    name: "date",
                    required: true,
                    label: "Meeting Date",
                    align: "left",
                    field: "date",
                    sortable: true,
                },
                {
                    name: "type",
                    align: "center",
                    label: "Meeting Type",
                    field: "type",
                    sortable: true,
                },
                {
                    name: "attend",
                    label: "Attend %",
                    field: "attend",
                    sortable: true,
                },
            ],
        };
    },
    computed: {
        ...mapGetters("meetings", ["meetings"]),
        arrayMeetings() {
            return Object.values(this.meetings);
        },
        ...mapGetters("groups", ["groups"]),
        ...mapGetters("members", ["members"]),
    },
    components: {
        attend: require("components/Attend.vue").default,
    },
};
</script>

<style lang="sass">
.q-table__top,
thead tr:first-child th
    background-color: $orange-4
</style>
