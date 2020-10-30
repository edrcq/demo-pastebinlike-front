<template>
    <div class="form-create">
        <div class="row">
            <div class="col-12">
                <label>Your paste content:</label>
                <b-form-textarea
                    v-model="content"
                    />
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-6">
                <label>Title:</label>
                <b-form-input v-model="title" placeholder="Paste Title"></b-form-input>
                <label>Exposure:</label>
                <b-form-select v-model="exposure" :options="expo_options"></b-form-select>
                <button class="btn btn-primary" @click="sendPaste">Send my Paste</button>
            </div>
        </div>
    </div>
</template>

<script>
import swal from 'sweetalert'

export default {
    data() { return {
        content: '',
        title: '',
        expo_options: [
            { value: 'public', text: 'Public' },
            { value: 'unlisted', text: 'Unlisted' },
        ],
        exposure: 'public',
        show_owner: true,
    }},

    methods: {
        async sendPaste() {
            const { content, title, exposure, show_owner } = this
            const res = await this.$store.dispatch('createPaste', { content, title, exposure, show_owner })
            if (res.error) {
                swal({ title: 'Cannot create paste', text: res.error })
            }
            else {
                this.$router.push(`/p/${res.slug}`)
            }
        }
    }
}
</script>