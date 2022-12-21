<script>
export default {
    name: "AppNews",
    data() {
        return {
            cards: [
                {
                    img: "img/photodune-7770665-two-white-coffee-mug-with-diy-decoration-o.jpg",
                    date: "03 Dec 2013",
                    comms: "0 Comments",
                    title: "SEDIAL EIUSMOD TEMPOR",
                    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, veniam neque velit eligendi quisquam facere, possimus odit similique, itaque vero deserunt necessitatibus.",
                },
                {
                    img: "img/photodune-8797753-multiethnic-people-with-startup-business-t.jpg",
                    date: "03 Dec 2013",
                    comms: "2 Comments",
                    title: "DONEC LUCTUS IMPERDIET",
                    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, veniam neque velit eligendi quisquam facere, possimus odit similique, itaque vero deserunt necessitatibus.",
                },
                {
                    img: "img/photodune-8522811-speaker-at-business-conference-and-present.jpg",
                    date: "03 Dec 2013",
                    comms: "0 Comments",
                    title: "MAGNA PARS",
                    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, veniam neque velit eligendi quisquam facere, possimus odit similique, itaque vero deserunt necessitatibus.",
                },
            ]
        }
    }
}
</script>

<template>
    <section>
        <div class="container">
            <div class="top">
                <h1>RECENT NEWS</h1>
                <div>Read All News</div>
            </div>
            <div class="cards-block">
                <div class="cards" v-for="(elem, index) in cards" :key="index">
                    <div class="img">
                        <img :src="elem.img" alt="">
                    </div>
                    <div class="date-comms">
                        <div>{{ elem.date }}</div>
                        <div>&#8725;</div>
                        <div>{{ elem.comms }}</div>
                    </div>
                    <h2>{{ elem.title }}</h2>
                    <p>{{ elem.text }}</p>
                    <div id="read">Read More</div>
                </div>
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
        padding: 100px 0;

        .top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            h1 {
                letter-spacing: 5px;
            }

            div {
                color: $cube-scarlet;
                font-size: 13px;
                font-family: 'Times New Roman', Times, serif;
            }
        }

        .cards-block {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 25px;

            .cards {
                padding-top: 50px;

                .img {
                    width: 100%;

                    img {
                        width: 100%;
                    }
                }

                .date-comms {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 12px;
                    color: $median-naturalGrey;
                    font-family: 'Times New Roman', Times, serif;
                    margin-top: 10px;
                }

                h2 {
                    font-size: 15px;
                    letter-spacing: 2px;
                    font-weight: 700;
                    margin-top: 10px;
                    margin-bottom: 20px;
                }

                p {
                    font-size: 10px;
                    color: $median-naturalGrey;
                    margin-bottom: 20px;
                }

                #read {
                    font-size: 15px;
                    color: $cube-scarlet;
                    font-family: 'Times New Roman', Times, serif;
                    letter-spacing: 2px;
                }
            }
        }
    }
}
</style>