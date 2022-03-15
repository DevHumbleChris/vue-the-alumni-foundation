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
            class="my-4 text-5xl font-bold leading-tight text-darken"
          >
            <span class="text-yellow-500">The Alumni Foundation</span> making everything
            easier
          </h1>
          <p
            data-aos="fade-down"
            data-aos-delay="1000"
            class="leading-normal text-2xl mb-8"
          >
            The Alumni Foundation is a platform dedicated into bringing closer both the
            students and its alumni.
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="1300"
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
      <!-- All-In-One Cloud Software. -->
      <div data-aos="flip-up" class="max-w-xl mx-auto text-center mt-5">
        <h1 class="font-bold text-darken my-3 text-2xl">
          All-In-One <span class="text-yellow-500">Platform.</span>
        </h1>
        <p class="leading-relaxed text-gray-500">
          The Alumni Foundation Platform is one powerful online platform that combines all
          the tools needed to run a successful interaction between the alumni and the
          students.
        </p>
      </div>
      <!-- card -->
      <div class="grid md:grid-cols-3 gap-14 md:gap-5 mt-20">
        <div data-aos="fade-up" class="bg-white shadow-xl p-6 text-center rounded-xl">
          <div
            style="background: #5b72ee"
            class="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
          >
            <svg
              class="w-6 h-6 text-white"
              viewBox="0 0 33 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.75 23H8.25V28.75H24.75V23ZM32.3984 9.43359L23.9852 0.628906C23.5984 0.224609 23.0742 0 22.5242 0H22V11.5H33V10.952C33 10.3859 32.7852 9.83789 32.3984 9.43359ZM19.25 12.2188V0H2.0625C0.919531 0 0 0.961328 0 2.15625V43.8438C0 45.0387 0.919531 46 2.0625 46H30.9375C32.0805 46 33 45.0387 33 43.8438V14.375H21.3125C20.1781 14.375 19.25 13.4047 19.25 12.2188ZM5.5 6.46875C5.5 6.07164 5.80766 5.75 6.1875 5.75H13.0625C13.4423 5.75 13.75 6.07164 13.75 6.46875V7.90625C13.75 8.30336 13.4423 8.625 13.0625 8.625H6.1875C5.80766 8.625 5.5 8.30336 5.5 7.90625V6.46875ZM5.5 12.2188C5.5 11.8216 5.80766 11.5 6.1875 11.5H13.0625C13.4423 11.5 13.75 11.8216 13.75 12.2188V13.6562C13.75 14.0534 13.4423 14.375 13.0625 14.375H6.1875C5.80766 14.375 5.5 14.0534 5.5 13.6562V12.2188ZM27.5 39.5312C27.5 39.9284 27.1923 40.25 26.8125 40.25H19.9375C19.5577 40.25 19.25 39.9284 19.25 39.5312V38.0938C19.25 37.6966 19.5577 37.375 19.9375 37.375H26.8125C27.1923 37.375 27.5 37.6966 27.5 38.0938V39.5312ZM27.5 21.5625V30.1875C27.5 30.9817 26.8847 31.625 26.125 31.625H6.875C6.11531 31.625 5.5 30.9817 5.5 30.1875V21.5625C5.5 20.7683 6.11531 20.125 6.875 20.125H26.125C26.8847 20.125 27.5 20.7683 27.5 21.5625Z"
                fill="white"
              />
            </svg>
          </div>
          <h1 class="font-medium text-xl mb-3 lg:px-14 text-darken">Our Mission</h1>
          <p class="px-4 text-gray-500">
            Simple and secure control of your organization’s financial and legal
            transactions. Send customized invoices and contracts
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          class="bg-white shadow-xl p-6 text-center rounded-xl"
        >
          <div
            style="background: #f48c06"
            class="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
          >
            <svg
              class="w-6 h-6 text-white"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0C11.0532 0 10.2857 0.767511 10.2857 1.71432V5.14285H13.7142V1.71432C13.7142 0.767511 12.9467 0 12 0Z"
                fill="#F5F5FC"
              />
              <path
                d="M36 0C35.0532 0 34.2856 0.767511 34.2856 1.71432V5.14285H37.7142V1.71432C37.7143 0.767511 36.9468 0 36 0Z"
                fill="#F5F5FC"
              />
              <path
                d="M42.8571 5.14282H37.7143V12C37.7143 12.9468 36.9468 13.7143 36 13.7143C35.0532 13.7143 34.2857 12.9468 34.2857 12V5.14282H13.7142V12C13.7142 12.9468 12.9467 13.7143 11.9999 13.7143C11.0531 13.7143 10.2856 12.9468 10.2856 12V5.14282H5.14285C2.30253 5.14282 0 7.44535 0 10.2857V42.8571C0 45.6974 2.30253 48 5.14285 48H42.8571C45.6975 48 48 45.6974 48 42.8571V10.2857C48 7.44535 45.6975 5.14282 42.8571 5.14282ZM44.5714 42.8571C44.5714 43.8039 43.8039 44.5714 42.857 44.5714H5.14285C4.19605 44.5714 3.42854 43.8039 3.42854 42.8571V20.5714H44.5714V42.8571Z"
                fill="#F5F5FC"
              />
              <path
                d="M13.7142 23.9999H10.2857C9.33889 23.9999 8.57138 24.7674 8.57138 25.7142C8.57138 26.661 9.33889 27.4285 10.2857 27.4285H13.7142C14.661 27.4285 15.4285 26.661 15.4285 25.7142C15.4285 24.7674 14.661 23.9999 13.7142 23.9999Z"
                fill="#F5F5FC"
              />
              <path
                d="M25.7143 23.9999H22.2857C21.3389 23.9999 20.5714 24.7674 20.5714 25.7142C20.5714 26.661 21.3389 27.4285 22.2857 27.4285H25.7143C26.6611 27.4285 27.4286 26.661 27.4286 25.7142C27.4286 24.7674 26.6611 23.9999 25.7143 23.9999Z"
                fill="#F5F5FC"
              />
              <path
                d="M37.7143 23.9999H34.2857C33.3389 23.9999 32.5714 24.7674 32.5714 25.7142C32.5714 26.661 33.3389 27.4285 34.2857 27.4285H37.7143C38.6611 27.4285 39.4286 26.661 39.4286 25.7142C39.4286 24.7674 38.661 23.9999 37.7143 23.9999Z"
                fill="#F5F5FC"
              />
              <path
                d="M13.7142 30.8571H10.2857C9.33889 30.8571 8.57138 31.6246 8.57138 32.5714C8.57138 33.5182 9.33889 34.2857 10.2857 34.2857H13.7142C14.661 34.2857 15.4285 33.5182 15.4285 32.5714C15.4285 31.6246 14.661 30.8571 13.7142 30.8571Z"
                fill="#F5F5FC"
              />
              <path
                d="M25.7143 30.8571H22.2857C21.3389 30.8571 20.5714 31.6246 20.5714 32.5714C20.5714 33.5182 21.3389 34.2857 22.2857 34.2857H25.7143C26.6611 34.2857 27.4286 33.5182 27.4286 32.5714C27.4286 31.6246 26.6611 30.8571 25.7143 30.8571Z"
                fill="#F5F5FC"
              />
              <path
                d="M37.7143 30.8571H34.2857C33.3389 30.8571 32.5714 31.6246 32.5714 32.5714C32.5714 33.5182 33.3389 34.2857 34.2857 34.2857H37.7143C38.6611 34.2857 39.4286 33.5182 39.4286 32.5714C39.4285 31.6246 38.661 30.8571 37.7143 30.8571Z"
                fill="#F5F5FC"
              />
              <path
                d="M13.7142 37.7142H10.2857C9.33889 37.7142 8.57138 38.4817 8.57138 39.4286C8.57138 40.3754 9.33889 41.1428 10.2857 41.1428H13.7142C14.661 41.1428 15.4285 40.3753 15.4285 39.4284C15.4285 38.4816 14.661 37.7142 13.7142 37.7142Z"
                fill="#F5F5FC"
              />
              <path
                d="M25.7143 37.7142H22.2857C21.3389 37.7142 20.5714 38.4817 20.5714 39.4285C20.5714 40.3754 21.3389 41.1429 22.2857 41.1429H25.7143C26.6611 41.1429 27.4286 40.3754 27.4286 39.4285C27.4286 38.4817 26.6611 37.7142 25.7143 37.7142Z"
                fill="#F5F5FC"
              />
              <path
                d="M37.7143 37.7142H34.2857C33.3389 37.7142 32.5714 38.4817 32.5714 39.4285C32.5714 40.3754 33.3389 41.1429 34.2857 41.1429H37.7143C38.6611 41.1429 39.4286 40.3754 39.4286 39.4285C39.4286 38.4817 38.661 37.7142 37.7143 37.7142Z"
                fill="#F5F5FC"
              />
            </svg>
          </div>
          <h1 class="font-medium text-xl mb-3 lg:px-14 text-darken">
            Easy Scheduling & Attendance Tracking
          </h1>
          <p class="px-4 text-gray-500">
            Schedule and reserve classrooms at one campus or multiple campuses. Keep
            detailed records of student attendance
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          class="bg-white shadow-xl p-6 text-center rounded-xl"
        >
          <div
            style="background: #29b9e7"
            class="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
          >
            <svg
              class="w-6 h-6 text-white"
              viewBox="0 0 55 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.25 19.25C11.2836 19.25 13.75 16.7836 13.75 13.75C13.75 10.7164 11.2836 8.25 8.25 8.25C5.21641 8.25 2.75 10.7164 2.75 13.75C2.75 16.7836 5.21641 19.25 8.25 19.25ZM46.75 19.25C49.7836 19.25 52.25 16.7836 52.25 13.75C52.25 10.7164 49.7836 8.25 46.75 8.25C43.7164 8.25 41.25 10.7164 41.25 13.75C41.25 16.7836 43.7164 19.25 46.75 19.25ZM49.5 22H44C42.4875 22 41.1211 22.6102 40.1242 23.5984C43.5875 25.4977 46.0453 28.9266 46.5781 33H52.25C53.7711 33 55 31.7711 55 30.25V27.5C55 24.4664 52.5336 22 49.5 22ZM27.5 22C32.8195 22 37.125 17.6945 37.125 12.375C37.125 7.05547 32.8195 2.75 27.5 2.75C22.1805 2.75 17.875 7.05547 17.875 12.375C17.875 17.6945 22.1805 22 27.5 22ZM34.1 24.75H33.3867C31.5992 25.6094 29.6141 26.125 27.5 26.125C25.3859 26.125 23.4094 25.6094 21.6133 24.75H20.9C15.4344 24.75 11 29.1844 11 34.65V37.125C11 39.4023 12.8477 41.25 15.125 41.25H39.875C42.1523 41.25 44 39.4023 44 37.125V34.65C44 29.1844 39.5656 24.75 34.1 24.75ZM14.8758 23.5984C13.8789 22.6102 12.5125 22 11 22H5.5C2.46641 22 0 24.4664 0 27.5V30.25C0 31.7711 1.22891 33 2.75 33H8.41328C8.95469 28.9266 11.4125 25.4977 14.8758 23.5984Z"
                fill="white"
              />
            </svg>
          </div>
          <h1 class="font-medium text-xl mb-3 lg:px-14 text-darken lg:h-14 pt-3">
            Customer Tracking
          </h1>
          <p class="px-4 text-gray-500">
            Automate and track emails to individuals or groups. Skilline’s built-in system
            helps organize your organization
          </p>
        </div>
      </div>

      <!-- lorem -->
      <div class="mt-28">
        <div data-aos="flip-down" class="text-center max-w-screen-md mx-auto">
          <h1 class="text-3xl font-bold mb-4">
            What is <span class="text-yellow-500">The Alumni Foundation?</span>
          </h1>
          <p class="text-gray-500">
            The Alumni Foundation is a platform that allows alumni to create that space to
            students online whereby they can share the course materials online, mentor
            students, teach students, monitor the students academically; provide students
            with feedback all in one place. The key role is to help the student
            academically and in life too.
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
          <p class="my-3 text-gray-400 text-sm">&copy; 2022 Class Montana Solutions.</p>
          <div class="py-3 tracking-wide">
            <p>Code By <span class="font-semibold">Christopher Odhiambo</span></p>
            <p>UI/UX By <span class="font-semibold">Irvan Moses</span></p>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>

<style scoped></style>
