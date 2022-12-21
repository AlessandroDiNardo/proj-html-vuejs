<script>
import AppJumbo from './AppJumbo.vue';
import AppInfo from './AppInfo.vue';
import AppCountdown from './AppCountdown.vue';
import AppSpeaker from './AppSpeaker.vue';

export default {
    name: "AppMain",
    components: {
        AppJumbo,
        AppInfo,
        AppCountdown,
        AppSpeaker,
    }
}
</script>

<template>
    <main>
        <AppJumbo />
        <AppInfo />
        <AppCountdown />
        <AppSpeaker />
    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;
</style>
