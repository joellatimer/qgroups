<template>
    <q-item-section>
        <div class="row q-mb-sm">
            <q-input
            outlined
            label="Join Date"
            :value="joinDate"
            @input="$emit('update:joinDate', $event)">
                <template v-slot:append>
                    <q-icon
                        v-if="joinDate"
                        @click="$emit('clear')"
                        name="close"
                        class="cursor-pointer" />
                    <q-icon 
                    name="event"        class="cursor-pointer">
                        <q-popup-proxy>
                            <q-date 
                            :value="joinDate" 
                            @imput="$emit('update:joinDate', $event)" 
                            />
                        </q-popup-proxy>
                    </q-icon>

                </template>
            </q-input>
        </div>
    </q-item-section>
</template>

<script>
export default {
    props: ['joinDate']

}
</script>

<style>

</style>