


<template v-on:scroll="doStuff">
  <section id="top" class="w-screen">
    <div class="flex flex-row mobile-column-reverse p-16 mobile-padding">
      <div class=" w-1/2 mobile-j  mobile-text left-0">
        <div class="mb-8 mobile-text">
          <h1
            class="w-1/2 mobile-width mobile-text light-heading sub-heading heading-text sub-heading-font-size mobile-text">
            Are you ready to boost your online success?
          </h1>
        </div>
        <div class="flex flex-col justify-center mobile-width mobile-text">
          <div class="flex flex-col justify-center w-5/6 mobile-width mobile-text">
            <p class="link-font heading-text justify-center mobile-text">We are determined to make your business in</p>
            <div class="flex mobile-width mobile-justify">
              <p class="orange-text mobile-text bold text-xl sub-heading  align-baseline pr-2">{{ city }}</p>
              <p class="link-font mobile-text heading-text leading-tight mt-[5px]">successful</p>
            </div>
            <div class="flex mobile-column pt-4">
              <form class="flex gap-2 mobile-column" @submit.prevent="bookSession">
                <div class="flex rounded-r-[50px] border-2 w-60 hover:border-orange-300 self-center mb-2">
                  <input
                    class="resize-none  w-48 h-[50px]  bg-transparent pl-2 pt-1 pb-1   focus:outline-none border-l rounded-l-[50px]"
                    type="email" v-model="email" name="email" placeholder="Your Email">
                  <div
                    class="w-12 border-t border-r border-b pt-1 pb-1 h-[50px] flex justify-center items-center rounded-r-[50px]">
                    <font-awesome-icon class="text-gray-400  " :icon="['fas', 'magnifying-glass']" />
                  </div>
                </div>
                <button type="submit"
                  class="  btn btn-purple relative text-black btn-book place-content-between flex text-sm/8 ">
                  <p>Request a free consultation</p>
                  <font-awesome-icon :icon="['fas', 'arrow-right']" class="items-center  flex  btn-arrow" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
      <div class="flex relative h-screen mt-4 items-center mobile-j ">
        <img src="../assets/hero/hero-icons.png">
        <img class=" absolute" src="../assets/hero/j.png">
        <!-- <div class="ball-container" id="ball-container">
            <img class="ball absolute" id="ball" src="../assets/ball/ball.png">
          </div> -->
      </div>
    </div>
  </section>


  <section id="services" class="w-screen flex mobile-col flex-col p-8">
    <img class="w-1/2 mobile-j relative p-4" src="../assets/services/servicesheader.png">
    <div class="flex relative flex-col">
      <div class="flex mobile-column">
        <div class="flex ">
          <img class="bottom-0" src="../assets/services/a.png">
          <!-- <div class="ball-container-a" id="ball-container-a">
            <img class="ball-a" id="#aball" src="../assets/ball/ball.png">
          </div> -->
        </div>

        <div class="flex relative p-4 h-screen w-full gap-4 right-12 mobile-column image-center mb-4">

          <div class="right-[440px] mobile-layout top-12  absolute">
            <img class="w-64 h-48 object-cover mobile-layout-img  rounded" src="../assets/services/service-pic-1.png">
            <p class="link-font heading-text leading-tight text-center">Web Development</p>
          </div>
          <div class="right-[220px] mobile-layout top-36 z-40 absolute">
            <img class="w-64 h-48 object-cover mobile-layout-img  rounded" src="../assets/services/service-pic-2.png">
            <p class="link-font heading-text leading-tight text-center">Web Design</p>
          </div>
          <div class="right-12 top-[-12px] mobile-layout absolute">
            <img class="w-64 h-48 object-cover mobile-layout-img rounded" src="../assets/services/service-pic-3.png">
            <p class="link-font heading-text leading-tight  ml-4 text-center">SEO</p>
          </div>
        </div>
      </div>
      <div class="w-3/5 absolute right-12 flex justify-evenly gap-12  bottom-[-140px] mobile-hide mb-48">
        <img class="cursor-pointer" @click="goto('contact')" src="../assets/services/start.png">
        <img class="cursor-pointer" @click="goto('contact')" src="../assets/services/quote.png">
        <img class="cursor-pointer" @click="goto('contact')" src="../assets/services/consult.png">
      </div>
    </div>
  </section>
  <!-- <section>
     </section> -->
  <section class="relative w-screen flex mobile-schedule">
    <img class="w-screen object-cover" src="../assets/schedulecall/schedulecallbg.png">
    <img class="mobile-schedule absolute bottom-12 right-1/4  mobile-schedule-text "
      src="../assets/schedulecall/schedulecalltext.png">
    <a href="https://calendly.com/jackapplications/15minute-interview" target="_blank">

      <button class="btn btn-orange mobile-schedule mobile-schedule-button absolute bottom-12 w-48 right-96">Call</button>
    </a>
    <img class="absolute w-1/4 top-[-50px] right-12 mobile-schedule mobile-schedule-img "
      src="../assets/schedulecall/phone.png">

  </section>
  <section class="w-screen bg-gray-100 flex flex-row-reverse mobile-column-reverse p-4">
    <div class="mt-8 flex flex-col justify-center mob-ben pt-24 w-1/2 mobile-j">
      <div class="drop-shadow-md bg-white mb-2 w-fit">
        <h3 class="sub-heading-text   heading-text text-6xl text-center font-[400] tracking-[40%]">UNLOCK
          YOUR ONLINE
          SUCCESS</h3>
      </div>
      <div class="relative flex justify-center">
        <img class="w-1/2 mobile-j mobile-benefits-img self-center" src="../assets/unlocksuccess/C.png">
        <font-awesome-icon class="brand-icon brand-icon-purple absolute w-[50px] h-auto right-10 top-12"
          :icon="['fab', 'html5']" />
        <font-awesome-icon class="brand-icon brand-icon-orange absolute w-[30px] h-auto left-16 top-26"
          :icon="['fab', 'css3-alt']" />
        <font-awesome-icon class="text-black brand-icon-purple absolute w-[20px] h-auto left-48 top-0"
          :icon="['fab', 'js']" />
        <font-awesome-icon class="text-black brand-icon-orange absolute w-[70px] h-auto left-16 top-48"
          :icon="['fab', 'wordpress']" />
        <font-awesome-icon class="text-black brand-icon-orange absolute w-[60px] h-auto right-32 top-36"
          :icon="['fab', 'laravel']" />
        <font-awesome-icon class="text-black brand-icon-purple absolute w-[50px] h-auto bottom-0 right-48"
          :icon="['fab', 'vuejs']" />
        <!-- <div class="ball-container-c animation-c" id="ball-container-c">
          <img class="ball-c absolute" id="ball-c" src="../assets/ball/ball.png">
        </div> -->
      </div>

    </div>
    <div class=" flex flex-col w-1/2 mobile-j justify-center items-center text-center">
      <h3 class="light-heading sub-heading heading-text sub-heading-font-size">Benefits</h3>
      <ul>
        <li class=" p-4 gap-2 link-font heading-text leading-tight  text-center flex flex-row">
          <font-awesome-icon :icon="['fa', 'check']" class="h-2 circle text-white p-2 rounded-full" />
          <h4 class="h-2 mob-text">Bring Organic Search Traffic to your Website.</h4>
        </li>
        <li class=" p-4 gap-2 link-font heading-text leading-tight  text-center flex flex-row">
          <font-awesome-icon :icon="['fa', 'check']" class="h-2 circle text-white p-2 rounded-full" />
          <h4 class="h-2 mob-text">Generate Leads Cost-Effectively.</h4>
        </li>
        <li class=" p-4 gap-2 link-font heading-text leading-tight  text-center flex flex-row">
          <font-awesome-icon :icon="['fa', 'check']" class="h-2 circle text-white p-2 rounded-full" />

          <h4 class="h-2 mob-text">Increases Brand Awareness.</h4>
        </li>
        <li class=" p-4 gap-2 link-font heading-text leading-tight  text-center flex flex-row">
          <font-awesome-icon :icon="['fa', 'check']" class="h-2 circle text-white p-2 rounded-full" />

          <h4 class="h-2 mob-text">Get Ahead of the Competition.</h4>
        </li>
        <li class=" p-4 gap-2 link-font heading-text leading-tight  text-center flex flex-row">
          <font-awesome-icon :icon="['fa', 'check']" class="h-2 circle text-white p-2 rounded-full" />

          <h4 class="h-2 mob-text">Optimize Your Website for Mobile Users.</h4>
        </li>
        <li class=" p-4 gap-2 link-font heading-text leading-tight  text-center flex flex-row">
          <font-awesome-icon :icon="['fa', 'check']" class="h-2 circle text-white p-2 rounded-full" />

          <h4 class="h-2 mob-text">Build Trust.</h4>
        </li>
        <li class=" p-4 gap-2 link-font heading-text leading-tight  text-center flex flex-row">
          <font-awesome-icon :icon="['fa', 'check']" class="h-2 mob-text circle text-white p-2 rounded-full" />

          <h4 class="h-2 mob-text">Easier Return on Investment</h4>
        </li>
      </ul>
    </div>

  </section>
  <section class="testimonial relative w-screen pt-4 mobile-testimonial-padding">
    <img class="background  mobile-testimonial  object-cover" src="../assets/testimonials/tesimonialbg.png">
    <div class="flex mobile-column absolute top-24 mobile-testimonial-content  justify-center">
      <div class="test-card mobile-card w-1/4 test-card-layout  p-4 m-4 mt-16">
        <div class="test-card__text rounded-t-lg mobile-card-content bg-white pt-20 pb-20 pl-8 pr-8">
          <p class="text-black italic">
            "They were excellent with timelines and with communications."</p>
        </div>
        <div class="test-card__content rounded-b-lg flex p-4 gap-4">
          <img src="../assets/testimonials/testimonial1.png" class="card-content__img">
          <div class="card-content__text flex flex-col justify-center mobile-card-info gap-2 p-2">
            <h4 class="text-base text-white font-semibold">Joe Wong</h4>
            <p class="small-grey">Founder & Owner, Infinity 8 Digital</p>
          </div>
        </div>

      </div>

      <div class="test-card mobile-card w-1/4  p-4 m-4">
        <div class="test-card__text mobile-card-content rounded-t-lg bg-white pt-20 pb-20 pl-8 pr-8">
          <p class="text-black italic">"I must say they were unique compared to the other agencies we interviewed."
          </p>
        </div>
        <div class="test-card__content rounded-b-lg flex p-4 gap-4">
          <img src="../assets/testimonials/testimonial2.png" class="card-content__img">
          <div class="card-content__text flex flex-col justify-center mobile-card-info gap-2 p-2">
            <h4 class="text-base text-white font-semibold">Leander De Caluwe</h4>
            <p class="small-grey">CEO, Kickerfy</p>
          </div>
        </div>

      </div>
      <div class="test-card mobile-card w-1/4  p-4 m-4 mt-6">
        <div class="test-card__text mobile-card-content rounded-t-lg bg-white pt-20 pb-20 pl-8 pr-8">
          <p class="text-black italic">"We were very impressed with their project management, communication, and quality
            of their work."
          </p>
        </div>
        <div class="test-card__content rounded-b-lg flex p-4 gap-4">
          <img src="../assets/testimonials/testimonial3.png" class="card-content__img">
          <div class="card-content__text flex flex-col justify-center mobile-card-info gap-2 p-2">
            <h4 class="text-base text-white font-semibold">Irfan Mir</h4>
            <p class="small-grey">Director of Sales</p>
          </div>
        </div>

      </div>
    </div>



  </section>

  <section class="w-screen pt-24 h-full pb-60 flex flex-row mobile-column ">
    <div class="h-full"> <img class="rocket relative" src="../assets/CTA2/rocket.png">
    </div>
    <div ref="contact" id="contact">
      <ContactForm />
    </div>
  </section>
  <div class=" fixed z-20002 right-0">
    <ChatBot />
  </div>
</template>

<style scoped>
.background {
  filter: blur(6px);
  object-fit: cover;
  width: 100vw;
}

.card-content__img {
  width: 75px;
  height: 75px;
}

.test-card__content {
  background: #380146;
}

.card-container2 {
  position: relative;
  transform: translateY(-20%);
}

.card-container3 {
  position: relative;
  transform: translateY(-40%);
}

.card {
  height: 560px;
  width: 280px;
  background-size: cover;
  transition: all 0.6s ease-in-out;
}

.card1 {
  background-image: url("../assets/CTA2/digitalpotential.png");
}

.card1:hover {
  background-image: url("../assets/CTA2/DiscoverHover.png");
}

.card2 {
  background-image: url("../assets/CTA2/Explore.png");
}

.card2:hover {
  background-image: url("../assets/CTA2/ExploreHover.png");
}

.card3 {
  background-image: url("../assets/CTA2/audit.png");
}

.card3:hover {
  background-image: url("../assets/CTA2/AuditHover.png");
}

.card:hover {
  transform: scale(125%);
}

.card:hover+.info-cont {
  transform: translateY(75%);
  transition: all 0.6s ease;
}

.card:hover+.card-btn {
  transform: translateY(175%);
}


.btn {
  border-radius: 80px;
  padding: 15px 40px;
  font-weight: 700;
}

.btn-book {
  width: 270px;
  height: 50px;
}

.btn-nav {
  width: 220px;
  top: 5px;
  height: 50px;
}

.btn-book p {
  position: absolute;
  top: 7px;
  left: 30px;
}

.brand-icon-purple {
  color: #380146;
}

.brand-icon-orange {
  color: #FF6B00;
}

.btn-arrow {
  position: absolute;
  top: 15px;
  right: 40px;
  font-size: 18px;
}

::placeholder {
  align-self: center;

}

input,
select,
textarea {
  color: black;
}

.btn-nav:hover {
  height: 55px;
  width: 240px;
  transition: all 0.3s ease-in-out;
}

.btn-book:hover {
  height: 55px;
  width: 300px;
  transition: all 0.3s ease-in-out;
}

.btn:hover .btn-arrow {
  transform: rotate(-45deg);

  transition: all 0.4s ease-in-out;
}

.btn-orange:hover .btn-arrow {
  color: black;
}

.btn-purple:hover .btn-arrow {
  color: #FF6B00;
}


.btn-orange {
  background: #FF6B00;
  color: #F9FAFB;
}

.btn-purple {
  background: #380146;
  color: #F9FAFB;
}


.rocket {
  left: -10%;

  @media screen and (max-width: 768px) {
    left: unset;
    height: 100vh;
    object-fit: cover;
  }
}


.ball {
  bottom: 50px;
  right: 0px;
  width: 50px;
  height: 50px;
  /* transform: translateY(-50px); */
}

.ball-a {
  width: 50px;
  height: 50px;
  position: absolute;
  left: 85px;
  top: 120px;
  /* transform: translateY(-50px); */
}

.ball-c {
  top: 180px;
  left: 0px;
  width: 50px;
  height: 50px;

  /* transform: translateY(-50px); */
}

/* .ball-spin-reverse {
  animation: spinball 2s ease-in-out;
}

.ball-spin-reverse {
  animation: spinball-opposite 2s ease-in-out;
} */

@keyframes spinball {
  100% {

    transform: rotate(-720deg);
  }

}

@keyframes spinball-opposite {
  100% {

    transform: rotate(720deg);
  }

}

.ball-container {
  left: 33px;
  /* top: 185px; */
  position: relative;
  width: 230px;
  height: 230px;
  border: 5px solid transparent;
  border-radius: 50%;
  transform: rotate(0deg);
}

.ball-container-a {
  position: absolute;
  left: 0;
  top: 0;
  width: 230px;
  height: 230px;
  border: 5px solid transparent;

}

.ball-container-c {
  left: 405px;
  top: 40px !important;
  width: 475px;
  height: 480px;
  border: 5px solid transparent;
  border-radius: 50%;
  position: absolute;
}

.animation {
  top: 185px;
  transition: transform 0.7s linear;
  animation: drop, spin;
  animation-duration: 1s, 2s;
  animation-delay: 0s, 1s;
  animation-fill-mode: forwards;
}

.animation-c {
  top: 185px;
  animation: translateY, rotate;
  animation-duration: 4s;
  animation-fill-mode: forwards;
}


.animation-a {

  top: 180px;
  animation: animate-a;
  animation-duration: 1s;
  animation-delay: 0s;
  animation-fill-mode: forwards;
}

@keyframes translateY {
  0% {
    animation-timing-function: ease-in;


    transform-origin: 50% 50%;

    transform: rotate(0deg);
  }


  33% {

    animation-timing-function: ease-out;

    transform-origin: 50% calc(50% - 10px);

    transform: rotate(-90deg);

  }

  66% {
    animation-timing-function: ease-in-out;
    transform-origin: 50% 50%;
    transform: rotate(-180deg);
  }

  100% {
    animation-timing-function: cubic-bezier(0.33333, 0, 0.66667, 0.33333);
    transform-origin: 50% calc(50% - 10px);
    transform: rotate(-90deg);

  }
}

/* 
@keyframes rotate {
  100% {
    transform: rotate(-180deg);
  }

} */

@keyframes animate-a {
  0% {
    animation-timing-function: cubic-bezier(0.33333, 0, 0.66667, 0.33333);

    transform: translate3d(70px, -200px, 0);
  }
}

@keyframes spin {
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0, 0);

    transform: rotate(120deg);
  }

  100% {
    animation-timing-function: cubic-bezier(0, 0, 0, 0);

    transform: rotate(65deg);
  }
}

@keyframes drop {

  0% {
    animation-timing-function: cubic-bezier(0.33333, 0, 0.66667, 0.33333);

    transform: translateY(-200px);
  }
}

.circle {
  background-color: #FF6B00;
}

@media screen and (max-width: 768px) {

  .mobile-card {
    width: 90%;
    align-self: center;
    margin-top: 20px;
    margin-left: unset;
    margin-right: unset;
    padding: unset;
  }


  .mobile-testimonial-padding {
    padding: unset;
  }

  .mobile-card-info {
    padding: unset;
    gap: 5px;
  }

  /* .card-content__img {
    display: none;
  } */

  .mobile-card-content {
    padding: 5px 15px 5px 15px;
  }

  .test-card-layout {

    top: 0;
  }

  .mobile-test {
    position: relative;
    height: 100vh;
  }

  .mobile-testimonial {
    height: 100vh;
  }

  .mobile-testimonial-content {
    position: absolute;
    top: 0;
  }

  .mob-text {
    font-size: 14px;
  }

  .mob-ben {
    padding-top: 5px;
  }

  .mobile-schedule {
    bottom: unset;
    top: unset;
    right: unset;
    height: 50vh;
  }

  .mobile-schedule-text {
    width: 90vw;
    height: auto;
    top: 50px;
    padding: 5px;
  }

  .mobile-schedule-img {
    width: 50vw;
    height: auto;
    position: absolute;
    right: 0;
    top: 100px;
  }

  .mobile-schedule-button {
    position: absolute;
    height: 50px;
    width: 180px;
    top: 42%;
    left: 10%;
  }


  .mobile-hide {
    display: none;
    width: unset;
    bottom: unset;
    position: unset;
  }

  .mobile-layout {
    right: unset;
    top: unset;
    align-self: center;
    position: unset;
  }

  .image-center {
    width: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;
    right: unset
  }

  .mobile-layout-img {

    height: auto;

  }

  .mobile-column-reverse {
    flex-direction: column-reverse;
  }

  .mobile-column {
    flex-direction: column;
  }

  .mobile-width {
    width: 100% !important;
  }

  .mobile-j {
    width: 100vw !important;
    align-self: center;
  }

  .mobile-button {
    width: 50%;
    align-self: center;
  }

  .mobile-text {
    text-align: center;
  }

  .mobile-padding {
    padding: 0;
  }

  .mobile-justify {
    justify-content: center;
  }

  .mobile-position-absolute {
    position: absolute;
    z-index: -1;
  }
}
</style>

<script>

import ContactForm from "../components/ContactForm.vue"
import ChatBot from "../components/ChatBot.vue"
import emailjs from 'emailjs-com';
import { useToast } from "vue-toastification";


export default {
  name: 'app',
  components: {
    ContactForm,
    ChatBot
  },
  setup() {
    const toast = useToast();
    return { toast }
  },
  mounted() {
    this.getGeolocationInformation()
  },

  data() {
    return {
      name: "",
      email: "",
      message: "",
      city: "",
    };
  },

  computed: {
    formValid() {
      const { name, email, message } = this;
      return (
        name.length > 0 &&
        /(.+)@(.+){2,}.(.+){2,}/.test(email) &&
        message.length > 0
      );
    },
  },

  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    failMessage() {
      this.toast("There was a problem, please try again", {
        position: "bottom-left",
        type: "error",
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: "fas fa-rocket",
        rtl: false
      });
    },
    successMessage() {
      this.toast("Your email was successfully sent", {
        position: "bottom-left",
        type: "success",
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: "fas fa-rocket",
        rtl: false
      });
    },
    completionError() {
      this.toast("Please fill out all fields", {
        position: "bottom-left",
        type: "error",
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: "fas fa-rocket",
        rtl: false
      });
    },

    bookSession(e) {
      if (this.email == "") {
        this.completionError()
      }
      else {
        try {
          emailjs.sendForm('service_ps7esew', 'template_0uatch7', e.target, 'fKg-Qp0mj7sy-gvcD', {
            email: this.email,
          }).then(

            () => {
              this.successMessage()
              clearState();
              setStatusMessage("Email sent success");
            },
            () => {
              this.failMessage()
            }
          )

        } catch (err) {
          if (err instanceof ReferenceError) {
            this.failMessage()
          } else {
            this.failMessage()
            throw err; // rethrow
          }
        }
        // Reset form field

        this.email = ''
      }
    },


    async getGeolocationInformation() {
      // send your API request here
      const API_KEY = 'df0fb3b765af472ba970603aca182bef';
      const API_URL = 'https://ipgeolocation.abstractapi.com/v1/?api_key=' + API_KEY;
      const apiResponse = await fetch(API_URL);
      const data = await apiResponse.json();
      const { city, country, region } = data;
      this.city = city;
      this.region = region;
      this.country = country;


    },
    onReset() {
      this.name = "";
      this.email = "";
      this.message = "";
    },
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo({
        top: top,
        left: 0,
        behavior: "smooth",
      });
    },
    submit() {
      if (!this.formValid) {
        return;
      }
      if (!localStorage.getItem("messages")) {
        localStorage.setItem("messages", JSON.stringify([]));
      }
      const messages = JSON.parse(localStorage.getItem("messages"));
      const { name, email, message } = this;
      messages.push({
        name,
        email,
        message,
      });
      localStorage.setItem("messages", JSON.stringify(messages));
      console.log(messages)
    },

    handleScroll(event) {
      var el = document.getElementById("ball-container")
      var a = document.getElementById("ball-container-a")
      if (window.scrollY > 0) {

        const observer = new IntersectionObserver(entries => {
          el.classList.toggle('animation', entries[0].isIntersecting);
        });

        observer.observe(el);
      }

      const observer = new IntersectionObserver(entries => {
        a.classList.toggle('animation-a', entries[0].isIntersecting);
      });

      observer.observe(a);


    }
  }
}
</script>



