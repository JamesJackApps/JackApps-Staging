
<template>
    <header id="test" class=" transition flex  w-screen sticky background-change top-0 z-10001 h-18 pl-4 pr-4">
        <div class="w-2/5 flex">
            <button @click="goto('contact')" class=" btn btn-orange btn-nav place-content-between flex text-sm/8 bg-orange">
                <p>Get Started Today</p>
                <font-awesome-icon :icon="['fas', 'arrow-right']" class="items-center  flex  btn-arrow" />
            </button>
        </div>

        <div class="w-3/5 flex justify-end text-center ">
            <img @click="goto('top')" class="w-[150px]  h-auto nav-img absolute left-1/3 " src="../assets/logo.png"
                alt="Jack Apps Logo">
            <a @click="goto('services')" class="link-font nav-link text-sm/8 h-16 ">Services</a>
            <a @click="goto('footer')" class="link-font nav-link text-sm/8 h-full ">About Us</a>
            <a @click="goto('contact')" class="link-font nav-link text-sm/8 h-full ">Contact Us</a>

        </div>
        <!-- Hamburger -->

    </header>
</template>
<script>

export default {
    data() {

        return {
            scrollposition: null

        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },

    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
            var el = document.getElementById("test")
            if (this.scrollPosition > 100) {

                el.classList.add("hide")
            }
            else if (this.scrollPosition <= 100) {
                el.classList.remove("hide")
            }

        },
        goto(id) {
            var element = document.getElementById(id);
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
.hide {
    background: rgba(255, 107, 0, 0.4)
}

.transition {
    transition: all 0.4s ease-in-out;
}
</style>