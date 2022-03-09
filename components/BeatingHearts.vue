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
    }
    .beating-heart-image:not(:nth-child(3)){
      width: 24px;
      height: 24px;
    }
    .beating-heart-image:nth-child(1){
      top: 21px;
      right: 84px;
    }
    .beating-heart-image:nth-child(2){
      top: 33px;
      right: 21px;
    }
    .beating-heart-image:nth-child(3){
      width: 46px;
      height: 46px;
      top: 57px;
      right: 54px;
    }
  }
</style>
