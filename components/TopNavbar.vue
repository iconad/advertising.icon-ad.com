<template>
    <div class="bg-black text-white top-navbar fixed w-full left-0 top-0 z-10">
        <div class="theme-container">
            <div class="flex items-center justify-center md:justify-between">
                <ul class="flex items-center uppercase text-xxs md:text-xs tracking-wider -ml-3">
                    <li v-for="(item, i) in nav" :key="i">
                         <a :href="item.link" :class="item.active ? 'bg-white text-black' : ''" class="py-3 px-2 xl:px-3 block font-medium hover:bg-white focus:outline-none focus:text-black focus:bg-white hover:text-black">{{item.name}}</a>
                    </li>
                </ul>
                <!-- navbar list -->

                <div class="join-us text-xs tracking-widest space-x-1 hidden lg:flex items-start">
                    <a href="mailto:info@icon-ad.com" class="block theme-link font-medium">info@icon-ad.com</a>
                </div>
                <!-- join us link -->
            </div>
        </div>
        <!-- top navbar -->
    </div>
</template>

<script>
export default {
  data() {
    return {
      nav:[
        {
          name: 'advertising',
          link: '/',
          active: true
        },
        {
          name: 'digital',
          link: 'https://digital.icon-ad.com',
          active: false
        },
        {
          name: 'branding',
          link: '/coming-soon',
          active: false
        },
        {
          name: 'plus',
          link: '/coming-soon',
          active: false
        },
      ]
    }
  },

  mounted() {

    let q = this.gsap.utils.selector(this.$el);

    const topNavbar = q(".top-navbar")


    // this.gsap.to(topNavbar, {
    //   scrollTrigger: {
    //     start: "top top",
    //     end: 99999,
    //     onUpdate: (self) => {
    //       self.direction === -1 ? showAnim.play() : showAnim.reverse()
    //     }
    //   },
    //   yPercent: -100,
    //   paused: true,
    //   duration: 0.2
    // })

    const showAnim = this.gsap.from(topNavbar, {
        yPercent: -100,
        paused: true,
        duration: 0.2
      }).progress(1);

      this.scrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse()
        }
      });

  },


  computed: {
    current () {
      return this.$store.state.current
    },
  }
}
</script>
