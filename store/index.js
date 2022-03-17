export const state = () => ({
  questionModal: 0,
  userName: '',
  userEmail: '',
  userAge: '',
  activeRangeRadioBtn: '',
  girlsProfiles: []
})

export const getters = {
  getUserName: (state) => state.userName,
  getUserEmail: (state) => state.userEmail,
  getUserAge: (state) => state.userAge,
  getUserActiveRangeRadioBtn: (state) => state.activeRangeRadioBtn,
  getGirlsProfiles: (state) => state.girlsProfiles,
  getQuestionModal: (state) => state.questionModal,
}

export const actions = {
  SEND_FORM: async (context, value ) => {
    let response = await fetch( 'https://dev.rusdat.net/api/test/crm/send_lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(value),
  })
    console.log(response.json())
    return response.json()
  },
  FETCH_PROFILES: async ({commit}) => {
    const result = await fetch('https://dev.rusdat.net/api/test/profiles')
    .then(res => res.json())
    commit('setGirlsProfiles', result.data)
    console.log(result.data)
    return result.data;
  }
}

export const mutations = {
  setUserName(state, name) {
    state.userName = name
  },
  setUserEmail(state, email) {
    state.userEmail = email
  },
  setUserAge(state, age) {
    state.userAge = age
  },
  setUserActiveRangeRadioBtn(state, range) {
    state.activeRangeRadioBtn = range
  },
  setGirlsProfiles(state, profiles) {
    state.girlsProfiles = profiles
  },
  setQuestionModal(state, num) {
    state.questionModal = num
  }
}

