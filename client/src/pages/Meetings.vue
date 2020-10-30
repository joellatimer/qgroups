<template>
    <q-page class="q-pa-md">
        <div class="row">
            <div class="col-xs-8 col-sm-6 q-pa-md" style="width: 350px">
                <q-table
                    title="Meetings"
                    dense
                    :data="arrayMeetings"
                    :columns="columns"
                    row-key="date"
                    class="bg-orange-1"
                    @row-click="showMeeting"
                >
                </q-table>
                <div>
                    <q-card-actions align="left">
                        <q-btn
                            label="New Meeting"
                            color="primary"
                            type="submit"
                        />
                    </q-card-actions>
                </div>
            </div>

            <div class="col-xs-8 col-sm-6 q-pa-md" style="width: 350px">
                <q-banner inline-actions class="bg-orange-4">
                    {{ groups.groupName }} Attendance
                </q-banner>
                <q-list 
                  bordered class="bg-orange-1">
                    <q-item  v-for="(attend, key) in attends" 
                        :key="key" 
                        :attends="attends" 
                        @click="attends.present = !attends.present"
                        :id="key">
                        <q-item-section>
                            {{ attend.firstName}} {{attend.lastName}}
                        </q-item-section>
                        <q-item-section side top>
		                     <q-checkbox v-model="attends.present" />
		                </q-item-section>
                    </q-item>
                </q-list>
            </div>
        </div>
    </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {

    data() {
        return {
            attends: {
                firstName: "",
                lastName: "",
                present:false,
                // "attid1" : {    
                //     "present" : true,
                //     "firstName" : "Nate",
                //     "lastName" : "Chapman"
                // },
                // "attid2" : {
                //     "present" : true,
                //     "firstName" : "Dan",
                //     "lastName" : "Martin"
                //     }
            
            },
            
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
    methods: {
        showMeeting(evt, row){
            console.log(row.attends)
            this.attends = row.attends
        }
    }

};
</script>

<style lang="sass">
.q-table__top,
thead tr:first-child th
    background-color: $orange-4
</style>
