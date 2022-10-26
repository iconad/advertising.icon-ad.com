<template>
    <div class="w-full section-screen-height w-full flex items-center italic font-extrabold relative">
        <div class="px-5 w-full space-y-10 lg:space-y-20">

              <h1 class="text-3xl lg:text-4xl lg:text-6xl items-center w-full lg:leading-snug text-center">
                <transition
                appear
                @before-enter="beforeEnterMinusX"
                @enter="enterMinusX"
                >
                  <span class="block">Creativity & Brand Experience</span>

              </transition>
              <transition
                appear
                @before-enter="beforeEnterPlusX"
                @enter="enterPlusX"
                >
                  <span class="inline-block rainbow-text-ad text-24 lg:text-[6rem]">Reimagined!</span>

              </transition>
              </h1>

            <div class="play-button" @click="video = !video">
                <div class="w-full flex items-center justify-center">
                    <AssetsPlayButton options="w-10 h-10 cursor-pointer transform hover:scale-125 transition-all duration-500"/>
                </div>
            </div>
        </div>

        <AdvertisingFrontCoverVideo v-if="video" />

    </div>
    <!-- screen height -->
</template>

<script>

import gsap from 'gsap'

export default {
  methods: {
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
