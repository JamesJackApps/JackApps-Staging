lines (27 sloc)  459 Bytes

<template>
  <div class="bg-white min-h-screen">
    <Nav />
    <Home />
    <!-- <router-view /> -->
    <Footer />
  </div>
</template>

<script>

import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
import Home from "./components/Home.vue";
// /import SideBarNav from "./components/SideBarNav.vue";

export default {
  components: {
    Nav,
    Home,
    Footer
  }
}

</script>

<style>
a {
  text-decoration: none !important;
  ;
}

.heading-text {
  color: #380146;
}

.light-heading {
  font-weight: 400;
}

.textarea {
  line-height: 30px;
  vertical-align: middle;
}

.sub-heading-font-size {
  font-size: 56px;
}


.btn {
  border-radius: 80px;
  padding: 15px 40px;
  font-weight: 700;
}

.btn-nav {
  position: absolute;
  width: 220px;
  top: 5px;
  height: 50px;
}

.btn-nav p {
  position: absolute;
  top: 7px;
  left: 30px;
}

.btn-arrow {
  position: absolute;
  top: 15px;
  right: 40px;
  font-size: 18px;
}

.btn:hover {
  height: 55px;
  width: 240px;
  transition: all 0.3s ease-in-out;
}

.btn:hover .btn-arrow {
  transform: rotate(-45deg);
  color: black;
  transition: all 0.4s ease-in-out;
}

.btn-orange {
  background: #FF6B00;
  color: #F9FAFB;
}

.btn-purple {
  background: #380146;
  color: #F9FAFB;
}

.small-grey {
  color: #F9FAFB;
  font-weight: 200;
  font-size: 10px;

}

.nav-link {
  width: 25%;
  color: #380146;
  font-weight: 400;
  padding: 10px 10px 10px 10px;

}

/* .nav-img {
  margin-top: 10px;
} */

.nav-img:hover {

  transform-origin: top left;
  transform: scale(110%);
  filter: saturate(1%) brightness(800%);
  transition: transform 0.4s ease-in-out;
}

.nav-link:hover {

  padding: 10px 15px 10px 15px;
  background-color: #FF6B00;
  transition: all 0.4s ease-in-out;
}

/* .btn {
  @apply bg-green-600 duration-300 font-bold py-2 px-4 rounded-lg inline-block;
}



.btn:hover {
  @apply bg-green-700;
} */
</style>