<template>
  <div class="bg-black">

    <section id="experiese-cover" class="h-screen-70 3xl:h-screen-50 flex items-center justify-center text-white">
      <div class="video relative">
        <h1 class="text-5xl lg:text-7xl font-bold text-center w-full absolute top-32 left-0" v-if="page">{{page[0].detail}}</h1>
        <video width="800" height="240" preload="yes" autoplay loop poster="https://drupal.icon-ad.com/sites/default/files/2022-11/Screen%20Shot%202022-11-28%20at%205.46.59%20PM.png" muted id="vid" class="select:outline-none focus:outline-none">
          <source src="~/assets/video/reimagined.webm" type="video/webm">
          <source src="~/assets/video/reimagined.mp4" type="video/mp4">
        </video>
      </div>
      <!-- video -->
    </section>
    <!-- cover -->

    <section class="expertise-wrapper mt-12">
      <div class="theme-container">

        <div class="service text-white masonry-wrapper">
          <client-only>
          <masonry :cols="{default: 2, 920: 1}" :gutter="{default: '32px'}" columnClass="flex flex-col lg:block">

              <div :id="expertie.block_id" v-for="(expertie, i) in expertise" :key="i" class="my-4 lg:my-8 cursor-pointer" :class=" i == 0  ? 'lg:mt-48' : '' " :style="`order:${expertie.mobile_order}`" @click="goTo(expertie.link)">

              <div v-if="expertie.white && expertie.white.toLowerCase() == 'yes' " class="content-side w-full bg-theme-gray-1 text-white rounded-3xl">
                    <div class="p-5 lg:p-16 flex flex-col justify-between h-full">
                      <div class="space-y-5">
                        <h3 v-if="expertie.title" class="text-3xl md:text-4xl font-semibold">
                          <span class="block-span" v-for="(text, q) in breakText(expertie.title)" :key="q" v-html="text"></span>
                        </h3>
                        <div v-if="expertie.details" class="text-base md:text-lg font-light space-y-3 text-gray-200" v-html="expertie.details"></div>
                      </div>

                      <AdvertisingExpertiseSubExpertisesList :expertise="expertie.expertise" />

                    </div>
                </div>
                <!-- content side -->

                <div class="image-project-side w-full relative overflow-hidden">
                  <UtilsImage :mini="expertie.image_mini" :image="expertie.image" options="w-full object-cover object-bottom rounded-3xl" />
                </div>
                <!-- image side -->
            </div>
          </masonry>
          </client-only>
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

    computed: {
      expertise () {
        return this.page[0].content;
      }
    },

    methods: {
      goTo (link) {
        this.$router.push({
          path: `${link}`
        });
      },
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
