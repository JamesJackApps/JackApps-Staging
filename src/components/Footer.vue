<template>
    <footer class="footer relative" id="footer">
        <div class=" flex mobile-column">
            <div>
                <img class="absolute" src="../assets/Footer/bg-img.png">
            </div>
            <div class="footer-content flex  relative flex-row mobile-column">
                <div class="relative w-1/3 mobile-width">
                    <img src="../assets/Footer/letter-k-back.png" class="absolute letter-k-top">
                    <img src="../assets/Footer/letterkfront.png" class="letter-k-bottom">

                </div>
                <div class="flex flex-col relative p-4 w-1/4 mobile-width">
                    <img class="self-center h-[50px] w-auto mb-4" src="../assets/Footer/jack-appslogoone-orange-1.png">
                    <p class="text-center text-white">High level experience in web design and development knowledge,
                        producing quality
                        work.
                    </p>
                </div>
                <!-- <div class="flex flex-col relative p-4 w-max ">
                <h4 class="sub-heading orange-text flex mb-4 ">Quick Links</h4>
                <ul>
                    <li class="pt-2 pb-2">
                        <a class="text-sm link_font" href="">Testimonials</a>
                    </li>
                    <li class="pt-2 pb-2">
                        <a class="text-sm  link_font" href="">SEO Services</a>
                    </li>
                    <li class="pt-2 pb-2">
                        <a class="text-sm  link_font" href="">PPC Management Services</a>
                    </li>
                    <li class="pt-2 pb-2">
                        <a class="text-sm  link_font" href="">Web Design and Development</a>
                    </li>
                    <li class="pt-2 pb-2">
                        <a class="text-sm  link_font" href="">Strategic Consultation</a>
                    </li>
                    <li class="pt-2 pb-2">
                        <a class="text-sm  link_font" href="">Web Maintenance and Support</a>
                    </li>
                </ul>
            </div>-->
                <div class="flex flex-col ">
                    <div class="flex flex-row ">

                        <div class="flex flex-col relative p-4  ">
                            <h4 class="sub-heading orange-text mb-4 w-max">Contact Details</h4>
                            <ul>
                                <li class="pt-2 pb-2">
                                    <a class="text-sm text-white link_font cursor-pointer" @click="goto('contact')">Email
                                        <p>
                                            projects@jackapplications.com</p>
                                    </a>
                                </li>
                                <li class="pt-2 pb-2">
                                    <p class="text-sm text-white link_font">Address
                                    <p>Jack Applications Limited,
                                        First Floor,
                                        85
                                        Great Portland St, London, W1W 7LT
                                    </p>
                                    </p>
                                </li>
                                <li class="pt-2 pb-2">
                                    <a class="text-sm text-white link_font cursor-pointer" href="tel:07468624228">Contact
                                        Number<p>
                                            07468 624 288 </p>
                                    </a>
                                </li>

                            </ul>


                        </div>
                        <!-- <div class="flex flex-col relative p-4 w-32">
                        <h4 class="sub-heading orange-text mb-4 w-max">Company</h4>
                        <ul>
                            <li class="pt-2 pb-2">
                                <a class="text-sm link_font " href="">About Us</a>
                            </li>
                            <li class="pt-2 pb-2">
                                <a class="text-sm  link_font" href="">Careers</a>
                            </li>
                            <li class="pt-2 pb-2">
                                <a class="text-sm  link_font" href="">FAQ</a>
                            </li>

                        </ul>
                    </div> -->
                    </div>
                    <button @click="goto()"
                        class=" btn flex justify-center items-center btn-footer relative  btn-orange w-1/2">
                        <p class="text-sm">Contact JackApps Now</p>
                        <font-awesome-icon :icon="['fas', 'arrow-right']"
                            class="items-center text-sm  flex   btn-arrow btn-footer-arrow" />
                    </button>

                </div>

            </div>
            <div class="absolute bottom-0 flex w-screen p-4">

                <div class="social-icons gap-2 flex mobile-social w-1/2 mobile-width">
                    <p class="orange-text">&copy 2023 All Rights Reserved</p>
                    <a href="https://www.facebook.com/people/Jack-Applications/100079911980097/" target="_blank"> <img
                            src="../assets/Footer/fb.png">
                    </a>
                    <a href="  https://twitter.com/JackAppsUK" target="_blank">
                        <img src="../assets/Footer/twitter.png">
                    </a>
                    <a href="mailto:info@jackapplications.com"> <img src="../assets/Footer/email.png">
                    </a>
                    <a href="https://www.instagram.com/jackapplications/">
                        <img src="../assets/Footer/instagram.png">
                    </a>
                    <a href="https://www.linkedin.com/company/jackapps/">
                        <img src="../assets/Footer/linkedIn.png">
                    </a>
                </div>
                <div class="w-1/2 absolute bottom-img right-0">
                    <img src="../assets/Footer/pattern-design.png">

                </div>

                <div class="back-to-top"></div>
            </div>


        </div>
    </footer>
</template>

<script>

export default {
    methods: {
        goto() {
            var element = document.getElementById("contact")
            var top = element.offsetTop;
            window.scrollTo({
                top: top,
                left: 0,
                behavior: "smooth",
            });
        },
    }
}
</script>

<style>
.footer {
    background: #130018;
}

@media screen and (max-width: 768px) {

    .mobile-social {
        flex-direction: row-reverse;

    }



    .mobile-row {
        flex-direction: row;
    }

    .mobile-column {
        flex-direction: column !important;
    }

    .mobile-width {
        width: 100vw !important;
    }

}


.btn-footer {
    justify-content: center;
    align-items: center;
    border-radius: 80px;
    display: flex;
    font-weight: 700;
    width: 270px !important;
    transition: all 0.4s ease;
}

.btn-footer-arrow {
    padding-top: 5px !important;
    margin-left: 20px !important;
}

.btn-footer:hover {
    width: 300px !important;

}


.social-icon {
    background: #130018;
    color: #FF6B00;
}

.letter-k-top {
    transform: translate(-4%, -100%);

    @media screen and (max-width: 768px) {
        transform: translate(-4%, -99%);
        width: 120vw;
    }
}

.letter-k-bottom {
    @media screen and (max-width: 768px) {
        width: 100vw;
    }
}

.footer-content img {
    max-width: unset;
}

.bottom-img {
    transform: translateY(-33px);
}
</style>
