<script>
export default {
    name: "AppProgram",
    data() {
        return {
            dayList: [
                {
                    day: "DAY 1",
                    date: "23 May 2016",
                },
                {
                    day: "DAY 2",
                    date: "23 May 2030",
                },
                {
                    day: "DAY 3",
                    date: "24 May 2030",
                },
                {
                    day: "DAY 4",
                    date: "25 May 2030",
                },
                {
                    day: "DAY 5",
                    date: "26 May 2030",
                },
            ]
        }
    }
}
</script>

<template>
    <section>
        <div class="container">
            <div class="topbar">
                <h2>PROGRAM</h2>
                <p>
                    This conference run through all 4 days from 23 - 26 May 2016. <br>
                    We also provide free lunch and coffee break in each day.
                </p>
                <a href="#">View Full Program</a>
            </div>
            <div class="table">
                <div class="table-top">
                    <div class="day-block" v-for="(elem, index) in dayList" :key="index">
                        <div id="day">{{ elem.day }}</div>
                        <div id="date">{{ elem.date }}</div>
                    </div>
                    <div class="day-block">
                        <h1>empty</h1>
                    </div>
                </div>
                <div class="table-body">
                    <div class="table-body-left">
                        <div class="text-left">
                            <div>
                                <font-awesome-icon icon="fa-solid fa-clock" />
                            </div>
                            <div>9:00 - 10:30</div>
                        </div>
                        <div class="text-left">
                            <div>
                                <font-awesome-icon icon="fa-solid fa-solid fa-paper-plane" />
                            </div>
                            <div>
                                NAPLES
                            </div>
                        </div>
                        <div class="text-left">
                            <div>
                                <font-awesome-icon icon="fa-solid fa-user" />
                            </div>
                            <div>
                                LAURENCE FRANCIS
                            </div>
                        </div>
                    </div>
                    <div class="table-body-right">
                        <h3>WELCOMING AND INTRODUCTION</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, magnam iusto! Saepe aperiam
                            magni eius sapiente pariatur accusamus quam et quisquam. Nisi fugit adipisci asperiores
                            soluta, facere beatae praesentium. Asperiores.
                        </p>
                        <img src="img/speaker-8.jpg" alt="">
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
    background-color: $cube-white;

    .container {
        padding: 100px;

        .topbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 50px;

            h2 {
                letter-spacing: 3px;
                font-size: 25px;
            }

            p {
                margin-right: 100px;
                font-size: 12px;
                font-weight: 500;
                color: $median-naturalGrey;
                line-height: 20px;
            }

            a {
                text-decoration: none;
                color: $cube-scarlet;
                font-size: 15px;
                font-family: 'Times New Roman', Times, serif;
            }
        }

        .table {
            .table-top {
                display: flex;
                align-items: center;

                .day-block {
                    background-color: $cube-scarlet;
                    padding: 15px 10px;
                    border-left: 1px solid rgba(0, 0, 0, 0.251);
                    color: white;
                    width: 100%;
                    text-align: start;

                    &:nth-child(-n+1) {
                        background-color: $material-thunderbird;
                    }

                    #day {
                        font-size: 13px;
                        font-weight: 600;

                    }

                    #date {
                        font-size: 11px;
                    }

                    &:last-child {
                        background-color: $cube-scarlet;
                        color: $cube-scarlet;
                    }
                }
            }

            .table-body {
                background-color: $cube-lightGrey;
                padding: 50px 30px;
                display: flex;
                justify-content: center;
                align-items: center;

                .table-body-left {
                    width: 30%;
                    height: 160px;

                    .text-left {
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        gap: 20px;
                        line-height: 30px;
                        color: $median-naturalGrey;
                        font-size: 10px;
                        font-weight: 200;
                    }
                }

                .table-body-right {
                    width: 70%;
                    padding-left: 20px;

                    h3 {
                        color: $material-black;
                        font-weight: 500;
                        margin-bottom: 20px;
                    }

                    p {
                        color: $median-naturalGrey;
                        font-size: 10px;
                        margin-bottom: 20px;
                        line-height: 20px;
                    }

                    img {
                        width: 10%;
                    }
                }

            }
        }
    }
}
</style>