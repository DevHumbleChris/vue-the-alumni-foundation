<script setup>
import { computed } from "vue";
import { useStore } from "../store";
import Navbar from "./Navbar.vue";

const store = useStore();

defineProps({
  msg: String,
});

const count = computed(() => {
  return store.count;
});
</script>

<template>
  <main>
    <Navbar />
    <div class="bg-cream">
      <div class="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start">
        <!--Left Col-->
        <div
          class="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0"
        >
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="my-4 text-5xl font-bold leading-tight text-darken"
          >
            <span class="text-yellow-500">The Alumni Foundation</span> making everything
            easier
          </h1>
          <p
            data-aos="fade-down"
            data-aos-delay="1000"
            data-aos-once="true"
            class="leading-normal text-2xl mb-8"
          >
            The Alumni Foundation is a platform dedicated into bringing closer both the
            students and its alumni.
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="1300"
            data-aos-once="true"
            class="w-full md:flex items-center justify-center lg:justify-start md:space-x-5"
          >
            <button
              class="lg:mx-0 bg-yellow-500 text-white text-xl font-bold rounded-full py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out"
            >
              Join for free
            </button>
            <div
              class="flex items-center justify-center space-x-3 mt-5 md:mt-0 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out"
            >
              <button
                class="bg-white w-14 h-14 rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 ml-2"
                  viewBox="0 0 24 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z"
                    fill="#23BDEE"
                  />
                </svg>
              </button>
              <span class="cursor-pointer">Watch how it works</span>
            </div>
          </div>
        </div>
        <!--Right Col-->
        <div class="w-full lg:w-6/12 lg:-mt-10 relative" id="girl">
          <img
            data-aos="fade-up"
            class="w-10/12 mx-auto 2xl:-mb-20"
            src="../assets/img/girl.png"
          />
          <!-- calendar -->
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-once="true"
            class="absolute top-20 -left-6 sm:top-32 sm:left-10 md:top-40 md:left-16 lg:-left-0 lg:top-52 floating-4"
          >
            <img
              class="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16"
              src="../assets/img/calendar.svg"
            />
          </div>
          <!-- red -->
          <div
            data-aos="fade-up"
            data-aos-delay="1300"
            data-aos-once="true"
            class="absolute top-20 right-10 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-32 lg:right-16 floating"
          >
            <svg
              class="h-16 sm:h-24"
              viewBox="0 0 149 149"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <rect x="40" y="32" width="69" height="69" rx="14" fill="#F3627C" />
              </g>
              <rect
                x="51.35"
                y="44.075"
                width="47.3"
                height="44.85"
                rx="8"
                fill="white"
              />
              <path
                d="M74.5 54.425V78.575"
                stroke="#F25471"
                stroke-width="4"
                stroke-linecap="round"
              />
              <path
                d="M65.875 58.7375L65.875 78.575"
                stroke="#F25471"
                stroke-width="4"
                stroke-linecap="round"
              />
              <path
                d="M83.125 63.9125V78.575"
                stroke="#F25471"
                stroke-width="4"
                stroke-linecap="round"
              />
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0"
                  width="149"
                  height="149"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="8" />
                  <feGaussianBlur stdDeviation="20" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.825 0 0 0 0 0.300438 0 0 0 0 0.396718 0 0 0 0.26 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <!-- ux class -->
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-once="true"
            class="absolute bottom-14 -left-4 sm:left-2 sm:bottom-20 lg:bottom-24 lg:-left-4 floating"
          >
            <img
              class="bg-white bg-opacity-80 rounded-lg h-20 sm:h-28"
              src="../assets/img/ux-class.svg"
              alt=""
            />
          </div>
          <!-- congrats -->
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-once="true"
            class="absolute bottom-20 md:bottom-48 lg:bottom-52 -right-6 lg:right-8 floating-4"
          >
            <img
              class="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16"
              src="../assets/img/congrat.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="text-white -mt-14 sm:-mt-24 lg:-mt-36 z-40 relative">
        <svg
          class="xl:h-40 xl:w-full"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            fill="currentColor"
          ></path>
        </svg>
        <div class="bg-white w-full h-20 -mt-px"></div>
      </div>
    </div>

    <!-- container -->
    <div
      class="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 overflow-x-hidden"
    >
      <!-- lorem -->
      <div class="mt-2">
        <div data-aos="flip-down" class="text-center max-w-screen-md mx-auto">
          <h1 class="text-3xl font-bold mb-4">
            What is <span class="text-yellow-500">The Alumni Foundation?</span>
          </h1>
          <p class="text-gray-500">
            The Alumni Foundation is a platform that combines all the tools needed to run
            a successful interaction between the alumni and the students. Purposefully it
            creates an online space for both the alumni and students where they can share
            course materials online, mentor students, teach students, monitor the students
            academically; provide students with feedback all in one place. The key role is
            to help the student academically nd career life too.
          </p>
        </div>
        <div
          data-aos="fade-up"
          class="flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-6 lg:space-x-10 mt-7"
        >
          <div class="relative md:w-5/12">
            <img class="rounded-2xl" src="../assets/img/Rectangle19.png" alt="" />
            <div
              class="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl"
            >
              <div
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <h1
                  class="uppercase text-white font-bold text-center text-sm lg:text-xl mb-3"
                >
                  FOR ALUMNI
                </h1>
                <button
                  class="rounded-full text-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out"
                >
                  Start helping today
                </button>
              </div>
            </div>
          </div>
          <div class="relative md:w-5/12">
            <img class="rounded-2xl" src="../assets/img/Rectangle21.png" alt="" />
            <div
              class="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl"
            >
              <div
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <h1
                  class="uppercase text-white font-bold text-center text-sm lg:text-xl mb-3"
                >
                  FOR STUDENTS
                </h1>
                <button
                  class="rounded-full text-white text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out"
                  style="background: rgba(35, 189, 238, 0.9)"
                >
                  Get on board today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Tools For Teachers And Learners -->
      <div class="flex flex-col md:flex-row items-center md:space-x-10 mt-16">
        <div data-aos="fade-right" class="md:w-1/2 lg:pl-14">
          <h1 class="text-darken font-semibold text-3xl lg:pr-56">
            <span class="text-yellow-500">Tools</span> For Alumni And Students
          </h1>
          <p class="text-gray-500 my-4 lg:pr-32">
            The Alumni Foundation Platform will provide all the necssary set of teaching
            tools built to allow Alumni to be able to handout assignments in real-time for
            students to complete and submit.
          </p>
        </div>
        <img
          data-aos="fade-left"
          class="md:w-1/2"
          src="../assets/img/girl-with-books.png"
        />
      </div>

      <!-- Class Management Tools for Educators -->
      <div class="flex flex-col md:flex-row items-center mt-12">
        <div data-aos="fade-right" class="md:w-5/12">
          <h1 class="text-darken font-semibold text-3xl leading-tight lg:pr-32">
            <span class="text-yellow-500">Management</span> Tools for Alumni
          </h1>
          <p class="my-5 lg:pr-14">
            The Alumni Foundation Platform will provide tools to help run and manage the
            students such as keeping track of students the Alumni is intergrated to,
            Attendance, and more.
          </p>
        </div>
        <img data-aos="fade-left" class="md:w-7/12" src="../assets/img/gradebook.png" />
      </div>

      <!-- One-on-One Discussions -->
      <div class="mt-24 flex flex-col-reverse md:flex-row items-center md:space-x-10">
        <div data-aos="fade-right" class="md:w-7/12">
          <img class="md:w-11/12" src="../assets/img/discussion.png" />
        </div>
        <div data-aos="fade-left" class="md:w-5/12 md:transform md:-translate-y-6">
          <h1 class="font-semibold text-darken text-3xl lg:pr-64">
            One-on-One <span class="text-yellow-500">Discussions</span>
          </h1>
          <p class="text-gray-500 my-5 lg:pr-24">
            The Alumni can talk with students privately without leaving the Zoom
            environment.
          </p>
        </div>
      </div>

      <!-- INTEGRATIONS -->
      <div class="mt-8 flex flex-col md:flex-row items-start md:space-x-10">
        <div data-aos="zoom-in-right" class="md:w-6/12">
          <img class="md:w-8/12 mx-auto" src="../assets/img/integrations.png" />
        </div>
        <div data-aos="zoom-in-left" class="md:w-6/12">
          <div class="flex items-center space-x-20 mb-5">
            <span class="border border-gray-300 w-14 absolute"></span>
            <h1 class="text-gray-400 tracking-widest text-sm">INTEGRATIONS</h1>
          </div>
          <h1 class="font-semibold text-darken text-2xl lg:pr-40">
            200+ educational tools and platform
            <span class="text-yellow-500">integrations</span>
          </h1>
          <p class="text-gray-500 my-5 lg:pr-20">
            Our aim at The Alumni Foundation is to try as much as possible to intergrate
            all the necessary tools to make it a successfully process for both the
            students and the alumni.
          </p>
        </div>
      </div>
    </div>
    <!-- .container -->

    <footer class="mt-32" style="background-color: rgba(37, 38, 65, 1)">
      <div class="max-w-lg mx-auto">
        <div class="flex py-12 justify-center text-white items-center px-20 sm:px-36">
          <div class="relative">
            <h1 class="font-bold text-lg pr-5 relative z-50">The Alumni Foundation</h1>
            <svg
              class="w-11 h-11 absolute -top-2 -left-3 z-40"
              viewBox="0 0 79 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.9645 2.94975C37.9171 0.997129 41.0829 0.997127 43.0355 2.94975L76.0502 35.9645C78.0029 37.9171 78.0029 41.0829 76.0503 43.0355L43.0355 76.0502C41.0829 78.0029 37.9171 78.0029 35.9645 76.0503L2.94975 43.0355C0.997129 41.0829 0.997127 37.9171 2.94975 35.9645L35.9645 2.94975Z"
                stroke="#26C1F2"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
        <div class="text-center pb-16 pt-2">
          <label class="text-gray-300 font-semibold"
            >Subscribe to get our Newsletter</label
          >
          <div
            class="px-5 sm:px-0 flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0 justify-center mt-3"
          >
            <input
              type="email"
              placeholder="Your Email"
              class="rounded-full py-2 pl-5 bg-transparent border border-gray-400"
            />
            <button
              type="submit"
              class="text-white w-40 sm:w-auto mx-auto sm:mx-0 font-semibold px-5 py-2 rounded-full"
              style="
                background: linear-gradient(105.5deg, #545ae7 19.57%, #393fcf 78.85%);
              "
            >
              Subscribe
            </button>
          </div>
        </div>
        <div class="flex items-center text-gray-400 text-sm justify-center">
          <a href="" class="pr-3">Careers</a>
          <a href="" class="border-l border-gray-400 px-3">Privacy</a>
          <a href="" class="border-l border-gray-400 pl-3">Terms & Conditions</a>
        </div>
        <div class="text-center text-white">
          <p class="my-3 text-gray-400 text-sm tracking-wide">
            &copy; 2022 Montana Solutions.
          </p>
          <div class="py-3">
            <p>Made with 😊❤💯, <span class="font-semibold">AmChrisKE.</span></p>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>

<style scoped></style>
