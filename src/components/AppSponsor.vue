<script>
export default {
    name: "AppSponsor"
}
</script>

<template>
    <section>
        <div class="container">
            <h2>SPONSORS</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptates dolorem.
            </p>
            <div class="sponsor">
                <div class="banner">
                    <img src="img/banner-1.jpg" alt="">
                </div>
                <div class="banner">
                    <img src="img/banner-2.jpg" alt="">
                </div>
                <div class="banner">
                    <img src="img/banner-3.jpg" alt="">
                </div>
                <div class="banner">
                    <img src="img/banner-4.jpg" alt="">
                </div>
                <div class="banner">
                    <img src="img/banner-5.jpg" alt="">
                </div>
                <div class="banner">
                    <img src="img/banner-6.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;

section {
    background-color: $cube-lightGrey;

    .container {
        padding: 100px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        h2 {
            margin-bottom: 20px;
            font-size: 20px;
            letter-spacing: 2px;
        }

        p {
            width: 250px;
            font-size: 12px;
            font-weight: 200;
            font-family: 'Times New Roman', Times, serif;
            color: $median-naturalGrey;
            text-align: center;
        }

        .sponsor {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            margin-top: 50px;

            .banner {
                width: 150px;
                height: 150px;

                img {
                    width: 100%;
                }
            }
        }
    }
}
</style>