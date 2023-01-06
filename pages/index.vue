<template>
  <div>

    <section id="coverSection">
        <AdvertisingFrontCover />
    </section>
    <!-- cover section -->


    <section id="secondSection" class="bg-black text-white relative">

      <div class="absolute bottom-0 right-0 w-full lg:w-[70%]">
        <AssetsIconWhiteBig options="w-full h-full" />
      </div>


      <div class="flex items-center theme-container h-[70vh] lg:h-screen-90 3xl:h-screen-70 justify-center text-center">
        <div class="space-y-5">
          <h2 class="text-2xl md:text-3xl lg:text-4xl uppercase font-semibold">
            <span class="block-span">Building brands for</span>
            <span class="block-span">more than 15 years</span>
          </h2>
          <p class="w-full lg:w-[60%] mx-auto text-sm md:text-lg lg:text-xl font-light">We are a creative user (consumer, human beings) experience agency with 360 marketing services, providing high-end data-driven advertising campaigns, strategies, and storytelling that impact today’s consumers and different target audiences in a great level of understanding across the globe and MENA region.</p>
        </div>
      </div>
    </section>
    <!-- second section -->

    <section id="projectsSection" class="relative">
      <div class="front-projects theme-container px-0 md:px-5 pt-16 md:pt-48">
          <AdvertisingProjectProjects :from="0" :to="projectsLimit" />
      </div>
      <!-- front projects -->

      <div class="get-front-project md:py-24 theme-container">
          <AdvertisingProjectGetRandomProject />
      </div>
      <!-- front projects -->

      <div class="front-projects theme-container pt-24 lg:pt-0">
          <AdvertisingProjectProjects :from="4" :to="2" />
      </div>
      <!-- front projects -->

      <div class="absolute w-full h-96 pointer-events-none bg-gradient-to-t from-white to-transparent bottom-0 left-0 z-[3]"></div>

    </section>
    <!-- projects section -->



    <section id="creativityUnlock" class="bg-white creativity-unlock overflow-hidden relative section-screen-height section-screen-height_100 flex items-center justify-center">

      <div class="absolute w-full h-32 bg-gradient-to-b from-white to-transparent top-0 left-0 z-[3]"></div>
      <div class="absolute w-full h-32 bg-gradient-to-t from-white to-transparent bottom-0 left-0 z-[3]"></div>

      <img src="~assets/images/rainbowlines.svg" alt="image" id="rainbowlines" class="w-full absolute top-[1rem] lg:inset-0 left-[36rem] lg:left-32 2xl:left-10 h-full transform scale-x-[3.8] scale-y-[4.8] lg:scale-125 2xl:scale-150 ">

      <div class="theme-container unloak-creativity relative z-1 text-black text-center space-y-20">
          <div class="lock-icon flex justify-center">
            <AssetsLock options="w-10 h-10 transform text-black hover:scale-125 transition-all duration-300" />
          </div>
          <!-- icon -->
          <div class="space-y-3">
            <h3 class="text-4xl 2xl:text-6xl uppercase font-bold"> Unlock Creativity </h3>
            <p class="2xl:text-xl">
               <span class="block-span">Check more projects, unlock full case studies, and</span>
               <span class="block-span">showcase how we tackle projects</span>
            </p>
          </div>
          <div>
            <nuxt-link to="/projects" class="text-white bg-black uppercase font-medium rounded-full px-16 py-4 border-2 border-transparent hover:bg-white hover:border-black hover:text-black hover:font-bold"> our work </nuxt-link>
          </div>
      </div>
      <!-- unloak the creativity -->

    </section>
    <!-- creativity section end -->


    <section id="Expertises" class="expertises-section bg-theme-gray-dark">
        <AdvertisingExpertiseExpertises :expertises="expertises" />
    </section>
    <!-- expertises section end -->

    <section id="Clients" class="clients-section py-32 3xl:py-64">
        <AdvertisingClientClients :clients="clients" />
    </section>
    <!-- expertises section end -->

    <section id="ContactSection" class="contact-section text-white py-32">
       <div class="theme-container">
         <div class="bg-gray-100 rounded-2xl overflow-hidden px-5 md:px-10 lg:px-0 py-32">
          <FormsContactUs
            :data="{
              title: 'have an',
              title2: 'impact',
              subtitle: 'Join the most powerful',
              subtitle2: 'brands in the world.'
          }"
            />
         </div>
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
