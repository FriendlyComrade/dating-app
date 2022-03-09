<template>
<div class="started-page__modal-block">
  <div class="started-page__modal-content" v-if="questionModal === 0">
    <h1>Внимание!</h1>
    <p class="started-page__modal-text-1">
      Наши девушки прошли проверку модератором и мы действительно хотим, чтобы люди
      находили друг друга и встречались в реальной жизни, а не бесконечно лайкали друг друга онлайн.
    </p>
    <span>Вы готовы к этому?</span>
      <button @click="nextQuestionModal" class="continue" type="button">ПРОДОЛЖИТЬ</button>
      <p id="we-dont">Мы не берём данных ваших кредитных карт.</p>
      <BeatingHearts/>
  </div>

  <div class="started-page__modal-content" v-else-if="questionModal === 1">
    <strong>Шаг {{questionModal}}</strong>
    <p class="started-page__modal-text-2">
      Мы должны быть уверены, что вы ищите серьезные отношения.
    </p>
    <button @click="nextQuestionModal" class="continue" type="button">ПРОДОЛЖИТЬ</button>
    <BeatingHearts/>
  </div>

  <div class="started-page__modal-content"  v-if="questionModal === 2">
    <strong>Шаг {{questionModal}}</strong>
    <p class="started-page__modal-text-3">
      Вы действительно готовы к реальным знакомствам?
    </p>
    <div class="started-page__modal-btn-block">
      <button @click="nextQuestionModal" class="yes-btn" type="button">ДА</button>
      <button class="not-btn" type="button">НЕТ</button>
    </div>
    <BeatingHearts/>
  </div>

  <div class="started-page__modal-content"  v-if="questionModal === 3">
    <strong>Шаг {{questionModal}}</strong>
    <p class="started-page__modal-text-4">
      Вы не будете оскорблять или писать негативного девушкам, членам нашего клуба, вы согласны?
    </p>
    <div class="started-page__modal-btn-block">
      <button @click="nextQuestionModal" class="yes-btn" type="button">ДА</button>
      <button class="not-btn" type="button">НЕТ</button>
    </div>
    <BeatingHearts/>
  </div>

  <div class="started-page__modal-content"  v-if="questionModal === 4">
    <strong>Шаг {{questionModal}}</strong>
    <p class="started-page__modal-text-5">
      Вы несете ответсвенность за информацию, которую размещаете на нашем сайте?
    </p>
    <div class="started-page__modal-btn-block">
      <button @click="nextQuestionModal" class="yes-btn" type="button">ДА</button>
      <button class="not-btn" type="button">НЕТ</button>
    </div>
    <BeatingHearts/>
  </div>

  <div class="started-page__modal-content"  v-if="questionModal === 5">

    <strong>Поздравляем!</strong>
    <span class="started-page__сongratulations-modal-span"> Вы имеете право на наш сайт! </span>
      <p class="started-page__сongratulations-modal-text">
        Мы тщательно подходим к подбору девушек и все они проверены нашим модератором
      </p>
      <hr>
      <p class="started-page__сongratulations-modal-text">
        Наш сервис абсолютно бесплатен для вас,  мы не берем данных ваших кредитных карт
        и не устраиваем простой флирт на камеру
      </p>
      <hr>
      <p class="started-page__сongratulations-modal-text">
        Мы даем личные контакты девушек, которые активно ищут мужчину, чтобы вам было удобнее
        связаться друг другом, а ваша переписка была действительно тайна без третьих лиц
      </p>
      <hr>
      <p>Мы против каких либо оскорблений, унижений и угроз</p>
      <span class="started-page__сongratulations-modal-span">
        Вы согласны с этим?
      </span>
        <button @click="nextQuestionModal" class="yes-btn" type="button">Я СОГЛАСЕН</button>
        <BeatingHearts/>
  </div>

  <div class="started-page__modal-content"  v-if="questionModal === 6">
    <Form/>
    <BeatingHearts style="right: -10px;"/>
  </div>
</div>
</template>

<script>
  export default {
    mounted() {
      if (localStorage.questionModal) { this.questionModal = localStorage.questionModal}
    },
    watch: {
      questionModal() {
        localStorage.questionModal = this.questionModal
      }
    },
    methods: {
      nextQuestionModal() {
        this.$store.commit('setQuestionModal', this.questionModal + 1)
      }
    },
    computed: {
      questionModal: {
        get() {
          return this.$store.state.questionModal
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/scss/_media_mixin.scss';
  @import '@/scss/_mixins.scss';
.started-page__modal-block {
  z-index: 2;
  position: absolute;
  margin: 0 auto;
  width: 590px;
  background-color: #F5E9E2;
  border: 7px solid #773344;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  @include _350{
    width: rem(295);
    height: rem(345);
    border: 5px solid #773344;
  }

  .started-page__modal-content {
    user-select: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 0;
    @include _350{
      width: rem(288);
      padding: 0;
    }

    strong, h1, span { font-family: 'Comfortaa', cursive; }
    strong, h1 {
      font-size: 36px;
      @include _350{
        font-size: 24px;
      }
    }
    p {
      text-align: center;
      font-weight: 300;
      line-height: 22px;
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      @include _350 {
        font-size: 14px;
        line-height: 16px;
      }
    }
    p:nth-child(2) {
      margin-top: 35px;
    }
    p:nth-child(3){
      padding: 0 117px;
    }
    p:nth-child(7){
      padding: 0 64px;
    }
    p:nth-child(9){
      font-weight: 400;
      font-size: 16px;
      font-family: 'Roboto', sans-serif;
      margin-top: 0;
      padding: 0;

    }
    p.started-page__сongratulations-modal-text {
      margin-top: 0;
      margin-bottom: 10px;
      padding: 0 115px;
    }
    p.started-page__modal-text-1 {
      padding: 0 80px;
      @include _350 {
        padding: 0 11px;
        margin-top: 16px;
      }
    }
    p.started-page__modal-text-2 {
      padding: 0 100px;
    }
    p.started-page__modal-text-3 {
      padding: 0 50px;
    }
    p.started-page__modal-text-4 {
      padding: 0 110px;
    }
    p.started-page__modal-text-5 {
      padding: 0 100px;
    }
    p#we-dont {
      padding: 0 64px;
      margin-top: 20px;
      @include _350 {
        margin-top: 12px;
        padding: 0 15px;
      }
    }
    span{
      margin-top: 25px;
      font-size: 18px;
      font-weight: bold;
      @include _350 {
        font-size: 16px;
        margin-top: 16px;
      }
    }
    span.started-page__сongratulations-modal-span {
      margin-top: 35px;

    }
    span.started-page__сongratulations-modal-span:nth-child(2) {
      margin-bottom: 25px;
    }
    hr {
      margin-bottom: 10px;
      border: none;
      background-color: #773344;
      color: #773344;
      height: 1px;
      width: 70px;
      display: block;
    }
    button.yes-btn, button.continue {
      background: #773344;
      color: white;
    }
    button.continue {
        width: 224px;
        height: 54px;
        @include _350 {
          width: 256px;
          height: 44px;
        }
    }
    button {
      margin-top: 35px;
      font-family: 'Comfortaa', cursive;
      font-size: 18px;
      box-shadow: 0px 4px 15px 4px rgba(0, 0, 0, 0.15);
      border-radius: 6px;
      @include _350 {
        margin-top: 16px;
      }
    }
    .yes-btn, button.not-btn {
      width: 183px;
      height: 54px;
    }
    button.not-btn {
      border: 1px solid #773344;
      margin-left: 20px;
    }
  }
}
</style>
