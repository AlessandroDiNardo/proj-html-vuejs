<script>
import AppTopFooter from './AppTopFooter.vue';

export default {
    name: "AppFooter",
    components: {
        AppTopFooter,
    }
}
</script>

<template>
    <footer>
        <AppTopFooter />
    </footer>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;
</style>
