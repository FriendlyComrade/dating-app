<template v-slot:activator="{ on, attrs }">
  <form @submit.prevent="postFormData" method="post">
    <strong>Заполните форму:</strong>
    <input
    placeholder="Введите имя"
    type="text"
    name="name"
    v-model.trim="userName"
    />
    <input
    placeholder="E-mail"
    type="email"
    name="email"
    v-model.trim="userEmail"
    />
    <input
    placeholder="Введите возраст"
    type="text"
    name="age"
    v-model.number="userAge"
    />
    <v-menu
      :close-on-content-click="false"
      offset-y
      :class="!isButtonEnabled ? 'fix-menu' : '' "

    >
      <template v-slot:activator="{ on, attrs }">
        <input
          ref="expire"
          v-model="activeRangeRadioBtn"
          v-bind="attrs"
          v-on="on"
          class="girls-age-input"
          @click="activeMenu = !activeMenu"
          type="text"
          name="girlsAge"
          placeholder="Какого возраста хотите найти девушку?"
          readonly
        />
      </template>

      <v-list v-for="(item, i) in girlsAgeRange" :key="i">
        <v-list-item
        >
          <v-radio-group v-model="activeRangeRadioBtn">
            <v-radio
              :name="item.range"
              :label="item.range"
              :value="item.range"
              :key="i"
              :ripple="false"
              color="#773344"
            />
          </v-radio-group>
        </v-list-item>
        <v-divider
          color="#00000"
          v-if="i < girlsAgeRange.length - 1"
        ></v-divider>
      </v-list>
    </v-menu>

    <button
      :class="[isButtonEnabled ? 'subscribe-form-btn-disabled' : 'subscribe-form-btn']"
      type="submit"
      :disabled="isSubmitButtonDisabled"
      >
      ПОДПИСАТЬСЯ
    </button>

    <p v-if="!isButtonEnabled" class="final-agreement-warning">
      При нажатии на кнопку вы соглашаетесь с условиями
    </p>
    <div v-else class="started-page__agreement-checkboxes-conteiner">
      <div class="started-page__agreement-checkbox-block">
        <input
          type="checkbox"
          id="privacyPolicyAgreementCheckbox"
          v-model="privacyPolicyAgreementCheckbox"
        />
        <label for="privacyPolicyAgreementCheckbox">
          При нажатии на кнопку вы соглашаетесь <br>
          с условиями <a href="#">Политики конфиденциальности</a>
        </label>
      </div>
      <div class="started-page__agreement-checkbox-block">
        <input
          type="checkbox"
          id="noticeAgreementCheckbox"
          v-model="noticeAgreementCheckbox"
        />
        <label for="noticeAgreementCheckbox">Я согласен получать уведомления <br> и предложения</label>
      </div>
    </div>


  </form>
</template>

<script>
  export default {
    data: () => ({
      girlsAgeRange: [{range:'20-30'}, {range:'30-40'}, {range:'40-50'}],
      privacyPolicyAgreementCheckbox: false,
      noticeAgreementCheckbox: false,
      isButtonEnabled: true,
    }),
    methods: {
      async postFormData() {
        var userLang = navigator.language || navigator.userLanguage;
        const formData = {
          name: this.userName,
          email: this.userEmail,
          age: this.userAge,
          lang: userLang
        }
        localStorage.setItem('lang', formData.lang)
        const status = await this.$store.dispatch('SEND_FORM', formData)
        if (status === 201) {
          this.$router.push('/profiles')
          localStorage.setItem('login', true)
        }
      },
    },
    computed: {
      userName: {
        get() {
          return this.$store.state.userName
        },
        set(value) {
          this.$store.commit('setUserName', value)
        }
      },
      userEmail: {
        get() {
          return this.$store.state.userEmail
        },
        set(value) {
          this.$store.commit('setUserEmail', value)
        }
      },
      userAge: {
        get() {
          return this.$store.state.userAge
        },
        set(value) {
          this.$store.commit('setUserAge', value)
        }
      },
      activeRangeRadioBtn: {
        get() {
            return this.$store.state.activeRangeRadioBtn
        },
        set(value) {
          this.$store.commit('setUserActiveRangeRadioBtn', value)
        }
      },
      isSubmitButtonDisabled(){
        if (this.userName && this.userEmail && this.userAge && this.activeRangeRadioBtn &&
            this.privacyPolicyAgreementCheckbox && this.noticeAgreementCheckbox) {
          this.isButtonEnabled = false;
          return false
        } else {
          this.isButtonEnabled = true;
          return true
        }
      },


    },

    mounted() {
      if(localStorage.name) { this.userName = localStorage.name }
      if (localStorage.email) { this.userEmail = localStorage.email }
      if (localStorage.age) { this.userAge = localStorage.age }
      if (localStorage.activeRangeRadioBtn) { this.activeRangeRadioBtn = localStorage.activeRangeRadioBtn }
      if (localStorage.privacyPolicyAgreementCheckbox ) {
        this.privacyPolicyAgreementCheckbox = localStorage.privacyPolicyAgreementCheckbox
      }
      if (localStorage.noticeAgreementCheckbox) {
        this.noticeAgreementCheckbox = localStorage.noticeAgreementCheckbox
      }
    },
    watch: {
      userName() { localStorage.name = this.$store.state.userName },
      userEmail() { localStorage.email = this.$store.state.userEmail },
      userAge() { localStorage.age = this.$store.state.userAge },
      activeRangeRadioBtn() { localStorage.activeRangeRadioBtn = this.$store.state.activeRangeRadioBtn },
      privacyPolicyAgreementCheckbox() {
        localStorage.privacyPolicyAgreementCheckbox = this.privacyPolicyAgreementCheckbox
      },
      noticeAgreementCheckbox() {
        localStorage.noticeAgreementCheckbox = this.noticeAgreementCheckbox
      }
    },

  }
</script>


<style lang="scss" scoped>
  .started-page__modal-block form {
  display: flex;
  flex-direction: column;
  align-items: center;
  input, select {
    display: flex;
    justify-content: center;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 6px;
    outline:none;
    padding-left: 20px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;

  }
  strong {
    margin-bottom: 35px;
    font-family: 'Comfortaa', cursive;
    font-size: 36px;
  }
  select { margin-bottom: 20px; }
  .girls-age-input,
  .girls-age-input[aria-expanded= true] {
    background-repeat: no-repeat;
    background-position-x: 344.5px;
    background-position-y: 22px;
  }
  .girls-age-input[aria-expanded= true] {
        border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background-image: url('@/assets/select-arrow.png');
  }
  .girls-age-input {
    background-image: url('@/assets/select-arrow-active.png');
  }
  .started-page__agreement-checkboxes-conteiner {
    margin-top: 15px;
    width: 384px;
    display: flex;
    flex-direction: column;
  }
  .final-agreement-warning {
    margin-top: 15px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }
  .menu {
    background-color: black;
  }
  .started-page__agreement-checkbox-block {
    display: flex;
    text-align: start;
    justify-content: start;
    align-items: start;
    margin-bottom: 10px;
    label {
      font-family: 'Roboto', sans-serif;
      line-height: 16px;
      font-weight: 400;
      font-size: 14px;
      margin-top: 1px;
      a {
        text-decoration: none;
        color:#773344;
      }
    }

//---------------------------------------Checkbox-----------------------------------------//
input[type=checkbox]:checked,
input[type=checkbox]:not(:checked) {
  position: absolute;
  left: -9999px;
}

input[type="checkbox"]:checked + label,
input[type="checkbox"]:not(:checked) + label{
    display: inline-block;
    position: relative;
    padding-left: 28px;
    line-height: 20px;
    cursor: pointer;
}

input[type="checkbox"]:checked + label:before,
input[type="checkbox"]:not(:checked) + label:before{
  content: "";
  position: absolute;
  left: 0px;
  top: 0px;
  width: 20px;
  height: 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);
}

input[type=checkbox]:checked + label:before {
  background-color:#773344;
  background-image: url('@/assets/check.png');
  background-position: center;
}


input[type=checkbox]:checked + label:before,
input[type=checkbox]:not(:checked) + label:before {
    border-radius: 2px;
}

input[type=checkbox]:checked + label:after,
input[type=checkbox]:not(:checked) + label:after{
    content: "";
    position: absolute;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
}


input[type=checkbox]:not(:checked) + label:after {
    opacity: 0;
}

input[type=checkbox]:checked + label:after {
    opacity: 1;
}
//--------------------------------------------------------------------------------//
  }
  input[type=text],
  input[type=email] {
    margin-bottom: 15px;
    width: 385px;
    height: 54px;
  }
  input[type=text]::placeholder,
  input[type=email]::placeholder {
    color: rgba(0, 0, 0, 0.5);
    outline: none;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  button.subscribe-form-btn-disabled,
  button.subscribe-form-btn {
    box-shadow: 0px 4px 15px 4px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    margin-top: 0;
    color: white;
    font-family: 'Comfortaa', cursive;
    font-size: 16px;
  }
  button.subscribe-form-btn-disabled { background: rgba(119, 51, 68, 0.5); }
  button.subscribe-form-btn { background: #773344; }
  button.subscribe-form-btn-disabled,
  button.subscribe-form-btn {
    width: 385px;
    height: 54px;
  }
    input[type=radio] {
    display: flex;
    width: 40px;
    height: 40px;
  }
  .v-sheet {
    padding: 0;
  }
  .v-menu__content {
    top: 61.9% !important;
    left: 16.6% !important;
    border-top: 0 !important;
    overflow: hidden;
    box-shadow: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.5)
  }
  .fix-menu .v-menu__content {
    top: 69.7% !important;
    left: 16.6% !important;
  }
  .v-list-item {
    height: 54px;
    display: flex;
    align-items: center;
  }
  .v-list-item:hover {
    background: white;
  }
  .v-divider {
    opacity: 0.5;
  }
  .v-input--selection-controls {
    margin-bottom: 20px;
    padding: 0;
  }
  .v-radio {
    margin-top: 40%;
  }
}
</style>
