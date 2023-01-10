<template>
  <div>

    <section class="projects-carousel relative" v-if="carousel.length != 0">
      <AdvertisingProjectSelectedProjectsCarousel :projects="carousel" />
    </section>
    <!-- projects carousel -->

    <div class="projects-main" :class="carousel.length != 0 ? 'mt-20 mb-20 lg:mb-32' : 'mt-[11rem] mb-20 lg:mb-32' ">

      <div class="theme-container">

        <div class="projects-filter lg:flex items-center justify-center space-y-3 lg:space-y-0 lg:space-x-10 bg-gray-100 w-full rounded-xl mx-auto p-5">



          <div class="text-lg w-full border-b border-gray-300 pb-3">
            <select @change="onFilterUpdate()" v-model="selectedExpertie" class="bg-transparent w-full focus:outline-none">
              <option value="0" selected> Expertise </option>
              <option v-for="(expert, i) in expertise" :key="i" :value="expert.name" v-html="removeHash(expert.name)"></option>

            </select>
          </div>


          <div class="text-lg w-full lg:border-b border-gray-300 lg:pb-3">
            <select @change="onFilterUpdate()" v-model="selectedIndustry" class="bg-transparent w-full focus:outline-none">
              <option value="0" selected> Industry </option>
              <option v-for="(industry, i) in industries" :key="i" :value="industry.name" v-html="industry.name"></option>
            </select>
          </div>

          <div class="cursor-pointer hidden">
            <AssetsLayoutOne options="w-6 h-6 text-gray-500" />
          </div>

        </div>
        <!-- projects filter -->

        <div v-if="projects.length != 0" class="projects mt-20">
          <!-- <div class="projects-masonry-grid gap-16 grid grid-cols-2 grid-flow-row"> -->
            <client-only>
              <masonry :cols="{default: 2, 920: 1}" :gutter="{default: '50px', 1120: '20px', 880: '50px'}" >
              <div class="mb-10" v-for="(project, i) in projects" :key="i">


                <div @click="goTo(project.slug)">
                  <UtilsProjectImage options="cursor-pointer bg-gray-100 w-full object-cover rounded-2xl overflow-hidden" :mini="project.image_mini" :image="project.large_thumb" />
                </div>

                <div class="mt-5 space-y-3 px-5 pt-3 pb-8 w-full lg:w-3/4">
                  <span @click="goTo(project.slug)" class="cursor-pointer inline-block px-4 py-1 text-sm border rounded-full tracking-wide capitalize font-medium">

                    <span v-if="project.client" v-html="project.client"></span>
                    <span v-else v-html="project.custom_client"></span>

                  </span>
                  <h2 class="text-xl md:text-2xl 2xl:text-3xl font-semibold uppercase">
                    <nuxt-link :to="`/projects${project.slug}`" v-html="project.title"> </nuxt-link>
                  </h2>
                  <ReadLessMore :text="project.body"  />
                </div>

              </div>
              </masonry>
            </client-only>
          <!-- </div> -->
          <!-- projects-masonry-grid -->
        </div>
        <!-- projects -->

        <div v-else class="h-[40vh] flex items-center justify-center">
          <p class="text-lg font-semibold opacity-50">0 Projects found!</p>
        </div>

        <client-only>
          <infinite-loading v-if="projects.length" @infinite="infiniteScroll">
            <div slot="spinner">Loading...</div>
            <div slot="no-more">The End!</div>
          </infinite-loading>
        </client-only>


      </div>
      <!-- container -->

    </div>
    <!-- projects main  -->

  </div>
</template>


<script>

export default {

  head: {
    title: 'Advertising Portfolio: Take a Look at some of our work',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `Explore the successful projects of our valued clients at Icon Advertising, the leading creative branding, digital marketing, and design agency in the UAE. Our unparalleled services drive the growth and success of businesses in the region.`
      }
    ],
  },

  data() {
    return {
      projects: [],
      selectedIndustry: 0,
      selectedService: 0,
      selectedExpertie: 0,
      page: 0,
      settings: {
          itemsToShow: 1,
          centerMode: true,
          autoPlay: true,
          playSpeed: 5000,
          infiniteScroll: false,
        }
    }
  },


  methods: {


    removeHash(title) {
      return title.replace("#", "")
    },

    goTo(slug) {
      this.$router.push({path: `/projects${slug}`});
    },

    onFilterUpdate() {
      this.getProjectsWithPagination()
    },

    getProjectsWithPagination () {
      this.$axios.$get(`/all-projects?_format=json&subsidiary=0&industriy=${this.selectedIndustry}&expertises=${this.selectedExpertie}`).then(resp => {
          this.projects = resp;
        })
        .catch(err => {
          console.log(err);
        });
    },

    infiniteScroll($state) {

      setTimeout(() => {

        this.page++;

        this.$axios.$get(`/all-projects?_format=json&subsidiary=0&industriy=${this.selectedIndustry}&expertises=${this.selectedExpertie}&page=${this.page}`).then(resp => {
          if (resp.length > 1) { // check if any left
            resp.forEach(item => this.projects.push(item));
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch(err => {
          console.log(err);
        });

      }, 500);

    }

  },

  async asyncData({ $axios, store }) {

    const carousel = await $axios.$get(`/projects/home/slides/advertising`)
    const projects = await $axios.$get(`/all-projects?_format=json&page=0&subsidiary=0`)
    const expertise = await $axios.$get(`/expertises`)
    const industries = await $axios.$get(`/industries-list`)
    const services = await $axios.$get(`/all-services`)

      return {
        carousel,
        projects,
        expertise,
        services,
        industries
      }
    }

}

</script>


<style>

.projects-masonry-grid {
  columns: 2;
  column-rule: 1px solid lightblue;
}

@media only screen and (max-width: 780px){

  .projects-masonry-grid {
    columns: 1;
  }

}

</style>
