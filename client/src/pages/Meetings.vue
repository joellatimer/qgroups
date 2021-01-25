<template>
    <q-page class="q-pa-md">
        <div class="row">
            <div class="col-xs-8 col-sm-6 q-pa-md" style="width: 350px">
                 <q-table
                    title= "Meetings"
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
                  separator
                  bordered 
                  class="bg-orange-1"
                  >                  
                    <q-item 
                        v-for="(attend, key) in attends" 
                        :key="key"
                        >
                        <q-item-section>
                            {{ attend.firstName}} {{attend.lastName}}
                        </q-item-section>
                        <q-item-section 
                            side>
                            <q-checkbox
                                :value="attends.present"
                                @click.native="updateMeeting({id:'7928b72e-b096-4be5-a3ef-e00a6112bb9f', updates:{present: !attends.present}})"
                            >
                            </q-checkbox>
                        </q-item-section>
                        
                    </q-item>
                </q-list>
            </div>
        </div>
    </q-page>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    export default {
        data (){
            return {
                attends: {},
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
            }
        },
        computed: {
            ...mapGetters("meetings", ["meetings"]),
            ...mapGetters("groups", ["groups"]),
            ...mapGetters("members", ["members"]),
            arrayMeetings() {
                return Object.values(this.meetings)
                
                
        },
        },
        methods: {
            showMeeting(evt, row){
                console.log(row.attends)
                this.attends = row.attends
                
            },
            ...mapActions('meetings',['updateMeeting']),
    
           
        },
       

    };
</script>

<style lang="sass">
.q-table__top,
thead tr:first-child th
    background-color: $orange-4
</style>
