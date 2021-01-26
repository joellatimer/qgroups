<template>
    <q-page class="q-pa-md">
        <div class="row">
            <div class="col-xs-8 col-sm-6 q-pa-md" style="width: 350px">
                <h3>Hello</h3>
            </div>
                
            <div class="col-xs-8 col-sm-6 q-pa-md" style="width: 350px">
                <q-banner inline-actions class="bg-orange-4">
                    {{ groups.groupName }} Attendance
                </q-banner>
                               
                 <h3>hello</h3>
            
            </div>
        </div>
    </q-page>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    export default {
        data (){
            return {
                meetings : {
                    "kiYyiUrPpJZC9Shw3gSsJHtEynq1" : {
                        id1 : {
                            att : "90%",
                            date : "2020/5/23",
                            type : "regular",   
                            "510cf17d-81e1-451c-901f-e8b9fa24f920": {
                                present: true,
                                firstName : "Tim",
                                lastName : "Bottoms"
                            },
                            "510cf17d-81e1-451d-901f-e8b9fa24f921": {
                                present: true,
                                firstName : "John",
                                lastName : "Smith"
                            }
                        } 
                    },
                     "kiYyiUrPpJZC9Shw3gSsJHtEynq1" : {
                        id1 : {
                            att : "80%",
                            date : "2020/5/17",
                            type : "regular",   
                            "510cf17d-81e1-451d-901f-e8b9fa24f921": {
                                present: true,
                                firstName : "John",
                                lastName : "Smith"
                            },
                            "510cf17d-81e1-451c-901f-e8b9fa24f920": {
                                present: true,
                                firstName : "Tim",
                                lastName : "Bottoms"
                            },
                        } 
                    }  
                }  
            } 
        }
      
    };

</script>

<style lang="sass">
.q-table__top,
thead tr:first-child th
    background-color: $orange-4
</style>
