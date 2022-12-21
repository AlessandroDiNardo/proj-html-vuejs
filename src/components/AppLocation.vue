<script>
export default {
    name: "AppLocation"
}
</script>

<template>
    <section>
        <div class="container">
            <h2>LOCATION</h2>
            <h3>GB BIULDING, GRAND CONFERENCE ROOM</h3>
            <p>
                <font-awesome-icon icon="fa-solid fa-solid fa-paper-plane" /> 11GD Building, River Mall,
                New York, USA 8879
            </p>
            <div id="red-text">Check For Accomodations Here</div>
            <div class="info">
                <div><font-awesome-icon icon="fa-solid fa-phone" /></div>
                <div>+1-112-222-3344</div>
                <div><font-awesome-icon icon="fa-solid fa-envelope" /></div>
                <div>Contact@TheKeynoteTheme.com</div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;

section {
    background-image: url(img/location-bg.jpg);
    background-size: cover;
    margin-top: 10px;

    .container {
        height: 100%;
        color: $cube-white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        line-height: 40px;
        padding: 50px 0;

        h2 {
            letter-spacing: 5px;
            font-size: 30px;
            margin-bottom: 20px;
        }

        h3 {
            letter-spacing: 5px;
            font-size: 25;
        }

        p {
            font-size: 12px;
        }

        #red-text {
            font-size: 12px;
            color: red;
            margin-bottom: 20px;
        }

        .info {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            border-top: 3px solid white;
        }
    }
}
</style>