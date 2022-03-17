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
      <button @click="previousQuestionModal" class="not-btn" type="button">НЕТ</button>
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
      <button @click="previousQuestionModal" class="not-btn" type="button">НЕТ</button>
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
      <button @click="previousQuestionModal" class="not-btn" type="button">НЕТ</button>
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
        <button @click="nextQuestionModal" class="continue" type="button">Я СОГЛАСЕН</button>
        <BeatingHearts/>
  </div>

  <div class="started-page__modal-content"  v-if="questionModal === 6">
    <Form/>

  </div>
</div>
</template>

<script>
  export default {
    mounted() {
      if (localStorage.questionModal) { this.questionModal = localStorage.questionModal}
    },
    watch: {
      questionModal(num) {
        localStorage.questionModal = num
      }
    },
    methods: {
      nextQuestionModal() {
        this.$store.commit('setQuestionModal', this.questionModal + 1)
      },
      previousQuestionModal() {
        this.$store.commit('setQuestionModal', this.questionModal - 1)
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
  @include _1440 {
    width: vmax(590);
  }
  @include _600 {
    width: vmax(800);
  }
  @include _480 {
      width: vmax(600);
    }
  @include _320{
    width: 288px;
    border: 5px solid #773344;
  }
  .started-page__modal-content {
    user-select: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 73px 0;
    @include _1440 {
      padding: vmax(73) 0;
    }
    @include _1024 {
      padding: 40px 0;
    }
    @include _320{
      padding: 36px 0;
    }
    strong, h1, span { font-family: 'Comfortaa', cursive; }
    strong, h1 {
      font-size: 36px;
      line-height: 40px;
      @include _1440 {
        font-size: vmax(36);
        line-height: vmax(40);
      }
      @include _600 {
        font-size: 28px;
        line-height: 27px;
      }
      @include _320 {
        font-size: 24px;
        line-height: 27px;
      }
    }
    p {
      text-align: center;
      font-weight: 300;
      line-height: 22px;
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      @include _1440 {

      }
      @include _1280 {
        line-height: 20px;
      }
      @include _320 {
        font-size: 14px;
        line-height: 16px;
      }
    }
    p:nth-child(2) {
      margin-top: 35px;
      @include _1440 {
        margin-top: vmax(35);
      }
    }
    p:nth-child(3){
      padding: 0 117px;
      @include _1024 {
        padding: 0 70px;
      }
      @include _320 {
        padding: 0 8px;
      }
    }
    p:nth-child(7){
      padding: 0 64px;
      @include _1440 {
        padding: 0 vmax(64);
      }
      @include _1024 {
        padding: 0 20px;
      }
      @include _320 {
        padding: 0 20px
      }
    }
    p:nth-child(9){
      font-weight: 400;
      font-size: 16px;
      font-family: 'Roboto', sans-serif;
      margin: 0;
      padding: 0;
      line-height: 20px;
      @include _1440 {
        line-height: vmax(20);
      }
      @include _1024 {
        padding: 0 vmax(34);
        margin-bottom: 10px;
      }
      @include _600  {
        line-height: 18px;

      }
      @include _320 {
        padding: 0 24px;
        font-size: 14px;
        line-height: 16px;
        margin:0 ;
      }
    }
    p.started-page__сongratulations-modal-text {
      line-height: 22px;
      margin-top: 0;
      margin-bottom: 10px;
      @include _1440 {
        line-height: vmax(22);
        margin-bottom: 10px;
      }
      @include _600 {
        line-height: 18px;
      }
      @include _480 {
        padding: 3px;
      }
      @include _320 {
        font-size: 14px;
        line-height: 16px;
        margin-bottom: 8px;
      }
    }
    p.started-page__сongratulations-modal-text:nth-child(5) {
      padding: 0 114px;
      @include _1440 {

      }
      @include _1024 {
        padding: 0 40px;
      }
      @include _320 {
        padding: 0 20px;
      }
    }
    p.started-page__сongratulations-modal-text:nth-child(6) {

      padding: 0 64px;
      @include _1440 {
        padding: 0 vmax(64)
      }
    }
    p.started-page__modal-text-1 {
      padding: 0 80px;
      @include _1440 {
        padding: 0 vmax(80)
      }
      @include _480 {
        padding: 0 10px;
      }
      @include _320 {
        padding: 0 25px;
        margin: 16px 0;
      }
    }
    p.started-page__modal-text-2 {
      padding: 0 100px;
      @include _1440 { padding: 0 vmax(100) }
      @include _320 {
        padding: 0 24px;
      }
    }
    p.started-page__modal-text-3 {
      padding: 0 50px;
      @include _1440 { padding: 0 vmax(50) }
      @include _320 { padding: 0 50px }
    }
    p.started-page__modal-text-4 {
      padding: 0 110px;
      @include _1440 { padding: 0 vmax(110) }
      @include _480 {
        padding: 0 10px;
      }
      @include _320 { padding: 0 16px }
    }
    p.started-page__modal-text-5 {
      padding: 0 100px;
      @include _1440 { padding: 0 vmax(100) }
    @include _480 {
        padding: 0 15px;
      }
      @include _320 { padding: 0 40px;}
    }
    p.started-page__modal-text-2, p.started-page__modal-text-3,
    p.started-page__modal-text-4,  p.started-page__modal-text-5{
        margin-top: 16px;
        margin-bottom: 0;
    }
    p#we-dont {
      padding: 0 64px;
      margin-top: 20px;
      line-height: 16px;
      @include _1440 {
        padding: 0 vmax(64);
        margin-top: vmax(20);
      }
      @include _320 {
        font-size: 12px;
        line-height: 14px;
        margin-top: 12px;
        padding: 0 15px;
      }
    }
    span{
      margin-top: 25px;
      font-size: 18px;
      font-weight: bold;
      line-height: 20px;

      @include _1440 {
        margin-top: vmax(25);
      }
      @include _320 {
        font-size: 16px;
        line-height: 18px;
        margin-top: 0;

      }
    }
    span.started-page__сongratulations-modal-span {
      margin-top: 35px;
      @include _1440 { margin-top: vmax(35); }
      @include _320 {
        font-size: 14px;
        line-height: 16px;
        margin-top: 16px;
        text-align: center;
      }

    }
    span.started-page__сongratulations-modal-span:nth-child(2) {
      margin-bottom: 25px;
      text-align: center;
      @include _1440 { margin-bottom: vmax(25); }
      @include _320 {
        font-size: 14px;
        line-height: 16px;
        margin: 16px 0;
      }
    }
    span.started-page__сongratulations-modal-span:not(:nth-child(2)) {
      @include _1024 { margin-top: 0; }
      @include _320 { margin-top: 16px; }

    }
    hr {
      margin-bottom: 10px;
      border: none;
      background-color: #773344;
      color: #773344;
      height: 1px;
      width: 70px;
      display: block;
      @include _1440 {
        margin-bottom: vmax(10);
      }
      @include _320 {
        margin-bottom: 8px;
      }
    }
    button {
      line-height: 18px;
      margin-top: 35px;
      font-family: 'Comfortaa', cursive;
      font-size: 18px;
      box-shadow: 0px 4px 15px 4px rgba(0, 0, 0, 0.15);
      border-radius: 6px;
      padding: 18px 0;
      @include _1440 {
        margin-top: vmax(35);
        padding: 13px 0;
      }
      @include _320 {
        margin-top: 16px;
        font-size: 14px;
        line-height: 16px;
      }
    }
    button.yes-btn, button.continue {
      background: #773344;
      color: white;
    }
    button.continue {
        width: 224px;
        @include _1440 {
          width: vmax(224);
        }
        @include _979 {
          width: vmax(400);
        }
        @include _600 {
          width: vmax(600);
        }
        @include _480 {
          width: vmax(450);
        }
        @include _320 {
          width: 256px;
        }

    }
    .yes-btn, button.not-btn {
      width: 183px;
      @include _1440 {
        width: vmax(183);
      }
      @include _600 {
        width: vmax(300);
      }
      @include _480 {
        width: vmax(200);
      }
      @include _320 {
        width: 100px;
      }
    }
    button.not-btn {
      border: 1px solid #773344;
      margin-left: 20px;
      @include _1440 {
        margin-left: vmax(20);
      }
      @include _320 {
        margin-left: 12px;
      }
    }
  }
}
</style>
