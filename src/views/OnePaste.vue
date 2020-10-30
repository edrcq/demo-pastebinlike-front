<template>
    <div>
        <h1>{{ paste.title }}</h1>
        <span>Created by: <strong>{{ paste.owner.name }}</strong> at {{ tdate }} - {{ ddate }} ago</span>
        <b-form-textarea
            :value="paste.content"
        />
    </div>
</template>

<script>
import { format, formatDistance } from 'date-fns'
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            paste: state => state.lastBySlug
        }),
        tdate() {
            return format(new Date(this.paste.createdAt), 'dd/MM/yyyy HH:mm:ss')
        },
        ddate() {
            return formatDistance(new Date(this.paste.createdAt), new Date())
        }
    },
    watch: {
        '$route.params': {
            deep: true,
            immediate: true,
            async handler(params) {
                this.$store.dispatch('getBySlug', params.slug)
            }
        }
    }
}
</script>