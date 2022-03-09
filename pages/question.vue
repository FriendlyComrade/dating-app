<template>
      <div class="started-page__modal-content">
          <strong>Шаг {{questionModal}}</strong>
          <p class="started-page__modal-text-2">
            Мы должны быть уверены, что вы ищите серьезные отношения.
          </p>
          <button @click="nextQuestionModal" class="continue" type="button">ПРОДОЛЖИТЬ</button>
      </div>

<!--
        <div class="started-page__modal-content"  v-if="questionModal === 2">
          <strong>Шаг {{questionModal}}</strong>
          <p class="started-page__modal-text-3">
            Вы действительно готовы к реальным знакомствам?
          </p>
          <div class="started-page__modal-btn-block">
            <button @click="nextQuestionModal" class="yes-btn" type="button">ДА</button>
            <button class="not-btn" type="button">НЕТ</button>
          </div>
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
        </div>

        <div class="started-page__modal-content">
          <Form/>
        </div> -->
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
        .started-page__modal-content {
        user-select: none;
        display: flex;
        flex-direction: column;
        justify-content: center;

        align-items: center;
        width: 100%;
        padding: 80px 0;
        strong, h1, span { font-family: 'Comfortaa', cursive; }
        strong, h1 { font-size: 36px; }
        p {
          text-align: center;
          font-weight: 300;
          line-height: 22px;
          margin-top: 35px;
          font-family: 'Roboto', sans-serif;
          font-size: 16px;
        }
        p:nth-child(3){
          padding: 0 117px;
        }
        p:nth-child(5){
          padding: 0 115px;
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
        }
        p.started-page__modal-text-1 {
          padding: 0 80px;
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
        span{
          margin-top: 25px;
          font-size: 18px;
          font-weight: bold;
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
        button {
          margin-top: 35px;
          font-family: 'Comfortaa', cursive;
          font-size: 18px;
        }
        button.continue, button.yes-btn, button.not-btn {
          box-shadow: 0 4px 15px 4px rgba(0, 0, 0, 0.15);
          border-radius: 6px;
        }
        button.continue, button.yes-btn {
          background-color: #773344;
          color: white;
        }
        button.continue {
          width: 224px;
          height: 54px;
        }
        button.yes-btn, button.not-btn {
          width: 183px;
          height: 54px;
        }
        button.not-btn {
          border: 1px solid #773344;
          margin-left: 20px;
        }
      }
</style>
