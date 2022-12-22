<script>
export default {
    name: "AppInfo"
}
</script>

<template>
    <section>
        <div class="container">
            <div class="info">
                <div class="info-title">
                    <div class="font">
                        <font-awesome-icon icon="fa-solid fa-trophy" />
                    </div>
                    <h3>WHO WE ARE</h3>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic, voluptate ea numquam sunt earum,
                    consequatur sint.
                </p>
                <a href="#">Learn more</a>
            </div>
            <div class="info">
                <div class="info-title">
                    <div class="font">
                        <font-awesome-icon icon="fa-solid fa-bolt" />
                    </div>
                    <h3>WHAT WE DO</h3>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic, voluptate ea numquam sunt earum,
                    consequatur sint.
                </p>
                <a href="#">Learn more</a>
            </div>
            <div class="info">
                <div class="info-title">
                    <div class="font">
                        <font-awesome-icon icon="fa-solid fa-question" />
                    </div>
                    <h3>WHY US?</h3>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic, voluptate ea numquam sunt earum,
                    consequatur sint.
                </p>
                <a href="#">Learn more</a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;

section {
    background-color: $cube-white;

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 100px;

        .info {
            width: 100%;
            padding: 50px 0;

            .info-title {
                display: flex;
                align-items: center;
                gap: 30px;
                margin-bottom: 15px;

                .font {
                    color: $median-naturalGrey;
                    font-size: 20px;
                }

                h3 {
                    color: $material-black;
                    font-size: 12px;
                    font-weight: 600;
                }

            }

            p {
                margin-left: 50px;
                line-height: 20px;
                margin-bottom: 15px;
                color: $median-naturalGrey;
                font-weight: 100;
                font-size: 12px;
                font-family: 'Times New Roman', Times, serif;
            }

            a {
                margin-left: 50px;
                color: $cube-scarlet;
                text-decoration: none;
                font-family: 'Times New Roman', Times, serif;
                font-size: 15px;
            }
        }
    }
}
</style>
