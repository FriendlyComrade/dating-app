<template>
  <div class="started-page " v-if="userDeviceWidth > 1024">
    <div class="started-page__main-block">
      <div class="started-page__img-conteiner">
          <img src="@/assets/unsplash_2Tv7-O13hgk.png"/>
          <img src="@/assets/unsplash_yisZonvqh54.png"/>
      </div>
      <div class="started-page__img-conteiner">
          <img src="@/assets/unsplash_yZltofngvsE.png"/>
          <img src="@/assets/unsplash_6-C0d7Bk29k.png"/>
      </div>
      <div class="started-page__img-conteiner">
          <img src="@/assets/unsplash_kf9tRJz3vVI.png"/>
          <img src="@/assets/unsplash_ADBOC3UP4eQ.png"/>
      </div>
      <ManyHearts  v-if="userDeviceWidth > 1024"/>
    </div>
    <div class="black"></div>
    <Questionnaire/>
  </div>
  <div v-else>
      <div class="started-page__main-block">
        <div class="started-page__img-conteiner">
            <img src="@/assets/unsplash_2Tv7-O13hgk.png"/>
            <img src="@/assets/unsplash_yZltofngvsE.png"/>
            <img src="@/assets/unsplash_ADBOC3UP4eQ.png"/>
        </div>
        <div class="started-page__img-conteiner">
          <img src="@/assets/unsplash_kf9tRJz3vVI.png"/>
          <img src="@/assets/unsplash_yisZonvqh54.png"/>
          <img src="@/assets/unsplash_6-C0d7Bk29k.png"/>
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
      this.userDeviceWidth = window.innerWidth
    }
  }
</script>

<style lang="scss" scoped>
@import '@/scss/_media_mixin.scss';
  $main-color: #E3B5A4;
  .started-page {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: $main-color;
    @include _350 {
      width: 100vw;
      overflow: hidden;
    }
    .black {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
      background: #000000;
      opacity: 0.3;
    }
    &__main-block {
      display: flex;
      @include _350 {
        width: 100%;
        height: 100vh;
      }
      .started-page__img-conteiner {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 47px;
        margin-bottom: 48px;
        width: 100%;
        img: { width: 100%; }
        img:last-child {
          margin-top: 20px;
        }
        @include _350 {
            width: 148px;
        }
      }
      .started-page__img-conteiner:first-child {
        width: 386px;
        img:first-child {
          height: 262px;
          @include _350 {
            height: 96px;
          }
        }
        img:nth-child(2) {
          @include _350 {
            height: 200px;
            margin-top: 8px;
          }
        }
        img:last-child {
          height: 653px;
          margin-top: 20px;
          @include _350 {
            height: 196px;
            margin-top: 8px;
          }
        }
      }
      .started-page__img-conteiner:nth-child(2) {
        width: 590px;
        margin-left: 20px;
        img:first-child{
          height: 552px;
          @include _350 {
            height: 134px;
          }
        }
        img:nth-child(2){
          height: 552px;
          @include _350 {
            height: 217px;
          }
        }
        img:last-child {
          height: 357px;
          @include _350 {
            height: 141px;
          }
        }
      }
      .started-page__img-conteiner:nth-child(3) {
        width: 386px;
        margin-left: 20px;
        img:first-child {
          height: 374px;
        }
        img:last-child {
          height: 541px;
        }
      }
    }
  }
</style>

