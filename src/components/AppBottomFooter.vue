<script>
export default {
    name: "AppBottomFooter"
}
</script>

<template>
    <section>
        <div class="container">
            <div class="left">
                <span><font-awesome-icon icon="fa-solid fa-copyright" /> </span>
                <span> Copyright GoodLayers, All Right Reserved</span>
            </div>
            <div class="right">
                <span>About Us </span>
                <span>&#124; </span>
                <span>Accomodation </span>
                <span>&#124; </span>
                <span>Call For Paper </span>
                <span>&#124; </span>
                <span>Contact Us </span>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;

section {
    background-color: #161616;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
        color: $median-naturalGrey;
        font-size: 12px;

        span:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
}
</style>