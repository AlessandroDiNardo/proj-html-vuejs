<script>
import AppBottomFooter from './AppBottomFooter.vue';
import AppTopFooter from './AppTopFooter.vue';

export default {
    name: "AppFooter",
    components: {
        AppTopFooter,
        AppBottomFooter
    }
}
</script>

<template>
    <footer>
        <AppTopFooter />
        <AppBottomFooter />
    </footer>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;
</style>
