<script>
export default {
    name: "AppTickets",
    data() {
        return {
            ticketsList: [
                {
                    option: "ONE DAY PASS",
                    price: "FREE",
                    access: "One Day Access",
                    break: "Coffee Break",
                    lunch: "Lunch(Intenrational Buffett)",
                    document: "Document Sheets",
                    discount: "50USD Voucher For Next Event",
                },
                {
                    option: "FOUR DAY PASSES",
                    price: "750.00 USD",
                    access: "Four Day Access",
                    break: "Coffee Break",
                    lunch: "Lunch(Intenrational Buffett)",
                    document: "Document Sheets",
                    discount: "100USD Voucher For Next Event",
                },
                {
                    option: "TWO DAY PASSES",
                    price: "580.00 USD",
                    access: "Two Day Access",
                    break: "Coffee Break",
                    lunch: "Lunch(Intenrational Buffett)",
                    document: "Document Sheets",
                    discount: "70USD Voucher For Next Event",
                },
            ]
        }
    }
}
</script>

<template>
    <section>
        <div class="container">
            <h1>TICKETS</h1>
            <div class="cards-block">
                <div class="cards" v-for="(elem, index) in ticketsList" :key="index">
                    <div class="top-cards">
                        <h2>{{ elem.option }}</h2>
                        <div>{{ elem.price }}</div>
                    </div>
                    <div class="mid-cards">
                        <div>{{ elem.access }}</div>
                        <div>{{ elem.break }}</div>
                        <div>{{ elem.lunch }}</div>
                        <div>{{ elem.document }}</div>
                        <div>{{ elem.discount }}</div>
                    </div>
                    <div class="bottom-cards">
                        <h4>BOOK NOW</h4>
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
    background-image: url(img/ticket-bg.jpg);

    .container {
        padding: 100px 0;

        h1 {
            text-align: center;
            color: white;
            font-size: 30px;
            letter-spacing: 3px;
        }

        .cards-block {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            margin-top: 50px;

            .cards {
                width: 350px;
                height: 400px;

                .top-cards {
                    text-align: center;
                    background-color: $cube-lightGrey;
                    padding: 20px 0;
                    font-weight: 500;
                    letter-spacing: 2px;
                    line-height: 20px;

                    h2 {
                        font-size: 15px;
                        color: $material-black;
                    }

                    div {
                        color: $cube-scarlet;
                        font-size: 12px;
                        font-weight: 700;
                    }
                }

                .mid-cards {
                    background-color: $cube-white;
                    color: $median-naturalGrey;
                    font-size: 12px;
                    font-family: 'Times New Roman', Times, serif;
                    line-height: 30px;
                    font-weight: 500;
                    text-align: center;
                    padding: 40px 0;
                }

                .bottom-cards {
                    background-color: red;
                    color: white;
                    font-size: 10px;
                    font-weight: 800;
                    text-align: center;
                    letter-spacing: 2px;
                    padding: 30px 0;
                }
            }
        }
    }
}
</style>