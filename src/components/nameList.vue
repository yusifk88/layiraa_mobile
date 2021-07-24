<template>
<f7-block>
    <f7-block-title>Recent Contributions</f7-block-title>
    <loding-component v-if="loading"></loding-component>
<f7-list media-list v-if="names.length>0" v-show="!loading">
  <name-item v-for="name in names" :name="name"></name-item>

</f7-list>
    <f7-block-title class="text-align-center" v-else>Recent names would show up here</f7-block-title>
    <f7-button color="teal">All Names</f7-button>
</f7-block>
</template>

<script>
    import NameItem from "./nameItem";
    import LodingComponent from "./lodingComponent";
    export default {
        components: {LodingComponent, NameItem},
        props:{
            heading:{
                type:String,
                default:"Recent Contributions"
            }
        },
        name: "nameList",
        data(){
          return{
              names:[],
              loading:false,
          }
        },
        methods:{
            getRecentNames(){
                this.loading = true;
                axios.get('/api/recent-names')
                    .then(res=>{
                        this.names = res.data.data;
                        this.loading = false;

                    })

            }
        },
        mounted() {
            this.getRecentNames();
        }
    }
</script>

<style scoped>

</style>
