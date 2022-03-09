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
    width: 100%;
    height: 100%;
    img.heart-image{
      position: absolute;
      width: 30;
      height: 26px;
      z-index: 5;
    }
    img.heart-image:nth-child(1){
      top: 221px;
      left: 118px;
    }
    img.heart-image:nth-child(2){
      top: 223px;
      left: 313px;
    }
    img.heart-image:nth-child(3){
      top: 375px;
      left: 238px;
    }
    img.heart-image:nth-child(4){
      top: 442px;
      left: 68px;
    }
    img.heart-image:nth-child(5){
      top: 566px;
      left: 148px;
    }
    img.heart-image:nth-child(6){
      top: 715px;
      left: 238px;
    }
    img.heart-image:nth-child(7){
      top: 782px;
      left: 68px;
    }
    img.heart-image:nth-child(8){
      bottom: 93px;
      left: 148px;
    }
    img.heart-image:nth-child(9){
      bottom: 117px;
      left: 449px;
    }
    img.heart-image:nth-child(10){
      bottom: 179.5px;
      left: 599px;
    }
    img.heart-image:nth-child(11){
      bottom: 114.5px;
      left: 862px;
      background: black;
    }
    img.heart-image:nth-child(12){
      bottom: 157.5px;
      left: 975px;
    }
    img.heart-image:nth-child(13){
      bottom: 112.5px;
      left: 1272px;
    }
    img.heart-image:nth-child(14){
      bottom: 262px;
      left: 1066px;
    }
    img.heart-image:nth-child(15){
      bottom: 357px;
      left: 1272px;
    }
    img.heart-image:nth-child(16){
      bottom: 452.5px;
      left: 1272px;
    }
    img.heart-image:nth-child(17){
      bottom: 489.5px;
      left: 1036px;
    }
    img.heart-image:nth-child(18){
      top: 370px;
      left: 1165px;
    }
    img.heart-image:nth-child(19){
      top: 301px;
      left: 1251px;
    }
    img.heart-image:nth-child(20){
      top: 237px;
      left: 1051px;
    }
  }
</style>
