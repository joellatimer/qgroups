<template>
    <q-form @submit.prevent="submitForm">
        <div class="card">
            <q-card class="q-mt-lg" bordered>
                <div class="row q-ma-md">
                    <q-banner class="bg-primary col" dark>
                        <template v-slot:avatar>
                            <q-icon name="account_circle" color="black" />
                        </template>
                        Login to access the Missional Communities Application
                    </q-banner>
                </div>
                <div>
                    <div class="q-gutter-md q-ma-md" style="max-width: 400px">
                        <!-- <q-select
                            outlined
                            label='Group'
                            value
                            ref='group'
                            :v-model='model'
                            :options='options'
                        /> -->
                        <q-input
                            outlined
                            ref="email"
                            lazy-rules
                            v-model="formData.email"
                            class="col"
                            label="Group"
                            stack-label
                        />
                    </div>
                </div>
                <div class="row q-ma-md q-gutter-md" style="max-width: 390px">
                    <q-input
                        outlined
                        ref="password"
                        v-model="formData.password"
                        class="col"
                        :rules="[
                            (val) =>
                                val.length >= 6 ||
                                'Please use minimum 6 characters.',
                        ]"
                        lazy-rules
                        label="Password"
                        type="password"
                        stack-label
                    />
                </div>
                <div class="row q-ma-md">
                    <q-space />
                    <q-btn color="primary" label="Login" type="submit" />
                </div>
            </q-card>
        </div>
    </q-form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data() {
        return {
            formData: {
                email: "",
                password: "",
            },
            model: null,
            options: ["Springdale Woods", "East Macon"],
        };
    },
    methods: {
        ...mapActions("auth", ["loginUser"]),
        ...mapGetters("groups", ["groups"]),
        submitForm() {
            let email1 =
                this.$refs.email.value.replace(/\s/g, "").toLowerCase() +
                "@gmail.com";

            this.$refs.password.validate();

            if (!this.$refs.password.hasError) {
                let payload = {
                    email: email1,
                    password: this.$refs.password.value,
                };
                this.loginUser(payload);
            }
        },
    },
    computed: {},
};
</script>

<style>
.card {
    max-width: 500px;
    margin: 0 auto;
}
</style>
