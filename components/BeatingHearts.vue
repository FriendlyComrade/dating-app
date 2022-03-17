<template>
    <div class="beating-heart-conteiner">
      <img class="beating-heart-image" src="@/assets/emojione_beating-heart.png" alt="emojione_beating-heart.png"/>
      <img class="beating-heart-image" src="@/assets/emojione_beating-heart.png" alt="emojione_beating-heart.png"/>
      <img class="beating-heart-image" src="@/assets/emojione_beating-heart.png" alt="emojione_beating-heart.png"/>
    </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .beating-heart-conteiner {
    position: absolute;
    width: 100%;
    height: 20%;
    top: 0;
    user-select: none;
    img.beating-heart-image{
      position: absolute;
      pointer-events: none;
      user-select: none;
    }
    .beating-heart-image:not(:nth-child(3)){
      width: 24px;
      height: 24px;
      @include _1440 {
        width: vmax(24);
        height: vmax(24);
        @include _320 {
          width: 14px;
          height: 14px;
        }
      }
    }
    .beating-heart-image:nth-child(1){
      top: 21px;
      right: 84px;
      @include _1440 {
        top: vmax(21);
        right: vmax(84);
      }
    }
    .beating-heart-image:nth-child(2){
      top: 33px;
      right: 21px;
      @include _1440 {
        top: vmax(33);
        right: vmax(21);
      }
    }
    .beating-heart-image:nth-child(3){
      width: 46px;
      height: 46px;
      top: 57px;
      right: 54px;
      @include _1440 {
        width: vmax(46);
        height: vmax(46);
        top: vmax(57);
        right: vmax(54);
      }
      @include _320 {
        width: 26px;
        height: 26px;
      }
    }
  }
</style>
