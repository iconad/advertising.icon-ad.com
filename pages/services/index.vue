<template>
  <div class="bg-black">

    <section id="experiese-cover" class="h-screen-70 3xl:h-screen-50 flex items-center justify-center text-white">
      <div class="video relative">
        <h1 class="text-5xl lg:text-7xl font-bold text-center w-full absolute top-32 left-0" v-if="page">{{page[0].detail}}</h1>
        <video width="800" height="240" autoplay muted id="vid" class="select:outline-none focus:outline-none">
          <source src="~/assets/video/reimagined.webm" type="video/webm">
          <source src="~/assets/video/reimagined.mp4" type="video/mp4">
        </video>
      </div>
      <!-- video -->
    </section>
    <!-- cover -->


    <section class="storytellers pt-12">

      <div class="flex justify-center w-full">
        <div class="relative ml-10 w-auto ml-32 lg:ml-96">
          <div class="absolute right-[105%] top-0 text-3xl lg:text-8xl font-bold text-gray-100 whitespace-nowrap we-are">We are</div>
          <ul class="storyteller-ani-wrapper text-3xl lg:text-8xl font-bold text-right space-y-3 w-full">
            <li class="storyteller-ani text-gray-100 text-left">Storytellers</li>
            <li class="storyteller-ani text-gray-100 text-left">Creatives</li>
            <li class="storyteller-ani text-gray-100 text-left">designers</li>
            <li class="storyteller-ani text-gray-100 text-left">Strategies</li>
            <li class="storyteller-ani text-gray-100 text-left">Creators</li>
            <li class="storyteller-ani text-gray-100 text-left last-we-are">Innovators</li>
          </ul>
        </div>
      </div>
      <!-- container -->

    </section>
    <!-- story tellers -->

    <section class="expertise-wrapper mt-32">
      <div class="theme-container">

        <div class="service text-white masonry-wrapper">
          <masonry :cols="{default: 2, 920: 1}" :gutter="{default: '32px'}" columnClass="flex flex-col lg:block">

              <div :id="expertie.block_id" v-for="(expertie, i) in expertise" :key="i" class="my-4 lg:my-8" :class=" i == 0  ? 'lg:mt-48' : '' " :style="`order:${expertie.mobile_order}`">
              <div  v-if="expertie.white.toLowerCase() == 'yes' " class="content-side w-full bg-theme-gray-dark text-white rounded-3xl">
                    <div class="p-5 lg:p-10 flex flex-col justify-between h-full">
                      <div class="space-y-5">
                        <h3 v-if="expertie.title" class="text-3xl md:text-5xl font-semibold">
                          <span class="block-span" v-for="(text, q) in breakText(expertie.title)" :key="q" v-html="text"></span>
                        </h3>
                        <div v-if="expertie.details" class="text-lg md:text-xl font-light space-y-3 text-gray-200" v-html="expertie.details"></div>
                      </div>

                      <div class="flex items-center space-x-2 group mt-10" v-if="expertie.link">
                        <AssetsRightAngleArrowBlack options="w-6 lg:w-8 h-6 lg:h-8 pb-1" />
                        <nuxt-link :to="expertie.link" class="text-xl lg:text-2xl font-light group-hover:border-gray-400 pb-1 border-b border-transparent">
                          {{expertie.link_text}}
                        </nuxt-link>
                      </div>

                    </div>
                </div>
                <!-- content side -->

                <div v-else class="image-project-side w-full relative rounded-3xl overflow-hidden">
                  <UtilsImage :mini="expertie.image_mini" :image="expertie.image" options="w-full object-cover object-bottom" />
                </div>
                <!-- image side -->
            </div>
          </masonry>
        </div>

      </div>
      <!-- container -->
    </section>
    <!-- expertise wrapper -->

    <section id="newletterSection" class="newsletter-section py-20 3xl:py-32 bg-theme-sky-dark relative lg:mt-64">
      <div class="theme-container">
        <FormsNewsLetter />
      </div>
    </section>
    <!-- new letter section -->





  </div>
</template>

<script>
  export default {

    mounted() {
      if (process.client) {
        const masonryWrapper = document.querySelector("[style='background-clip']");
        console.log(masonryWrapper)
        // document.getElementById('vid').play();


        let q = this.gsap.utils.selector(this.$el);

        const storytellerAniWrapper = q(".storyteller-ani-wrapper")
        const storytellers = q(".storytellers")
        const weAre = q(".we-are")
        const lastWeAre = q(".last-we-are")
        const storytellerAni = q(".storyteller-ani")

        let mythis = this
        mythis.scrollTrigger.matchMedia({

          "(min-width: 1600px)": function () {

            mythis.gsap.to(storytellers, {
              scrollTrigger: {
                  trigger: storytellers,
                  start: 'center center+=13.8%',
                  end: 'center+=100% center',
                  endTrigger: lastWeAre,
                  scrub: 1,
                  pin: weAre,
              }
            })

            mythis.gsap.timeline({defaults: {duration: 2, ease:'none' },
              scrollTrigger: {
                trigger: storytellers,
                scrub: 1,
                start: 'center center+=45%',
                end: "+=90%",
              }})
            .fromTo(storytellerAni, {opacity:0.3},{opacity: 1, stagger: 6})

          },


          "(max-width: 1600px)": function () {

            mythis.gsap.to(storytellers, {
              scrollTrigger: {
                  trigger: storytellers,
                  start: 'center center+=18.5%',
                  end: 'center+=100% center',
                  endTrigger: lastWeAre,
                  scrub: 1,
                  pin: weAre,
              }
            })

            mythis.gsap.timeline({defaults: {duration: 2, ease:'none' },
              scrollTrigger: {
                trigger: storytellers,
                scrub: 1,
                start: 'center center+=40%',
                end: "+=90%",
              }})
            .fromTo(storytellerAni, {opacity:0.3},{opacity: 1, stagger: 6})

          },


          "(max-width: 780px)": function () {

            mythis.gsap.to(storytellers, {
              scrollTrigger: {
                  trigger: storytellers,
                  start: 'center center+=6.5%',
                  end: 'center+=100% center',
                  endTrigger: lastWeAre,
                  scrub: 1,
                  pin: weAre,
              }
            })

            mythis.gsap.timeline({defaults: {duration: 2, ease:'none' },
              scrollTrigger: {
                trigger: storytellers,
                scrub: 1,
                start: 'center center+=40%',
                end: "+=90%",
              }})
            .fromTo(storytellerAni, {opacity:0.3},{opacity: 1, stagger: 6})

          }

        })


      }

    },

    computed: {
      expertise () {
        return this.page[0].content;
      }
    },

    methods: {
      breakText (text) {
        return text.split('#');
      }
    },

    async asyncData({ $axios, store }) {

    const page = await $axios.$get(`/pages/expertise`)

      return {
        page,
      }
    }


  }
</script>


<style scoped>

  @media only screen and (max-width: 920px){
    .my-masonry {
      display: flex!important;
      flex-direction: column!important;
    }

  }

</style>
