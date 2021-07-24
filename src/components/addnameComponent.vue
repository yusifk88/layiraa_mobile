<template>
    <f7-block>
        <f7-block-title class="text-align-center">
            <h1>Nyiring Ne B3?</h1>

        </f7-block-title>

        <f7-list>

            <f7-list-input
                    type="text"
                    placeholder="Enter your Sissali name"
                    size="100"
                    autofocus
                    v-model:value="newName"
                    color="teal"
            >
            </f7-list-input>

        </f7-list>
        <f7-button v-if="newName"  large round fill color="teal">Add Name <f7-icon ios="f7:add" aurora="f7:add" md="material:add"></f7-icon></f7-button>

    </f7-block>
</template>

<script>
    export default {
        name: "addnameComponent",
        data(){
            return{
                newName:''
            }
        }
    }
</script>

<style scoped>

</style>
