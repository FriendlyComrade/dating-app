<!--<template v-slot:activator="{ on, attrs }">-->
<template>
  <form @submit.prevent="postFormData" method="post">
    <strong>Заполните форму:</strong>
    <input
      placeholder="Введите имя"
      type="text"
      name="name"
      v-model.trim="$v.userName.$model"
      :class="$v.userName.$dirty ? 'required-input-field' : '' "
      :aria-invalid="errors.errorName"
      aria-errormessage="errorName"
      required
    />
    <span v-if="$v.userName.$dirty && $v.userName.required.$invalid" class="errormessage">
      The field is required.
    </span>
    <ol v-if="errors.errorNameText && $v.userName.$error" class="errormessage server-error">
      <li v-for="(error, i) in errors.errorNameText.split(',')" :key="i">{{error}}</li>
    </ol>
    <span id="errorName" class="errormessage">{{errors.errorNameText}}</span>
    <input
      placeholder="E-mail"
      type="email"
      name="email"
      v-model.trim="$v.userEmail.$model"
      :class="$v.userEmail.$dirty ? 'required-input-field' : '' "
      :aria-invalid="errors.errorEmail"
      aria-errormessage="errorEmail"
      required
    />
    <span v-if="$v.userEmail.$dirty && $v.userEmail.required.$invalid" class="errormessage">
      The field is required.
    </span>
    <span v-if="$v.userEmail.$dirty && $v.userEmail.email.$invalid" class="errormessage">
      {{$v.userEmail.email.$message}}
    </span>
    <ol v-if="errors.errorEmailText && $v.userEmail.$error" class="errormessage server-error">
      <li v-for="(error, i) in errors.errorEmailText.split(',')" :key="i">{{error}}</li>
    </ol>
    <input
      placeholder="Введите возраст"
      type="text"
      name="age"
      v-model.trim="$v.userAge.$model"
      :class="$v.userAge.$dirty ? 'required-input-field' : '' "
      :aria-invalid="errors.errorAge"
      aria-errormessage="errorAge"
      required
    />
    <span v-if="$v.userAge.$dirty && $v.userAge.required.$invalid" class="errormessage">
      The field is required.
    </span>
    <span v-if="$v.userAge.$dirty && $v.userAge.minLength.$invalid" class="errormessage">
      {{$v.userAge.minLength.$message}}
    </span>
    <ol v-if="errors.errorAgeText && $v.userAge.$error" class="errormessage server-error">
      <li v-for="(error, i) in errors.errorAgeText.split(',')" :key="i">{{error}}</li>
    </ol>
    <v-menu
      content-class="elevation-0"
      elevation
      :close-on-content-click="false"
      offset-y
      bottom
    >
      <template v-slot:activator="{ on, attrs }">
        <textarea
          v-model="activeRangeRadioBtn"
          v-bind="attrs"
          v-on="on"
          class="girls-age-input"
          :style="activeRangeRadioBtn ? 'border: 1px solid #773344;' : ''"
          name="girlsAge"
          placeholder="Какого возраста хотите найти девушку?"
          :rows="deviceWidth > 1380 ? '1' : '2' "
          :cols="deviceWidth > 1380 ? '1' : '2' "
          required
          readonly
        />
      </template>

      <v-list
        v-for="(item, i) in girlsAgeRange" :key="i"
        :class="i === 2 ? 'vlist' : '' "
        style="
          overflow: hidden;
          padding: 0;
          border-left: 1px solid rgba(0, 0, 0, 0.5);
          border-right: 1px solid rgba(0, 0, 0, 0.5);
          border-bottom: 1px solid rgba(0, 0, 0, 0.5);
          '
        ">
        <v-list-item
          class="vlist-item"
          :style="deviceWidth > 1024 ? 'height: 54px; padding-right: 20px;'
                                    : 'height: 46px !important; padding-right: 20px;' "
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
      </v-list>
    </v-menu>

    <button
      :class="[isButtonEnabled ? 'subscribe-form-btn-disabled' : 'subscribe-form-btn']"
      type="submit"
      :disabled="isSubmitButtonDisabled"
      >
      ПОДПИСАТЬСЯ
    </button>
    <p v-if="!isButtonEnabled || deviceWidth < 1024" class="final-agreement-warning">
      При нажатии на кнопку вы соглашаетесь с условиями
    </p>
    <div v-else class="started-page__agreement-checkboxes-conteiner">
      <div v-if="deviceWidth > 1024" class="started-page__agreement-checkbox-block">
        <input
          type="checkbox"
          id="privacyPolicyAgreementCheckbox"
          v-model="$v.privacyPolicyAgreementCheckbox.$model"
          :class="$v.privacyPolicyAgreementCheckbox.$dirty && $v.privacyPolicyAgreementCheckbox.$invalid  ?
          'required-checkbox-field' : '' "
        />
        <label
          for="privacyPolicyAgreementCheckbox"
          :style="$v.privacyPolicyAgreementCheckbox.$dirty && $v.privacyPolicyAgreementCheckbox.$invalid ?
          'color: red;' : '' ">
            При нажатии на кнопку вы соглашаетесь <br>
            с условиями <a href="#">Политики конфиденциальности</a>
        </label>
      </div>
      <div v-if="deviceWidth > 1024" class="started-page__agreement-checkbox-block">
        <input
          type="checkbox"
          id="noticeAgreementCheckbox"
          v-model="$v.noticeAgreementCheckbox.$model"
          :class ="$v.noticeAgreementCheckbox.$dirty && $v.noticeAgreementCheckbox.$invalid ?
          'required-checkbox-field' : '' "
        />
        <label
          for="noticeAgreementCheckbox"
          :style="$v.noticeAgreementCheckbox.$dirty && $v.noticeAgreementCheckbox.$invalid ?
          'color: red;' : '' ">
            Я согласен получать уведомления <br> и предложения
        </label>
      </div>
    </div>
    <BeatingHearts :style="deviceWidth > 600 ? 'right: -10px;' : 'right: 0px;' "/>
  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default {
  setup() {
    return {$v: useVuelidate()}
  },
  data: () => ({
    girlsAgeRange: [{range:'20-30'}, {range:'30-40'}, {range:'40-50'}],
    privacyPolicyAgreementCheckbox: false,
    noticeAgreementCheckbox: false,
    isButtonEnabled: true,
    noticeAgreementCheckboxWarning: false,
    deviceWidth: 0,
    errors: {
      errorName: false,
      errorNameText: '',
      errorEmail: false,
      errorEmailText: '',
      errorAge: false,
      errorAgeText: '',
      errorLang: false,
      errorLangText: ''
    }
  }),
  validations() {
    return {
      userName: {required},
      userEmail: {required, email},
      userAge: {required, minLength: minLength(2)},
      activeRangeRadioBtn: {required},
      privacyPolicyAgreementCheckbox: {
        noticeAgreementValid(value) {
          return value === true
        }
      },
      noticeAgreementCheckbox: {
        noticeAgreementValid(value) {
          return value === true
        }
      },
    }
  },
  created() {
      window.addEventListener('resize', this.onResize);
      this.onResize();
  },
  methods: {
    onResize(){
      this.deviceWidth = document.documentElement.clientWidth
    },
    async postFormData() {
      var userLang = navigator.language || navigator.userLanguage;
      const formData = {
        name: this.userName,
        email: this.userEmail,
        age: this.userAge,
        lang: userLang
      }
      localStorage.setItem('lang', formData.lang)
      try {
        const response = await this.$store.dispatch('SEND_FORM', formData)
        if (response.status === 201) {
          this.$router.push('/profiles')
          localStorage.setItem('login', true)
        } else if (response.status === 422) {
          const {name, email, age} = response.error;
          if (name) {
            this.errors.errorNameText = name.join()
            this.errors.errorName = true;
          }
          if (email) {
            this.errors.errorEmailText = email.join()
            this.errors.errorEmail = true;
          }
          if (age) {
            this.errors.errorAgeText = age.join()
            this.errors.errorAge = true;
          }
          return
        } else {
          console.log(response)
        }
      } catch(err) {
        console.log(err);
      }
    }
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
      if (this.deviceWidth > 800) {
        if (this.userName && this.userEmail && this.userAge && this.activeRangeRadioBtn &&
            this.privacyPolicyAgreementCheckbox && this.noticeAgreementCheckbox) {
          this.isButtonEnabled = false;
          return false
        } else {
          this.isButtonEnabled = true;
          return true
        }
      } else {
        if (this.userName && this.userEmail && this.userAge && this.activeRangeRadioBtn) {
          this.isButtonEnabled = false;
          return false
        } else {
          this.isButtonEnabled = true;
          return true
        }
      }
    },
  },
  mounted() {
    this.deviceWidth = document.documentElement.clientWidth;
    localStorage.clear()
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

  input, textarea{
    display: flex;
    justify-content: center;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 6px;
    outline:none;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }

  input[type=text],
  input[type=email],
  textarea{
    margin-top: 15px;
    padding: 14px 0;
    width: 385px;
    padding-left: 20px;
    @include _1440 {
      padding: vmax(17) 0;
      width: vmax(385);
      padding-left: vmax(20);
    }
    @include _1024 {
      margin-top: 10px;
      width: vmax(450);
    }
    @include _600 {
      width: vmax(600);
      padding-left: vmax(30);
    }
    @include _480 {
      width: vmax(450);
    }
    @include _320 {
      display: flex;
      width: 256px;
      font-size: 14px;
      line-height: 16px;
      margin-top: 10px;
    }
  }

  input[type=text],
  input[type=email] {
    @include _600 {
      padding: vh(20) 15px;
    }
    @include _480 {
      padding: vh(15) 15px;
    }
    @include _320 {
      padding: 13px 15px;
    }
  }


  input[type=text]::placeholder,
  input[type=email]::placeholder,
  textarea::placeholder{
    outline: none;
    font-family: 'Roboto', sans-serif !important;
    font-size: 16px;
    @include _320 {
      font-size: 14px;
      line-height: 16px;
    }
  }
  strong {
    line-height: 40px;
    margin-bottom: 20px;
    font-family: 'Comfortaa', cursive;
    font-size: 36px;
    @include _1440 {
      margin-bottom: vmax(35);
      font-size: vmax(36);
    }
    @include _1024 {
      margin-bottom: 0;
      font-size: vmax(40);
    }
    @include _600 {
      font-size: vmax(55);
    }
    @include _480 {
      font-size: vmax(50);
      padding: 0 60px;
      text-align: center;
    }
    @include _320 {
      font-size: 24px;
      line-height: 27px;
      margin-bottom: 6px;
    }
  }

  textarea {
    resize:none;
    @include _1280 {
      padding:  13px 25px 13px 15px;
    }
    @include _1024 {
      padding: 13px 35px 13px 15px;
    }
    @include _320 {
      padding: 13px 60px 13px 15px;
    }
  }
  .girls-age-input,
  .girls-age-input[aria-expanded= true] {
    background-repeat: no-repeat;
    background-position-x: 344.5px;
    background-position-y: 22px;
    @include _1440 {
      background-position-x: vmax(344.5);
      background-position-y: vmax(22);
    }
    @include _1024 {
      background-position-x: vmax(400);
      background-position-y: vmax(30);
    }
    @include _600 {
      background-position-x: vmax(520);
      background-position-y: vmax(38);
    }
    @include _480 {
      background-position-x: vmax(400);
      background-position-y: vmax(38);
    }
    @include _320 {
      background-position-x: 227px;
      background-position-y: 14px;
    }
  }
  .girls-age-input[aria-expanded= true] {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background-image: url('@/assets/select-arrow-active.png');
  }
  .girls-age-input {
    background-image: url('@/assets/select-arrow.png');
    @include _600 {
      background-size: 15px;
    }
  }
  .girls-age-input-big-screen {
    background-image: url('@/assets/select-arrow.png');
    height: 54px !important;
  }
  .started-page__agreement-checkboxes-conteiner {
    margin-top: 15px;
    width: 384px;
    display: flex;
    flex-direction: column;
    @include _1440 {
      margin-top: vmax(15);
      width: vmax(384);
    }
  }
  p.final-agreement-warning {
    margin-top: 15px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    @include _1280 { padding: 0 vmax(70); text-align: center; }
    @include _1024 {
      margin-top: 10px;
    }
    @include _600 {
      margin-bottom: 0;
    }
    @include _320 {
      font-size: 12px;
      line-height: 14px;
    }
  }

  .started-page__agreement-checkbox-block {
    display: flex;
    text-align: start;
    justify-content: start;
    align-items: start;
    label {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 14px;
      margin-top: 1px;
      line-height: 16px;
      a {
        text-decoration: none;
        color:#773344;
      }
    }
  }
  .started-page__agreement-checkbox-block:nth-child(1) {
    margin-bottom: 10px;
  }

  button.subscribe-form-btn-disabled,
  button.subscribe-form-btn {
    line-height: 18px;
    box-shadow: 0px 4px 15px 4px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    margin-top: 18px;
    color: white;
    font-family: 'Comfortaa', cursive;
    font-size: 16px;
    padding: 13px 0;
    @include _320 {
      margin-top: 12px;
    }
  }
  button.subscribe-form-btn-disabled {
    background: rgba(119, 51, 68, 0.5);
  }
  button.subscribe-form-btn {
    background: #773344;
  }
  button.subscribe-form-btn-disabled,
  button.subscribe-form-btn {
    width: 385px;
    @include _1440 {
      width: vmax(385);
    }
    @include _1024 {
      width: vmax(455);
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

//---------------------------------------Checkbox-----------------------------------------//

input[type=checkbox]:checked,
input[type=checkbox]:not(:checked) {
  position: absolute;
  left: -9999px;
}

input[type=checkbox]:checked + label,
input[type=checkbox]:not(:checked) + label{
    display: inline-block;
    position: relative;
    padding-left: 28px;
    line-height: 16px;
    cursor: pointer;
}


input[type=checkbox]:checked + label:before,
input[type=checkbox]:not(:checked) + label:before{
  content: "";
  position: absolute;
  left: 0px;
  top: 0px;
  width: 20px;
  height: 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);
}

.required-checkbox-field:not(:checked) + label::before {
  border: 1px solid red !important;
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

  .vlist {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;

  }
  .vlist-item {
    @include _1440{
      height: vmax(54) !important;
    }
    @include _1024 {
      min-height: 20px !important;
      height: 40px !important;
    }
  }
  .errormessage {
    list-style:disc;
    color: rgb(255, 41, 41);
    align-self: flex-start;
    font-size: 16px;
    margin-top: 2px;
    padding-left: 20px;
    top: 198px;
    @include _1024 {
      padding-left: 55px;
    }
    @include _600 {
      padding-left: 45px;
    }
    @include _480 {
      padding-left: 30px;
    }
    @include _320 {
      padding-left: 15px;
    }
  }
  .errormessage.server-error {
    padding-left: 40px;
  }
  .required-input-field:invalid {
    border: 0;
    box-shadow: 0px 0px 3px 0px red;

  }
  .required-input-field:invalid::placeholder {
    color: rgb(231, 97, 97);
  }
  .required-input-field:valid {
    border: 1px solid #773344;
  }


</style>
