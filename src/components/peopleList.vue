<template>

    <f7-block>
        <f7-block-title>Recent Contributors</f7-block-title>
        <media-loading v-if="loading"></media-loading>

        <f7-list media-list v-if="people.length>0" v-show="!loading">
       <person :person="person" v-for="person in people" :key="person.id"></person>

    </f7-list>

        <f7-block-title class="text-align-center" v-else>Recent names would show up here</f7-block-title>
        <f7-button color="teal">All Contributors</f7-button>

    </f7-block>

</template>

<script>
    import MediaLoading from "./mediaLoading";
    import Person from "./person";
    export default {
        name: "peopleList",
        components: {Person, MediaLoading},
        data(){
            return{
                people:[],
                loading:false
            }
        },
        methods:{
            getPeople(){
                this.loading = true;
                axios.get('/api/recent-contributors')
                .then(res=>{
                this.people = res.data.data;
                this.loading = false;
                })

            }
        },
        mounted() {
            this.getPeople();
        }
    }
</script>

<style scoped>

</style>
