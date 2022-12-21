<script>
import AppJumbo from './AppJumbo.vue';
import AppInfo from './AppInfo.vue';

export default {
    name: "AppMain",
    components: {
        AppJumbo,
        AppInfo,
    }
}
</script>

<template>
    <main>
        <AppJumbo />
        <AppInfo />
    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;
</style>
