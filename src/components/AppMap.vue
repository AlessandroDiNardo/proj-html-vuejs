<script>
export default {
    name: "AppMap"
}
</script>

<template>
    <section>
        <div class="top">
            <button>Map</button>
            <button>Satellite</button>
        </div>
        <div class="bottom">
            <button id="icon-person">
                <font-awesome-icon icon="fa-solid fa-person" />
            </button>
            <button>+</button>
            <button>-</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;

section {
    background-image: url(../../public/img/maps.png);
    height: 500px;
    background-size: cover;
    padding: 10px 0;
    position: relative;

    .bottom {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: flex-end;
        align-items: flex-end;
        position: absolute;
        bottom: 0;
        right: 10px;

        button {
            font-size: 15px;
            width: 40px;
            color: #fdbf2d;

            &:nth-last-child(-n+2) {
                color: $material-black;
            }
        }
    }

    .top {
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        position: absolute;
        top: 0;
        left: 0;
    }

    button {
        border: 1px solid rgba(0, 0, 0, 0.079);
        background-color: $cube-white;
        padding: 10px;

        &:hover {
            background-color: $cube-lightGrey;
            cursor: pointer;
            color: $material-black;
        }
    }
}
</style>