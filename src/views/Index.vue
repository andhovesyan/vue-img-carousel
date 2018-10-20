<template>
  <layout>
    <h1 class="text-center">Welcome!</h1>
    <form class="mw-400 mx-auto my-5">
      <div class="row">
        <div class="col">
          <fieldset class="form-group">
            <label>Items per page (desktop):</label>
            <input class="form-control" v-model="configItemsPerPage.pc" type="number" min="1"/>
          </fieldset>
        </div>
        <div class="col">
          <fieldset class="form-group">
            <label>Items per page (mobile):</label>
            <input class="form-control" v-model="configItemsPerPage.mobile" type="number" min="1"/>
          </fieldset>
        </div>
      </div>
    </form>
    <carousel class="mt-5" :per-page-custom="itemsPerPage" :per-page="configItemsPerPage.pc">
      <slide
        v-for="(slide, ind) in slides"
        :key="ind"
        @slideClick="_onSlideClick"
        :data-link="slide.link"
      >
        <img class="slide-image" :src="slide.image" :alt="`Hat ${ind}`"/>
      </slide>
    </carousel>
  </layout>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

import Layout from '@/layouts/default.vue';
import ImgHat1 from '@/assets/images/cats/1.jpg';
import ImgHat2 from '@/assets/images/cats/2.jpg';
import ImgHat3 from '@/assets/images/cats/3.jpg';
import ImgHat4 from '@/assets/images/cats/4.jpg';
import ImgHat5 from '@/assets/images/cats/5.jpg';
import ImgHat6 from '@/assets/images/cats/6.jpg';
import ImgHat7 from '@/assets/images/cats/7.jpg';
import ImgHat8 from '@/assets/images/cats/8.jpg';

export default {
  components: {
    Layout,
    Carousel,
    Slide,
  },
  data() {
    return {
      slides: [{
        image: ImgHat1,
        link: 'https://amazon.com',
      }, {
        image: ImgHat2,
        link: 'https://amazon.com',
      }, {
        image: ImgHat3,
        link: 'https://amazon.com',
      }, {
        image: ImgHat4,
        link: 'https://amazon.com',
      }, {
        image: ImgHat5,
        link: 'https://amazon.com',
      }, {
        image: ImgHat6,
        link: 'https://amazon.com',
      }, {
        image: ImgHat7,
        link: 'https://amazon.com',
      }, {
        image: ImgHat8,
        link: 'https://amazon.com',
      }],
      configItemsPerPage: {
        pc: 3,
        mobile: 1,
      },
    };
  },
  computed: {
    itemsPerPage() {
      return [
        [0, this.configItemsPerPage.mobile],
        [768, this.configItemsPerPage.pc],
      ];
    },
  },
  methods: {
    _onSlideClick(data) {
      window.location.href = data.link;
    },
  },
};
</script>

<style lang="scss" scoped>
.slide-image {
  height: 236px;
  object-fit: contain;
  margin: 20px;
  width: calc(100% - 40px);
  cursor: pointer;
}
.mw-400 {
  max-width: 400px;
  width: 100%;
}
</style>
