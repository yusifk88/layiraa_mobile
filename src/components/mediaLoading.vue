<template>
    <f7-list media-list>
        <f7-list-item
                v-for="n in 3"
                :key="n"
                :class="`skeleton-text skeleton-effect-${effect}`"
                title="Full Name"
                subtitle="Position"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit. Aliquam vestibulum vitae lorem ac iaculis. Praesent nec pharetra massa, at blandit lectus. Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
        >
            <template #media>
                <f7-skeleton-block
                        style="width: 40px; height: 40px; border-radius: 50%"
                ></f7-skeleton-block>
            </template>
        </f7-list-item>
    </f7-list>
</template>

<script>
    export default {
        name: "mediaLoading"
    }
</script>

<style scoped>

</style>
