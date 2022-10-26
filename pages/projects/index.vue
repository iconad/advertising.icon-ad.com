<template>
  <div>

    <section class="projects-carousel relative">
      <AdvertisingProjectSelectedProjectsCarousel :projects="carousel" />
    </section>
    <!-- projects carousel -->

    <div class="projects-main mt-20 lg:my-32">

      <div class="theme-container">

        <div class="projects-filter lg:flex items-center justify-center space-y-3 lg:space-y-0 lg:space-x-10 bg-gray-100 w-full rounded-xl mx-auto p-5">

          <div class="text-lg w-full border-b border-gray-300 pb-3">
            <select @change="onServiceChange()" v-model="selectedService" class="bg-transparent w-full focus:outline-none">
              <option value="0" selected> Expertise </option>
              <option v-for="(service, i) in services" :key="i" :value="service.name" v-html="service.name"></option>
            </select>
          </div>

          <div class="text-lg w-full lg:border-b border-gray-300 lg:pb-3">
            <select v-model="selectedExpertie" class="bg-transparent w-full focus:outline-none">
              <option value="0" selected> Categories </option>
              <option v-for="(expert, i) in expertise" :key="i" :value="expert.id" v-html="expert.name"></option>
            </select>
          </div>

          <div class="cursor-pointer hidden">
            <AssetsLayoutOne options="w-6 h-6 text-gray-500" />
          </div>

        </div>
        <!-- projects filter -->

        <div class="projects mt-20">
          <!-- <div class="projects-masonry-grid gap-16 grid grid-cols-2 grid-flow-row"> -->
            <client-only>
              <masonry :cols="{default: 2, 920: 1}" :gutter="{default: '50px', 1120: '20px', 880: '50px'}" >
              <div class="mb-10 cursor-pointer" @click="goTo(project.slug)" v-for="(project, i) in projects" :key="i">

                <UtilsProjectImage options="bg-gray-100 w-full object-cover rounded-2xl overflow-hidden" :mini="project.image_mini" :image="project.large_thumb" />

                <div class="mt-5 space-y-3 px-5 pt-3 pb-8 w-full lg:w-3/4">
                  <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold uppercase">
                    <nuxt-link :to="`/projects${project.slug}`"> {{ project.title }} </nuxt-link>
                  </h2>
                  <!-- <div v-html="project.body" class="text-sm md:text-base opacity-80"></div> -->
                </div>

              </div>
              </masonry>
            </client-only>
          <!-- </div> -->
          <!-- projects-masonry-grid -->
        </div>
        <!-- projects -->

        <client-only>
          <infinite-loading v-if="projects.length" spinner="bubbles" @infinite="infiniteScroll"></infinite-loading>
        </client-only>


      </div>
      <!-- container -->

    </div>
    <!-- projects main  -->

  </div>
</template>


<script>

export default {

  data() {
    return {
      projects: [],
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

    goTo(slug) {
      this.$router.push({path: `/projects${slug}`});
    },

    onExpertieChange() {
      this.getProjectsWithPagination()
    },

    onServiceChange() {
      this.getProjectsWithPagination()
    },

    getProjectsWithPagination () {
      this.$axios.$get(`/all-projects?_format=json&service=${this.selectedService}&expertie=${this.selectedExpertie}`).then(resp => {
          this.projects = resp;
        })
        .catch(err => {
          console.log(err);
        });
    },

    infiniteScroll($state) {

      setTimeout(() => {

        this.page++;

        this.$axios.$get(`/all-projects?_format=json&page=${this.page}`).then(resp => {
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

    const carousel = await $axios.$get(`/projects/projects-carousel`)
    const projects = await $axios.$get(`/all-projects?_format=json&page=0`)
    const expertise = await $axios.$get(`/expertises`)
    const services = await $axios.$get(`/all-services`)

      return {
        carousel,
        projects,
        expertise,
        services
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
