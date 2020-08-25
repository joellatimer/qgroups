<template>
    <q-item-section>
        <div class="row q-mb-sm">
            <q-input
                outlined
                @input="$emit('update:lastName', $event)"
                :value="lastName"
                :rules="[val => !!val || 'Field is required']"
                label="Last Name"
                class="col">
            </q-input>
        </div>
    </q-item-section>
</template>

<script>
export default {
      props:['lastName']

}
</script>

<style>

</style>