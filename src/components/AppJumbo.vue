<script>
export default {
    name: "AppJumbo",
}
</script>

<template>
    <section>
        <div class="container">
            <h2>CONFERENCE ON</h2>
            <h1>SOCIAL NETWORKS</h1>
            <div class="date">
                <div>23-26 MAY 2019</div>
                <div>&#47;</div>
                <div> SANS FRANCISCO</div>
                <div>&#47;</div>
                <div> 8 SPEAKERS</div>
            </div>
            <button class="btn register">
                REGISTER ONLINE
            </button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;

section {
    background-image: url(../../public/img/slider-1-bg.jpg);

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 100px 0;
        color: white;

        h2 {
            font-size: 40px;
            font-weight: 100;
        }

        h1 {
            font-size: 70px;
            font-weight: 900;
            margin-bottom: 50px;
        }

        .date {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            font-size: 12px;
            font-weight: 800;
            border-top: 5px solid white;
            height: 40px;
        }

        .register {
            background-color: $cube-scarlet;
            font-weight: 800;
            border-radius: 5px;
            margin-top: 50px;
            padding: 15px 20px;
            color: white;
        }
    }
}
</style>