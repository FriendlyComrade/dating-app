<template>
    <div class="many-hearts-conteiner">
      <img
        v-for="(items,i) in 20"
        :key="i"
        class="heart-image"
        src="@/assets/heart.png"
        alt="heart.png"/>
    </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .many-hearts-conteiner {
    position: absolute;
    width: 100vw;
    height: 100vh;
    img.heart-image{
      position: absolute;
      width: 30px;
      height: 26px;
      z-index: 2;
      pointer-events: none;
      user-select: none;
      @include _1440{
        width: vmax(30);
        height: vmax(26);
      }
    }
    img.heart-image:nth-child(1){
      top: 173px;
      left: 118px;
      @include _1440 {
        top: vmax(173);
        left: vmax(118);
      }
    }
    img.heart-image:nth-child(2){
      top: 175px;
      left: 313px;
      @include _1440 {
        top: vmax(175);
        left: vmax(313);
      }
    }
    img.heart-image:nth-child(3){
      top: 323px;
      left: 238px;
      @include _1440 {
        top: vmax(323);
        left: vmax(238);
      }
    }
    img.heart-image:nth-child(4){
      top: 394px;
      left: 68px;
      @include _1440 {
        top: vmax(394);
        left: vmax(68);
      }
    }
    img.heart-image:nth-child(5){
      top: 518px;
      left: 148px;
      @include _1440 {
        top: vmax(518);
        left: vmax(148);
      }
    }
    img.heart-image:nth-child(6){
      top: 682px;
      left: 238px;
      @include _1440 {
        top: vmax(682);
        left: vmax(238);
      }
    }
    img.heart-image:nth-child(7){
      top: 734px;
      left: 68px;
      @include _1440 {
        top: vmax(734);
        left: vmax(68);
      }
    }
    img.heart-image:nth-child(8){
      top: 858px;
      left: 148px;
      @include _1440 {
        top: vmax(858);
        left: vmax(148);
      }
    }
    img.heart-image:nth-child(9){
      top: 834px;
      left: 449px;
      @include _1440 {
        top: vmax(834);
        left: vmax(449);
      }
    }
    img.heart-image:nth-child(10){
      top: 771px;
      left: 599px;
      @include _1440 {
        top: vmax(771);
        left: vmax(599);
      }
    }
    img.heart-image:nth-child(11){
      top: 836px;
      left: 862px;
      @include _1440 {
        top: vmax(836);
        left: vmax(862);
      }
    }
    img.heart-image:nth-child(12){
      top: 793px;
      left: 975px;
      @include _1440 {
        top: vmax(793);
        left: vmax(975);
      }
    }
    img.heart-image:nth-child(13){
      top: 838px;
      left: 1272px;
      @include _1440 {
        top: vmax(838);
        left: vmax(1272);
      }
    }
    img.heart-image:nth-child(14){
      top: 689px;
      left: 1066px;
      @include _1440 {
        top: vmax(689);
        left: vmax(1066);
      }
    }
    img.heart-image:nth-child(15){
      top: 592px;
      left: 1272px;
      @include _1440 {
        top: vmax(592);
        left: vmax(1272);
      }
    }
    img.heart-image:nth-child(16){
      top: 498px;
      left: 1272px;
      @include _1440 {
        top: vmax(498);
        left: vmax(1272);
      }
    }
    img.heart-image:nth-child(17){
      top: 461px;
      left: 1036px;
      @include _1440 {
        top: vmax(461);
        left: vmax(1036);
      }
    }
    img.heart-image:nth-child(18){
      top: 322px;
      left: 1165px;
      @include _1440 {
        top: vmax(322);
        left: vmax(1165);
      }
    }
    img.heart-image:nth-child(19){
      top: 253px;
      left: 1251px;
      @include _1440 {
        top: vmax(253);
        left: vmax(1251);
      }
    }
    img.heart-image:nth-child(20){
      top: 189px;
      left: 1051px;
      @include _1440 {
        top: vmax(189);
        left: vmax(1051);
      }
    }
  }
</style>
