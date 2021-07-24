<template>
    <f7-list-item

            :title="person.name"
    >
        <template #media>
            <img :src="person.photo" width="44" />
        </template>
    </f7-list-item>
</template>

<script>
    export default {
        props:['person'],
        name: "person"
    }
</script>

<style scoped>

</style>
