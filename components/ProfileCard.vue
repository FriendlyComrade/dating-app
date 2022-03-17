<template>
  <div class="profile-card-block">
    <div class="profile-card">
      <img :src="profile.avatar" :alt="profile.avatar + '' "/>
      <div class="profile-card__main-information">
        <div>
          <b>{{profile.name}}</b>
          <div class="profile-card__mail-block">
            <img class="profile-card__mail-img" src="@/assets/mail.png" alt="mail.png"/>
            <a href="mailto:profile@mail.ru">profile@mail.ru</a>
          </div>
        </div>
        <span>{{profile.country}}/{{profile.city}}</span>
      </div>
      <div class="profile-card__about-block">
        <p class="profile-card__about-text">{{profile.about}}</p>
      </div>
      <a href="mailto:profile@mail.ru"><button type="button">НАПИСАТЬ</button></a>

    </div>
  </div>
</template>

<script>

  export default {
    props: {
      profile: {
        type:Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
.profile-card-block {
  display: flex;
  justify-content: center;
  width: 387px;
  height: 652px;
  background-color: #F5E9E2;
  box-shadow: 0px 4px 15px 4px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  .profile-card {
    width: 337px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 100%;
      height: 300px;
      border-radius: 6px;
      object-fit: cover;
    }
    &__main-information {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 25px;
      b {
        font-family: 'Comfortaa', cursive;
        font-size: 24px;
      }
      span {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        margin-top: 6px;
      }
    }
    &__mail-block {
      display: flex;
      align-items: center;
      margin-top:7px;
      img.profile-card__mail-img {
        width: 21px;
        height: 15px;
        margin-right: 9.5px;
        border-radius: 0;
      }
      a {
        color: black;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
      }
    }
    &__about-block {
      height: 90px;
      overflow: hidden;
      margin-right: 29px;
      margin-top: 25px;
      // overflow-y: scroll;
      // overflow-x: hidden;
    }
    // &__about-block::-webkit-scrollbar {
    //   width: 1px;
    // }
    // &__about-block::-webkit-scrollbar-thumb{
    //   width: 1px;
    //   background-color: #773344;
    // }
    &__about-text {
      line-height: 22px;
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
    }
    a { align-self: flex-start; }
    button {
      margin-top: 25px;
      width: 157px;
      height: 54px;
      background: #773344;
      box-shadow: 0px 4px 15px 4px rgba(0, 0, 0, 0.15);
      border-radius: 6px;
      color: white;
    }
  }
}

</style>
