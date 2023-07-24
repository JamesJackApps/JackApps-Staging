


<template v-on:scroll="doStuff">
  <section class="h-screen">
    <div class="flex p-16">
      <div class="w-1/2 left-0">
        <div class="mb-8">
          <h1 class="w-1/2 light-heading sub-heading heading-text sub-heading-font-size">
            Lorem ipsum dolor sit.
          </h1>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col w-5/6">
            <p class="link-font heading-text">We are determined to make your business in</p>
            <div class="flex">
              <p class="orange-text bold text-xl sub-heading  align-baseline pr-2">London</p>
              <p class="link-font heading-text leading-tight mt-[5px]">successful</p>
            </div>
            <div class="flex pt-4">
              <textarea placeholder="Enter your website URL"
                class="resize-none h-[50px] w-48 pt-[10px] pl-1 bg-transparent border-t border-b border-l rounded-l-[50px]"></textarea>
              <div class="w-12 border-t border-r border-b h-[50px] rounded-r-[50px]">
                <font-awesome-icon class="text-gray-400 pt-[15px]" :icon="['fas', 'magnifying-glass']" />
              </div>
              <button class="btn ml-2 btn-purple">Analyze Website</button>
            </div>
          </div>

        </div>
      </div>
      <div class="relative flex w-1/2 right-0">
        <img class="absolute h-128" src="../assets/hero/hero-icons.png">

        <div>
          <img class=" h-[500px] absolute right-64" src="../assets/hero/j.png">
          <div class="ball-container" id="ball-container">
            <img class="ball absolute" id="ball" src="../assets/ball/ball.png">
          </div>
        </div>
      </div>

    </div>

  </section>
  <button v-on:click="doStuff()" class=" btn btn-purple absolute top-0 right-48 w-48">Your Business</button>


  <section class="flex relative flex-col p-8">
    <img class="w-1/2 relative p-4" src="../assets/services/servicesheader.png">
    <div class="flex relative flex-col">
      <div class="flex">
        <div class="flex relative">
          <img class=" bottom-0" src="../assets/services/a.png">
        </div>
        <div class="flex relative p-4 w-full gap-4 right-12">

          <img class="w-64 h-48 object-cover right-[440px] top-12  absolute rounded"
            src="../assets/services/service-pic-1.png">
          <img class="w-64 h-48 object-cover right-[220px] top-36 z-40 absolute rounded"
            src="../assets/services/service-pic-2.png">
          <img class="w-64 h-48 object-cover right-12 top-[-12px]   absolute rounded"
            src="../assets/services/service-pic-3.png">
        </div>
      </div>
      <div class="w-3/5 absolute right-12 flex justify-evenly gap-12  bottom-[-120px] mb-48">
        <img src="../assets/services/start.png">
        <img src="../assets/services/quote.png">
        <img src="../assets/services/consult.png">
      </div>
    </div>
    <div class="relative flex flex-col justify-center">
      <img class=" self-center" src="../assets/services/upgrade-now-text.png">
      <button class="btn btn-purple absolute top-0 right-48 w-48">Your Business</button>
      <img class="w-3/5 self-center" src="../assets/services/moneyframe.png">
    </div>
  </section>
  <section class="relative flex">
    <img src="../assets/schedulecall/schedulecallbg.png">
    <img class="absolute bottom-12 right-1/4 " src="../assets/schedulecall/schedulecalltext.png">
    <button class="btn btn-orange absolute bottom-12 w-48 right-96">Call</button>
    <img class="absolute w-1/4 top-[-50px] right-12 " src="../assets/schedulecall/phone.png">

  </section>
  <section class="bg-gray-100">
    <div class="mt-8 flex flex-col justify-center pt-24">
      <img class="w-1/2 self-center" src="../assets/unlocksuccess/Unlocksuccess.png">
      <img class="w-1/2 self-center" src="../assets/unlocksuccess/C.png">
      <img class="w-3/4 self-center absolute" src="../assets/unlocksuccess/usi.png">

    </div>
  </section>
  <section class="testimonial relative w-100 pt-4">
    <img class="background" src="../assets/testimonials/tesimonialbg.png">
    <div class="flex absolute top-24 justify-center">
      <div class="test-card w-1/4  p-4 m-4 mt-16">
        <div class="test-card__text rounded-t-lg bg-white pt-20 pb-20 pl-8 pr-8">
          <p class="text-black italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vitae, et illum
            pariatur
            fugit consequuntur
            veritatis, consectetur officia ea consequatur eius vero veniam delectus tempora error vel neque
            perspiciatis
            porro?</p>
        </div>
        <div class="test-card__content rounded-b-lg flex p-4 gap-4">
          <img src="../assets/testimonials/testimonial1.png" class="card-content__img">
          <div class="card-content__text flex flex-col justify-center gap-2 p-2">
            <h4 class="text-base font-semibold">Kristen Watson</h4>
            <p class="small-grey">Marketing Director</p>
          </div>
        </div>

      </div>

      <div class="test-card w-1/4  p-4 m-4">
        <div class="test-card__text rounded-t-lg bg-white pt-20 pb-20 pl-8 pr-8">
          <p class="text-black italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vitae, et illum
            pariatur
            fugit consequuntur
            veritatis, consectetur officia ea consequatur eius vero veniam delectus tempora error vel neque
            perspiciatis
            porro?</p>
        </div>
        <div class="test-card__content rounded-b-lg flex p-4 gap-4">
          <img src="../assets/testimonials/testimonial2.png" class="card-content__img">
          <div class="card-content__text flex flex-col justify-center gap-2 p-2">
            <h4 class="text-base font-semibold">Jerome Bell</h4>
            <p class="small-grey">Project Manager</p>
          </div>
        </div>

      </div>
      <div class="test-card w-1/4  p-4 m-4 mt-6">
        <div class="test-card__text rounded-t-lg bg-white pt-20 pb-20 pl-8 pr-8">
          <p class="text-black italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vitae, et illum
            pariatur
            fugit consequuntur
            veritatis, consectetur officia ea consequatur eius vero veniam delectus tempora error vel neque
            perspiciatis
            porro?</p>
        </div>
        <div class="test-card__content rounded-b-lg flex p-4 gap-4">
          <img src="../assets/testimonials/testimonial3.png" class="card-content__img">
          <div class="card-content__text flex flex-col justify-center gap-2 p-2">
            <h4 class="text-base font-semibold">Jane Cooper</h4>
            <p class="small-grey">Director of Sales</p>
          </div>
        </div>

      </div>
    </div>



  </section>
  <section class="w-screen h-full pb-60 ">
    <div class="h-full"> <img class="rocket relative" src="../assets/CTA2/rocket.png">
    </div>
    <div class="h-full flex flex-row space-x-24 justify-center">
      <div class=" flex flex-col justify-center items-center gap-4">
        <div class="card card1">
        </div>
        <div class="info-cont">
          <p class="text-black text-center mt-2 card-text pb-2">Explore</p>
          <button class="btn btn-purple ">Explore</button>
        </div>
      </div>
      <div class=" flex flex-col justify-center items-center gap-4 card-container2">
        <div class="card card2">
        </div>
        <div class="info-cont">
          <p class="text-black text-center mt-2 card-text pb-2">Explore</p>
          <button class="btn btn-purple ">Explore</button>
        </div>
      </div>

      <div class=" flex flex-col justify-center items-center gap-4 card-container3">
        <div class="card card3">
        </div>
        <div class="info-cont">
          <p class="text-black text-center mt-2 card-text pb-2">Explore</p>
          <button class="btn btn-purple ">Explore</button>
        </div>
      </div>
    </div>

  </section>
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



.rocket {
  left: -10%;
}

/* .ball {

 
  animation: xAxis 2.5s infinite cubic-bezier(0.02, 0.01, 0.21, 1);
} */

.ball {
  bottom: 50px;
  right: 0px;
  width: 50px;
  height: 50px;
  /* transform: translateY(-50px); */



}

.ball-spin {
  animation: spinball 2s ease-in-out;
}

@keyframes spinball {
  100% {

    transform: rotate(-720deg);
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

.animation {
  top: 185px;
  transition: transform 0.7s linear;
  animation: drop, spin;
  animation-duration: 1s, 1s;
  animation-delay: 0s, 1s;
  animation-fill-mode: forwards;
}

@keyframes spin {
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0, 0);

    transform: rotate(120deg);
  }

  100% {
    animation-timing-function: cubic-bezier(0, 0, 0, 0);

    transform: rotate(70deg);
  }
}

@keyframes drop {

  0% {
    animation-timing-function: cubic-bezier(0.33333, 0, 0.66667, 0.33333);

    transform: translateY(-200px);
  }

}
</style>

<script>

export default {
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      var el = document.getElementById("ball-container")
      var el2 = document.getElementById("ball")
      console.log(el);
      if (window.scrollY > 0) {
        el.classList.add("animation")
        el2.classList.add("ball-spin")
      }


    }
  }
}
</script>



