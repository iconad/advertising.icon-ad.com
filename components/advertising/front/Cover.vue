<template>
    <div class="w-full h-[60vh] sm:h-[70vh] lg:h-screen 2xl:h-[60vh] w-full flex items-center font-black relative text-center md:text-left">
        <div class="px-5 w-full space-y-10 lg:space-y-20">

              <div class="theme-container">
                <div class="space-y-5 lg:space-y-10">


                  <div class="showreel-video relative" v-if="video">

                      <div @click="video = !video" class="absolute z-50 left-[100%] top-0 -mt-36 2xl:-mt-48">
                        <AssetsClose options="w-8 md:w-12 h-8 md:h-12 cursor-pointer text-gray-400 md:text-gray-700 hover:text-theme-red" />
                      </div>

                      <div class="w-full h-auto bg-white overflow-hidden absolute left-0 -top-24 2xl:-top-32 z-10 rounded-2xl overflow-hidden">

                        <client-only>
                          <vimeo-player
                            class="shadow-xl"
                            @ready="onReady"
                            ref="player"
                            :options="options"
                            :video-id="`465010762`"
                          ></vimeo-player>
                        </client-only>

                        <div v-if="!isVideoLoading" class="text-center absolute inset-0 flex items-center justify-center">
                          Loading...
                        </div>

                      </div>
                  </div>
                  <!-- showreel video -->

                  <h1 class="text-[1.8rem] sm:text-[3rem] lg:text-[4.5rem] items-center w-full leading-tight italic lg:not-italic md:leading-none">
                    <transition appear>
                      <span class="inline md:block">Creativity <br class="block md:hidden"> & Brand</span>

                  </transition>
                  <transition appear>
                      <span class="inline md:inline-block"> Experience <span class="rainbow-text-ad"> Reimagined!</span></span>

                  </transition>
                  </h1>

                  <p class="hidden md:block text-sm md:text-lg lg:text-2xl font-semibold w-4/5">We create campaigns that not only impact people's decisions but also give us unmatched breadth & depth when it comes down to strategic planning techniques and designing long-running successful advertising campaigns.</p>



                <div class="w-full flex flex-col lg:flex-row lg:items-center space-y-3 lg:space-y-0 lg:space-x-5">

                    <button class="mx-auto md:mx-0 border-2 md:border-4 border-black p-1 pr-3 md:pr-5 play-button flex items-center justify-center md:justify-start  md:space-x-4 text-lg lg:text-xl font-medium rounded-full w-64" @click="video = !video">
                      <AssetsPlayButton options="w-10 h-6 md:h-10 cursor-pointer transform hover:scale-110 transition-all duration-500"/>
                      <span v-if="video"> Loading... </span>
                      <span v-else> Watch showreel </span>
                    </button>

                    <nuxt-link to="/expertise" class="mx-auto md:mx-0 flex justify-center space-x-4 text-lg lg:text-xl font-medium rounded-full bg-black text-white block w-64 py-[0.35rem] md:py-[0.85rem] border-2 md:border-4 border-black hover:bg-transparent hover:text-black">
                      <span> Expertise </span>
                    </nuxt-link>

                </div>

              </div>

            </div>

        </div>

    </div>
    <!-- screen height -->
</template>

<script>

import gsap from 'gsap'

export default {
  data() {
    return {
      isVideoLoading: false,
      options: {
        muted: false,
        autoplay:true,
        responsive:true,
        controls:true,
        portrait:false,
        byline:false,
        color:"000000",
        title:false
      },
    }
  },
  methods: {
    onReady () {
      this.isVideoLoading = true
    },
    beforeEnterMinusX (el) {
      el.style.transform = 'translateX(-30px)'
      el.style.opacity = 0
    },
    enterMinusX (el) {
      gsap.to(el, {
        duration: 1,
        x: 0,
        opacity: 1
      })
    },
    beforeEnterPlusX (el) {
      el.style.transform = 'translateX(30px)'
      el.style.opacity = 0
    },
    enterPlusX (el) {
      gsap.to(el, {
        duration: 1,
        x: 0,
        opacity: 1
      })
    },
  },
  computed: {
    video: {
      get: function () {
        return this.$store.state.isCoverVideo
      },
      set: function (value) {
        this.$store.commit('setIsCoverVideo', value)
      }
    }
  }
}
</script>
