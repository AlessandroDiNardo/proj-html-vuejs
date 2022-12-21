<script>
export default {
    name: "AppCountdown",
}
</script>

<template>
    <section>
        <div class="container">
            <div class="countdown">
                <div class="number-block" id="days">
                    <div class="number">3399</div>
                    <div>DAYS</div>
                </div>
                <div class="number-block" id="hours">
                    <div class="number">17</div>
                    <div>HOURS</div>
                </div>
                <div class="number-block" id="mins">
                    <div class="number">28</div>
                    <div>MINS</div>
                </div>
                <div class="number-block" id="secs">
                    <div class="number">17</div>
                    <div>SECS</div>
                </div>
            </div>
            <h3>SUBSCRIBE FOR UPDATES</h3>
            <form>
                <input type="text" placeholder="Please fill your email" id="send">
                <button class="btn subscribe">SUBSCRIBE</button>
            </form>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/general.scss' as *;

section {
    background-image: url(../../public/img/coutdown-bg1.jpg);
    height: 500px;

    .container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .countdown {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            margin-bottom: 50px;

            .number-block {
                color: white;
                text-align: center;
                font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                border-radius: 5px;

                .number {
                    font-size: 50px;
                }
            }

            #days {
                background-color: $cube-mineShaft;
                opacity: 0.9;
                padding: 20px;
            }

            #hours {
                background-color: $cube-mineShaft;
                opacity: 0.8;
                padding: 20px 40px;
            }

            #mins {
                background-color: $cube-mineShaft;
                opacity: 0.7;
                padding: 20px 40px;
            }

            #secs {
                background-color: $cube-mineShaft;
                opacity: 0.6;
                padding: 20px 40px;
            }
        }

        h3 {
            font-size: 15px;
            margin-bottom: 50px;
            letter-spacing: 5px;
        }

        form {
            display: flex;
            gap: 10px;
            height: 50px;

            #send {
                width: 400px;
                padding: 15px;
                border: none;
                font-size: 10px;
                color: $median-naturalGrey;
            }

            .subscribe {
                cursor: pointer;
                color: white;
                background-color: $cube-scarlet;
                font-weight: 800;
                border-radius: 5px;
                padding: 15px 20px;
            }
        }
    }
}
</style>