<script>
export default {
    name: "AppSpeaker",
    data() {
        return {
            elemImg: [
                {
                    img: "img/speaker-6.jpg",
                    name: "PATRICK SPENCER",
                    role: "S&P Analyzer",
                },
                {
                    img: "img/speaker-5.jpg",
                    name: "JANET JONES",
                    role: "NewYork Post's GM",
                },
                {
                    img: "img/speaker-4.jpg",
                    name: "MICHAEL DOVER",
                    role: "Starbuck's CEO   ",
                },
                {
                    img: "img/speaker-3.jpg",
                    name: "ANGELINA HOLY",
                    role: "Maxii's Manager",
                },
            ]
        }
    }
}
</script>

<template>
    <section>
        <div class="container">
            <h1>SPEAKERS</h1>
            <div class="btn">
                <button>
                    <font-awesome-icon icon="fa-solid fa-angle-left" />
                </button>
                <button>
                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                </button>
            </div>
            <div class="cards-block">
                <div class="cards" v-for="(elem, index)  in elemImg" :key="index">
                    <img :src="elem.img" alt="">
                    <div class="name-cards">
                        {{ elem.name }}
                    </div>
                    <div class="role-cards">
                        {{ elem.role }}
                    </div>
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
        position: relative;

        .btn {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            position: absolute;
            top: 20%;
            right: 0;

            button {
                background-color: $cube-scarlet;
                color: white;
                padding: 10px 13px;
                border: none;
                font-size: 10px;
                cursor: pointer;
            }
        }

        .cards-block {
            margin-top: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;


            .cards {
                width: 250px;
                height: 200px;
                line-height: 30px;

                img {
                    width: 100%;
                    border-radius: 5px;
                }

                .name-cards {
                    text-align: center;
                    font-size: 14px;
                    color: $cube-mineShaft;
                    font-weight: 700;
                    letter-spacing: 2px;
                }

                .role-cards {
                    text-align: center;
                    font-size: 12px;
                    color: $median-naturalGrey;
                    font-family: 'Times New Roman', Times, serif;
                }
            }
        }
    }
}
</style>