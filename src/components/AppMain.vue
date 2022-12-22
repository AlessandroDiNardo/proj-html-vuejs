<script>
import AppJumbo from './AppJumbo.vue';
import AppInfo from './AppInfo.vue';
import AppCountdown from './AppCountdown.vue';
import AppSpeaker from './AppSpeaker.vue';
import AppProgram from './AppProgram.vue';
import AppMap from './AppMap.vue';
import AppLocation from './AppLocation.vue';
import AppNews from './AppNews.vue';
import AppTickets from './AppTickets.vue';
import AppPresentation from './AppPresentation.vue';
import AppSponsor from './AppSponsor.vue';

export default {
    name: "AppMain",
    components: {
        AppJumbo,
        AppInfo,
        AppCountdown,
        AppSpeaker,
        AppProgram,
        AppMap,
        AppLocation,
        AppNews,
        AppTickets,
        AppPresentation,
        AppSponsor
    }
}
</script>

<template>
    <main>
        <AppJumbo />
        <AppInfo />
        <AppCountdown />
        <AppSpeaker />
        <AppProgram />
        <AppMap />
        <AppLocation />
        <AppNews />
        <AppTickets />
        <AppPresentation />
        <AppSponsor />
    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;
</style>
