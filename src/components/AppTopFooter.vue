<script>
export default {
    name: "AppTopFooter"
}
</script>

<template>
    <section>
        <div class="container">
            <div class="col-block">
                <div class="col">
                    <h2>ABOUT US</h2>
                    <P>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, sit earum, aliquam aliquid
                        tenetur quisquam possimus.
                    </P>
                    <div class="icon-block">
                        <div class="icon">
                            <font-awesome-icon icon="fa-brands fa-square-facebook" />
                        </div>
                        <div class="icon">
                            <font-awesome-icon icon="fa-brands fa-square-twitter" />
                        </div>
                        <div class="icon">
                            <font-awesome-icon icon="fa-brands fa-linkedin" />
                        </div>
                        <div class="icon">
                            <font-awesome-icon icon="fa-brands fa-google-plus" />
                        </div>
                        <div class="icon">
                            <font-awesome-icon icon="fa-brands fa-square-pinterest" />
                        </div>
                        <div class="icon">
                            <font-awesome-icon icon="fa-solid fa-ellipsis" />
                        </div>
                    </div>
                </div>
                <div class="col">
                    <h2>RECENT NEWS</h2>
                    <ul>
                        <li>
                            <div class="icon">
                                <font-awesome-icon icon="fa-solid fa-angle-right" />
                            </div>
                            <div>
                                SEM PORTA MOLLIS PARTURIENT
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <font-awesome-icon icon="fa-solid fa-angle-right" />
                            </div>
                            <div>
                                NULLAM LOREM MATTIS PURUS
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <font-awesome-icon icon="fa-solid fa-angle-right" />
                            </div>
                            <div>
                                NIBH SEM SIT ULLAMCORPER
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <font-awesome-icon icon="fa-solid fa-angle-right" />
                            </div>
                            <div>
                                DONEC LUCTUS IMPERDIET
                            </div>
                        </li>

                        <li>
                            <div class="icon">
                                <font-awesome-icon icon="fa-solid fa-angle-right" />
                            </div>
                            <div>
                                MAGNA PARS STUDIORUM
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <h2>GET YOUR SEAT</h2>
                    <p>
                        Book your seat before it's too rate. We provide variety of ticket options.
                    </p>
                    <button>
                        CHECK YOUR TICKETS
                    </button>
                </div>
                <div class="col">
                    <h2>GALLERY FROM LAST YEAR</h2>
                    <div class="gallery">
                        <div class="photo">
                            <img src="img/photodune-7770665-two-white-coffee-mug-with-diy-decoration-o (1).jpg" alt="">
                        </div>
                        <div class="photo">
                            <img src="img/photodune-8523683-speaker-at-business-convention-and-present.jpg" alt="">
                        </div>
                        <div class="photo">
                            <img src="img/photodune-6745579-modern-creative-man-relaxing-on-workspace-.jpg" alt="">
                        </div>
                        <div class="photo">
                            <img src="img/photodune-8522811-speaker-at-business-conference-and-present (1).jpg" alt="">
                        </div>
                        <div class="photo">
                            <img src="img/photodune-8797753-multiethnic-people-with-startup-business-t (1).jpg" alt="">
                        </div>
                        <div class="photo">
                            <img src="img/card04-150x150.jpg" alt="">
                        </div>
                        <div class="photo">
                            <img src="img/photodune-6745606-man-wristwatch-calendar-key-and-glasses-on.jpg" alt="">
                        </div>
                        <div class="photo">
                            <img src="img/photodune-6745585-modern-creative-workspace-m-150x150.jpg" alt="">
                        </div>
                        <div class="photo">
                            <img src="img/6426608875_186070f8ca_o-150x150.jpg" alt="">
                        </div>
                        <div class="photo">
                            <img src="img/card01-150x150.jpg" alt="">
                        </div>
                        <div class="photo">
                            <img src="img/13349065283_64d09b067c_o-150x150.jpg" alt="">
                        </div>
                        <div class="photo">
                            <img src="img/photodune-8795110-overhead-of-essentials-denim-clothes-m-150.jpg" alt="">
                        </div>
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
    background-color: $cube-mineShaft;

    .container {
        padding: 50px 0;

        .col-block {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            gap: 20px;

            .col {
                width: 250px;
                color: white;

                h2 {
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 2px;
                    margin-bottom: 20px;
                }

                p {
                    font-size: 10px;
                    font-weight: 200;
                    line-height: 20px;
                    margin-bottom: 20px;
                }

                .icon-block {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                ul {
                    list-style: none;

                    li {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        font-size: 8px;
                        font-weight: 20;
                        line-height: 30px;
                        color: $median-naturalGrey;

                        &:hover {
                            text-decoration: underline;
                            cursor: pointer;
                        }
                    }
                }

                button {
                    background-color: $cube-scarlet;
                    border: none;
                    padding: 10px 20px;
                    color: white;
                    font-size: 10px;
                    font-weight: 500;
                    cursor: pointer;
                }

                .gallery {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 10px;

                    .photo {
                        width: 40px;
                        height: 40px;

                        img {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
}
</style>