<template>
    <div class="started-page">
      <!-- <ManyHearts  v-if="userDeviceWidth > 860"/> -->
      <div v-if="userDeviceWidth > 600" class="started-page__img-conteiner">
          <div class="started-page__img-block">
            <img src="@/assets/unsplash_2Tv7-O13hgk.png"/>
            <img src="@/assets/unsplash_yisZonvqh54.png"/>
          </div>
          <div class="started-page__img-block">
            <img src="@/assets/unsplash_yZltofngvsE.png"/>
            <img src="@/assets/unsplash_6-C0d7Bk29k.png"/>
          </div>
          <div class="started-page__img-block">
            <img src="@/assets/unsplash_kf9tRJz3vVI.png"/>
            <img src="@/assets/unsplash_ADBOC3UP4eQ.png"/>
          </div>
      </div>

      <div v-else class="started-page__img-conteiner">
          <div class="started-page__img-block">
            <img src="@/assets/unsplash_2Tv7-O13hgk(SMALL).png"/>
            <img src="@/assets/unsplash_yZltofngvsE(SMALL).png"/>
            <img src="@/assets/unsplash_ADBOC3UP4eQ(SMALL).png"/>
          </div>
          <div class="started-page__img-block">
            <img src="@/assets/unsplash_kf9tRJz3vVI(SMALL).png"/>
            <img src="@/assets/unsplash_yisZonvqh54(SMALL).png"/>
            <img src="@/assets/unsplash_6-C0d7Bk29k(SMALL).png"/>
          </div>
      </div>
      <div class="black"></div>
      <Questionnaire/>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        userDeviceWidth: 0
      }
    },
    mounted() {
      this.userDeviceWidth = document.documentElement.clientWidth
    }
  }
</script>

<style lang="scss" scoped>
  $main-color: #E3B5A4;
    .started-page {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: $main-color;
    .black {
      overflow: hidden !important;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
      background: #000000;
      opacity: 0.3;
    }
    &__img-conteiner {
      pointer-events: none;
      display: flex;
      justify-content: space-evenly;
      width: 1400px;
      height: vh(930);
      @include _1440 {
        width: vmax(1400);
        height: vh(930);
      }
      @include _600 {
        width: vmax(820);
        justify-content: space-between;
      }
      @include _480 {
        width: vmax(620);
      }
      @include _320 {
        width: vmax(798);
        height: 509px;
      }
    }
      &__img-block {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        img {
          object-fit: cover;
          pointer-events: none;
          user-select: none;
          width: 100%;
        }
      }
      &__img-block:nth-child(1),
      &__img-block:nth-child(3) {
        width: percent-width(386);
      }
      &__img-block:nth-child(2) {
        width: percent-width(590);
      }

      &__img-block:nth-child(1) {
        @include _600 { width: 200px;}
        @include _480 { width: vmax(300); }
        @include _320 { width: vmax(389);}
        img:nth-child(1) {
          height: 262px;
          height: vh(262);
          @include _600 { height: vh(200); }
          @include _320 { height: 96px; }
        }
        img:nth-child(2) {
          height: vh(653);
          @include _600 { height: vh(340); }
          @include _320 { height: 200px;}
        }
        img:nth-child(3) {
          @include _600 { height: vh(360); }
          @include _320 { height: 196px; }
        }
      }
      &__img-block:nth-child(2) {
        @include _600 { width: 200px;}
        @include _480 { width: vmax(300); }
        @include _320 { width: vmax(389);}
        img:nth-child(1) {
          height: vh(552);
          @include _600 { height: vh(250);}
          @include _320 { height: 134px; }
        }
        img:nth-child(2) {
          height: vh(357);
          @include _600 { height: vh(380);}
          @include _320 { height: 217px; }
        }
        img:nth-child(3) {
          @include _600 { height: vh(270);}
          @include _320 { height: 141px; }
        }
      }
      &__img-block:nth-child(3) {
        img:nth-child(1) {
          height: vh(374);
        }
        img:nth-child(2) {
          height: vh(541);
        }
      }
  }
</style>

