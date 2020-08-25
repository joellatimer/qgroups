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

                <div class="row q-ma-md">
                    <q-input
                        outlined
                        ref="email"
                        :rules="[ val => isValidEmailAddress(val) || 'Please enter a valid email address.' ]"
                        lazy-rules
                        v-model="formData.email"
                        class="col"
                        label="Email"
                        stack-label
                    />
                    <!-- <div class="q-pa-md" style="max-width: 300px">
                    <div class="q-gutter-md">
                        <q-select
                            outlined
                            v-model="model"
                            :options="['Springdale', 'East Macon']"
                            label="Group"
                        ></q-select>
                    </div>
                    </div>-->
                </div>
                <div class="row q-ma-md">
                    <q-input
                        outlined
                        ref="password"
                        v-model="formData.password"
                        class="col"
                        :rules="[ val => val.length >= 6 || 'Please use minimum 6 .' ]"
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
import { mapActions } from "vuex";
export default {
    data() {
        return {
            formData: {
                email: "",
                password: "",
            },
        };
    },
    methods: {
        ...mapActions("auth", ["loginUser"]),
        submitForm() {
            this.$refs.email.validate();
            this.$refs.password.validate();
            if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
                this.loginUser(this.formData);
            }
        },
        isValidEmailAddress(email) {
            const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            return re.test(String(email.toLowerCase()));
        },
    },
};
</script>

<style>
.card {
    max-width: 500px;
    margin: 0 auto;
}
</style>