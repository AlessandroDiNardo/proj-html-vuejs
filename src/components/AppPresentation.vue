<script>
export default {
    name: "AppPresentation",
}
</script>

<template>
    <section>
        <div class="container">
            <div class="left-side">
                <h2>PRESENTATION</h2>
                <div class="video">
                    <img src="img/461365506_960.jpg" alt="">
                    <div class="player">
                        <div class="player-icon">
                            <font-awesome-icon icon="fa-solid fa-play" />
                        </div>
                        <div class="player-bar">
                            <div class="min">
                                <div>1:01:26</div>
                            </div>
                            <div class="bar"></div>
                            <div class="signals">
                                <font-awesome-icon icon="fa-solid fa-signal" />
                            </div>
                            <div class="setting">
                                <font-awesome-icon icon="fa-solid fa-gear" />
                            </div>
                            <div>Vimeo</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-side">
                <h2>TWITTER FEED</h2>
                <div class="feed">
                    <div class="text">
                        <div class="icon">
                            <font-awesome-icon icon="fa-brands fa-twitter" />
                        </div>
                        <p>
                            Stand out and be vibrant with some of the best bright and bold templates on
                            <span>@Envato</span>
                            Elements. And add a splash of c... <span>https://t.co/jFrsnzEJK7</span>
                        </p>
                    </div>
                    <div class="days">3 days ago</div>
                </div>
                <div class="feed">
                    <div class="text">
                        <div class="icon">
                            <font-awesome-icon icon="fa-brands fa-twitter" />
                        </div>
                        <p>
                            Do you need to deliver the perfect presentation or creative pitch? Sure, your ideas and plan
                            need to be on-point, b... <span>https://t.co/jFrsnzEJK7</span>
                        </p>
                    </div>
                    <div class="days">9 days ago</div>
                </div>
                <div class="feed">
                    <div class="text">
                        <div class="icon">
                            <font-awesome-icon icon="fa-brands fa-twitter" />
                        </div>
                        <p>
                            Cut yourself a piece of the BFCM a solid marketing plan. Here are 5 ways to optimize your
                            content fo...<span>https://t.co/jFrsnzEJK7</span>
                        </p>
                    </div>
                    <div class="days">11 days ago</div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

section {
    background-color: $cube-white;

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 100px 0;

        .left-side {
            width: 50%;

            h2 {
                margin-bottom: 50px;
                font-size: 20px;
                letter-spacing: 2px;
            }

            .video {
                position: relative;

                img {
                    width: 80%;
                    margin-left: 40px;
                }

                .player {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    padding: 10px 30px;
                    position: absolute;
                    bottom: 7px;

                    .player-icon {
                        background-color: rgba(0, 0, 0, 0.786);
                        text-align: center;
                        padding: 5px 20px;
                        border-radius: 5px;
                        color: white;
                    }

                    .player-bar {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 20px;
                        background-color: rgba(0, 0, 0, 0.786);
                        padding: 5px 5px;
                        color: white;
                        position: relative;
                        border-radius: 5px;

                        .min {
                            border: 1px solid black;
                            background-color: $cube-white;
                            color: black;
                            font-size: 8px;
                            position: absolute;
                            top: 0;
                            left: 0;
                        }

                        .bar {
                            border: 1px solid white;
                            background: none;
                            width: 240px;
                            height: 10px;
                        }

                        &:last-child {
                            font-size: 12px;
                            font-family: Dancing+Script;
                            font-weight: 900;
                        }
                    }
                }
            }
        }

        .right-side {
            width: 50%;

            h2 {
                margin-bottom: 50px;
                font-size: 20px;
                letter-spacing: 2px;
            }

            .feed {
                margin-top: 20px;

                .text {
                    display: flex;
                    gap: 20px;

                    .icon {
                        color: #47bdee;
                    }

                    p {
                        font-size: 12px;
                        color: $median-naturalGrey;
                        font-family: 'Times New Roman', Times, serif;
                        font-weight: 200;
                        line-height: 20px;

                        span {
                            color: $cube-scarlet;
                        }
                    }
                }

                .days {
                    margin-top: 20px;
                    margin-left: 35px;
                    font-size: 12px;
                    color: $median-naturalGrey;
                    font-family: 'Times New Roman', Times, serif;
                    font-weight: 200;
                }
            }
        }
    }
}
</style>