<template>
    <q-page class="q-pa-md">
        <div class="row">
            <div class="col-xs-8 col-sm-6 q-pa-md" style="width: 350px">
                 <q-banner inline-actions class="bg-orange-4">
                        {{groups.groupName}} Community Meetings
                </q-banner>
                <q-list dense bordered>
                    <q-item
                      v-for="(meeting, key) in meetings"
                      :key="key"
                      class="q-my-xs"
                      :meeting = "meeting"
                      :id="key"
                      clickable
                      v-ripple>
                        <q-item-section>
                            <div>
                                {{meeting.date}}
                            </div>
                        </q-item-section>


                        <q-item-section>
                            <q-item-label>
                                 {{meeting.type}} 
                            </q-item-label>
                        </q-item-section>
                        <q-item-section side>
                           <q-item-label>
                                {{meeting.percent}} 
                            </q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
                </div>
                
            <div class="col-xs-8 col-sm-6 q-pa-md" style="width: 350px">
                <q-banner inline-actions class="bg-orange-4">
                    {{groups.groupName}} Community Attendance
                </q-banner>
                <q-list bordered separator>
                    <q-item
                      v-for="(attend, key) in attends"
                      :key="key"
                      class="q-my-sm"
                      :meetings = "attends"
                      :id="key"
                      clickable
                      v-ripple>
                  
                        <q-item-section>
                            <div>{{meeting.att1.firstName}}</div>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>{{meeting.att1.lastName}}</q-item-label>
                        </q-item-section>
                        <q-item-section></q-item-section>                           
                            <q-item-label>{{meeting.att1.present}}</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>   
                 
            </div>

        </div>
    </q-page>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    export default {
        data (){
            return {
              
            }  
        },
        computed: {
            ...mapGetters("meetings", ["meetings"]),
            ...mapGetters("groups", ["groups"])
        }
    }

</script>

<style lang="sass">
.q-table__top,
thead tr:first-child th
    background-color: $orange-4
</style>
