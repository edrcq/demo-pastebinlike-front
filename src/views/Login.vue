<template>
    <div>
        <h1>Login \o</h1>
        <label>Email:</label>
        <b-form-input v-model="email" placeholder="Your email"></b-form-input>
       
        <label>Password:</label>
        <b-form-input v-model="password" type="password"></b-form-input>

        <button class="btn btn-primary" @click="login">Login</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },

    methods: {
        login() {
            const { email, password } = this
            this.$store.dispatch('login', { email, password })
        }
    }
}
</script>