<template>
  <div>

    <ChooseSite />

    <section id="coverSection">
        <AdvertisingFrontCover />
    </section>
    <!-- cover section -->


    <section id="secondSection" class="bg-black text-white">
      <div class="flex items-center theme-container section-screen-height section-screen-height_90 justify-center text-center">
        <div class="space-y-5">
          <h2 class="text-3xl lg:text-4xl uppercase font-semibold">
            <span class="block-span">Building brands for</span>
            <span class="block-span">more than 15 years</span>
          </h2>
          <p class="w-full lg:w-[60%] mx-auto text-lg lg:text-xl font-light">We are a creative user (consumers, human beings) experience agency with 360 marketing services, providing high-end data-driven advertising campaigns, strategies, and storytelling that impact today’s consumers and different target audiences in a great level of understanding across the globe and MENA region.</p>
        </div>
      </div>
    </section>
    <!-- second section -->

    <section id="projectsSection">
      <div class="front-projects theme-container px-0 md:px-5 pt-16 md:pt-48">
          <AdvertisingProjectProjects :from="0" :to="projectsLimit" />
      </div>
      <!-- front projects -->

      <div class="get-front-project md:py-48">
          <AdvertisingProjectGetRandomProject />
      </div>
      <!-- front projects -->

      <div class="front-projects theme-container md:pb-48 pt-24 lg:pt-0">
          <AdvertisingProjectProjects :from="4" :to="projectsLimit" />
      </div>
      <!-- front projects -->
    </section>
    <!-- projects section -->



    <section id="creativityUnlock" class="bg-black creativity-unlock overflow-hidden relative section-screen-height section-screen-height_100 flex items-center justify-center">

      <img src="~assets/images/rainbowlines.svg" alt="image" id="rainbowlines" class="w-full absolute top-[1rem] lg:inset-0 left-[36rem] lg:left-32 2xl:left-10 h-full transform scale-x-[3.8] scale-y-[4.8] lg:scale-110 2xl:scale-150 ">

      <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="-133 -6 728 326" class=" w-[400%] lg:w-full absolute top-[300px] -left-[400px] lg:inset-0 h-full transform rotate-[82deg] lg:scale-130 opacity-50">
        <path class="pathsvg" d="M 0 0 L -105 315 L -128 0 L 112 306 L 362 0 L 310 312 L 226 252 L 590 -1" stroke="#e63946" stroke-width="2" fill="none"/>
      </svg> -->

      <div class="theme-container unloak-creativity relative z-1 text-white text-center space-y-20">
          <div class="lock-icon flex justify-center atos">
            <AssetsLock options="w-10 h-10 transform hover:scale-125 transition-all duration-300" />
          </div>
          <!-- icon -->
          <div class="space-y-3">
            <h3 class="text-4xl uppercase font-bold atos"> Unlock Creattivity </h3>
            <p class="text-lg font-light atos">
               <span class="block-span">Check more projects, unlock full case studies, and</span>
               <span class="block-span">showcase how we tackle projects</span>
            </p>
          </div>
          <div>
            <nuxt-link to="/projects" class="black-button atos"> our work </nuxt-link>
          </div>
      </div>
      <!-- unloak the creativity -->

    </section>
    <!-- creativity section end -->


    <section id="Expertises" class="expertises-section bg-theme-gray-dark">
        <AdvertisingExpertiseExpertises :expertises="expertises" />
    </section>
    <!-- expertises section end -->

    <section id="Clients" class="clients-section bg-gradient-to-r from-theme-sky via-theme-purple to-theme-red py-32 3xl:py-64 space-y-16">
        <h3 class="text-3xl lg:text-5xl 3xl:text-6xl uppercase text-white text-center font-bold w-5/6 lg:w-auto mx-auto" id="ourClientTitle"> our clients & partners </h3>
        <AdvertisingClientClients :clients="clients" />
    </section>
    <!-- expertises section end -->

    <section id="ContactSection" class="contact-section bg-black text-white py-32">
       <div class="theme-container">
         <FormsContactUs
          :data="{
            title: 'have an',
            title2: 'impact',
            subtitle: 'Join the most powerful',
            subtitle2: 'brands in the world.'
         }"
          />
       </div>
    </section>
    <!-- contact section end -->


    <section id="newletterSection" class="newsletter-section py-20 3xl:py-32 bg-theme-sky-dark relative">

      <div class="theme-container">

      <FormsNewsLetter />

      </div>

    </section>
    <!-- new letter section -->

  </div>
</template>

<script>

import HomePage from '~/utils/HomePage'
import setupSplits from '~/utils/setupSplits'
import Atos from '~/utils/Atos'

export default {

  data() {
    return {
      projectsLimit: 4
    }
  },

  mounted() {

    const elements = this.gsap.utils.toArray('.atos');
    Atos(this.gsap, elements)


    let q = this.gsap.utils.selector(this.$el);

    const pathsvg = q(".pathsvg")
    const creativityUnlock = q("#creativityUnlock")
    const splitTextOnScroll = q("#ourClientTitle")

    setupSplits(this.gsap, this.splitText, splitTextOnScroll)

    this.gsap.from(pathsvg, {
      scrollTrigger: {
        trigger: creativityUnlock,
        start:'top 80%',
        end:'bottom 20%',
        scrub: 0.5,
      },
      drawSVG: "0%"
    });


  },

  methods: {

    // setupSplits(element)

  },


  async asyncData({ $axios, store }) {

    const projects = await $axios.$get(`/projects/featured`)
    const expertises = await $axios.$get(`/home-expertises`)
    const clients = await $axios.$get(`/clients`)

      store.commit('project/setFeaturedProjects', projects)


      return {
        projects,
        expertises,
        clients
      }
    }

}

</script>



<style scoped>
svg {
  stroke-dasharray: 300;
  /* stroke-dashoffset: 300; */
  transition: all .8s ease-in-out;
}
</style>
