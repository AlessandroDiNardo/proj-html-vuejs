<script>
export default {
    name: "Appheader",
    data() {
        return {
            elemNav: [
                {
                    text: "HOME",
                    url: "#",
                    current: false
                },
                {
                    text: "PAGES",
                    url: "#",
                    current: false
                },
                {
                    text: "PROGRAM",
                    url: "#",
                    current: false
                },
                {
                    text: "TICKETS",
                    url: "#",
                    current: false
                },
                {
                    text: "SPEAKERS",
                    url: "#",
                    current: false
                },
                {
                    text: "PAPERS",
                    url: "#",
                    current: false
                },
                {
                    text: "BLOG",
                    url: "#",
                    current: false
                },
                {
                    text: "SHORTCODES",
                    url: "#",
                    current: false
                },
            ]
        }
    },
}
</script>

<template>
    <header>
        <section class="topbar container">
            <div class="logo">
                <h1>THE KEYNOTE</h1>
            </div>
            <div class="navbar-block">
                <ul class="navbar">
                    <li v-for="(elem, index) in elemNav" :key="index">
                        <a :href="elem.url" :class="{ active: elem.current }">
                            {{ elem.text }}
                        </a>
                    </li>
                </ul>
                <div id="icon-vert">&vert;</div>
                <div id="icon-glass">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </div>
            </div>
        </section>
    </header>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;

.topbar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    // debug
    height: 100px;

    // logo block
    .logo {
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
            font-size: 20px;
        }
    }

    // navbar block
    .navbar-block {
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        font-size: 9px;
        font-weight: 800;

        .navbar {
            display: flex;
            align-items: center;
            gap: 35px;
            list-style: none;

            li a {
                text-decoration: none;
                color: $median-naturalGrey;
                display: flex;
                align-items: center;
                height: 30px;

                &.active,
                &:hover {
                    cursor: pointer;
                    color: $material-thunderbird;
                    border-bottom: 4px solid $material-thunderbird;
                }
            }
        }
    }
}
</style>
