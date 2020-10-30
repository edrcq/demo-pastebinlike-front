<template>
    <div>
        <h1>Create an account</h1>
        <label>Email:</label>
        <b-form-input v-model="email" placeholder="Your email"></b-form-input>
        <label>Public pseudo:</label>
        <b-form-input v-model="pseudo" placeholder="Your public pseudo"></b-form-input>
        <label>Password:</label>
        <b-form-input v-model="password" type="password"></b-form-input>

        <button class="btn btn-primary" @click="signup">Signup</button>
    </div>
</template>

<script>
export default {
    date() {
        return {
            email: '',
            pseudo: '',
            password: '',
        }
    },

    methods: {
        signup() {
            const { email, password, pseudo } = this
            this.$store.dispatch('signup', { email, password, pseudo })
        }
    }
}
</script>