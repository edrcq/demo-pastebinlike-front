<template>
    <div class="row latests">
        <div class="col">
            <b-list-group>
                <b-list-group-item  v-for="(paste, i) in latests" :key="i">
                    <div class="d-flex row justify-content-around">
                        <div class=""><router-link :to="`/p/${paste.slug}`">{{ paste.title }}</router-link></div>
                        <div class="">{{ formatDistance(new Date(paste.createdAt), new Date()) }} ago</div>
                    </div>
                </b-list-group-item>
               
            </b-list-group>
        </div>
    </div>
</template>

<script>
import { formatDistance } from 'date-fns'
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            latests: state => state.latests
        })
    },
    methods: {
        formatDistance,
    } 
}
</script>