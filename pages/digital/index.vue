<template>
  <div>

    <section class="digital-cover theme-container py-16 lg:py-32">

      <h1 class="page-cove text-center text-4xl lg:text-9xl font-extrabold rainbow-text-digital">
        <span class="block">WELCOME TO</span>
        <span class="block">ICON DIGITAL</span>
      </h1>
      <!-- page cover -->

      <div class="page-cover_image bg-opacity-50 transform">
        <img src="https://drupal.icon-ad.com/sites/default/files/2022-06/digital-cover.png" alt="page cover" class="">
      </div>
      <!-- page cover image -->

      <div class="digital-cover-info text-center w-full mx-auto space-y-5 mt-20 lg:mt-0">
        <h2 class="text-3xl lg:text-9xl font-bold">
          <span class="block">Driven by creativity,</span>
          <span class="block">results, outstanding</span>
          <span class="block">ideas and concepts,</span>
        </h2>
        <p class="w-full lg:w-3/4 mx-auto text-lg md:text-xl"> we are a professional digital marketing agency in Dubai offering tailored marketing strategies using fully integrated digital marketing and communications strategies to help your business grow by reaching out more customers and generating more leads.</p>
      </div>
      <!-- digital cover info -->
    </section>
    <!-- digital cover -->


    <section class="digital-projects theme-container-3xl_nopadding">

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">

        <div class="relative bg-gray-100 cursor-pointer group overflow-hidden" @click="goTo('one')">
          <div class="p-info absolute left-0 top-20 h-12 md:h-48 flex items-center justify-center w-full">
            <div class="w-3/4 space-y-5">
              <h2 class="text-2xl lg:text-4xl uppercase font-semibold text-center text-shadow-1">CONTINENTAL SPIDERMAN NO WAY HOME</h2>
              <AssetsRightAngleArrowBlack options="w-8 h-8 mx-auto" />
            </div>
          </div>
          <div class="img transform hover:scale-105 transition-all duration-700">
            <img src="https://drupal.icon-ad.com/sites/default/files/2022-06/digital-thumb-1.png" alt="image" class="w-full">
          </div>
        </div>
        <!-- item -->

        <div class="relative bg-gray-100 cursor-pointer group overflow-hidden" @click="goTo('one')">
          <div class="p-info z-10 absolute left-0 top-20 h-12 md:h-48 flex items-center justify-center w-full">
            <div class="w-3/4 space-y-5">
              <h2 class="text-2xl lg:text-4xl uppercase font-semibold text-center text-shadow-1">Alicafe Uzbekistan and Iraq Campaign</h2>
              <AssetsRightAngleArrowBlack options="w-8 h-8 mx-auto" />
            </div>
          </div>
          <div class="img transform hover:scale-105 transition-all duration-700">
            <img src="https://drupal.icon-ad.com/sites/default/files/2022-06/digital-thumb-2.jpg" alt="image" class="w-full">
          </div>
        </div>
        <!-- item -->

        <div class="md:col-span-2 relative bg-gray-100 cursor-pointer group overflow-hidden group h-screen-70 lg:h-auto" @click="goTo('one')">
          <div class=" p-info z-10 absolute left-0 top-0 md:top-20 h-full flex items-center justify-center w-full">
            <div class="w-full lg:w-3/4 flex items-end justify-center">
                <div class="space-y-5">
                  <h2 class="text-2xl lg:texttext-4xl uppercase font-semibold text-center text-shadow-1">French Roast Iced Lunch</h2>
                  <p class="w-full lg:w-1/2 mx-auto text-center text-shadow-2-white">Alicafe Arabia's Foray Intothe Densely Crowded Instant And Ready-To-Drink Coffee Market With Its All-New Product Needed To Be Bold And Imaginative.</p>
                  <div class="flex items-center justify-center space-x-5 w-56 mx-auto">
                    <AssetsRightAngleArrowBlack options="w-8 h-8 mx-auto" />
                    <div class="text-lg font-medium capitalize theme-link text-shadow-2-white">Read case study</div>
                  </div>
                </div>
            </div>
          </div>
          <div class="img transform group-hover:scale-105 transition-all duration-700">
            <img src="https://drupal.icon-ad.com/sites/default/files/2022-06/digital-thumb-3.jpg" alt="image" class="h-screen-70 lg:h-auto object-cover w-full">
          </div>
        </div>
        <!-- item -->




      </div>

    </section>
    <!-- digital projects -->

    <section id="threeSection" class="theme-container py-32 space-y-5 md:space-y-10">

       <h2 class="page-cove text-center uppercase text-5xl md:text-6xl lg:text-9xl font-extrabold rainbow-text-digital">
        <span class="block">Across all </span>
        <span class="block">platforms</span>
      </h2>

      <p class="text-3xl md:text-5xl lg:text-6xl font-bold text-center">
        <span class="span-block">we are changing the way </span>
        <span class="span-block">people see ads, we are creating</span>
        <span class="span-block">experiences not just ads</span>
      </p>

    </section>

  </div>
</template>

<script>
  export default {
    name: 'digital',

    methods: {

      goTo (value) {

      }

    },

  }
</script>
