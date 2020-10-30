<template>
    <div>
        {{ paste }}
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            paste: state => state.lastBySlug
        })
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