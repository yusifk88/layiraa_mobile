<template>
    <div>

        <f7-list-item
             swipeout
            :key="name.id"
            link="#"
            :title="name.title"
            :after="name.date_contributed"
            :subtitle="'By:'+name.contributor.name"
            :text="name.description" >

            <f7-swipeout-actions left>
                <f7-swipeout-button overswipe color="blue" @click="reply">Preview</f7-swipeout-button>
                <f7-swipeout-button color="teal" @click="forward">Add Review</f7-swipeout-button>
            </f7-swipeout-actions>

            <f7-swipeout-actions right>
                <f7-swipeout-button overswipe color="green" @click="reply">Upvote</f7-swipeout-button>
                <f7-swipeout-button color="red" @click="forward">Downvote</f7-swipeout-button>
            </f7-swipeout-actions>


    </f7-list-item>


    </div>
</template>

<script>
    export default {
        props:['name'],
        name: "nameItem"
    }
</script>

<style scoped>

</style>
