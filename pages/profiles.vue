<template>
  <Suspense>
    <div class="profiles-page">
      <strong>Анкеты</strong>
        <div class="profiles-page__data-list">
                <ProfileCard v-for="(profile, i ) in profiles" :key="i" :profile="profile"/>
        </div>
      <img class="hearts-img-top" src="@/assets/hearts.png" alt="herts-png"/>
      <img class="hearts-img-middle" src="@/assets/hearts.png" alt="herts-png"/>
      <img class="hearts-img-bottom" src="@/assets/hearts.png" alt="herts-png"/>
    </div>
    <template #fallback>
      <ProfileSkeleton/>
    </template>
  </Suspense>
</template>

<script>

  export default {
    mounted() {
      localStorage.currentPath = this.$route.path
    },
    async fetch({store}) {
      await store.dispatch('FETCH_PROFILES')
    },
    computed: {
      profiles() {
        return this.$store.state.girlsProfiles.slice(0, 9)
      }
    }
  }
</script>

<style lang="scss" scoped>
  $main-color: #E3B5A4;
  .profiles-page {
    position: relative;
    background-color: $main-color;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      position: absolute;
      width: 364px;
      height: 365px;
      z-index: 0;
    }
    .hearts-img-top {
      top: 127px;
      left: 63px;
    }
    .hearts-img-bottom {
      bottom: 435px;
      left: 30px;
    }
    .hearts-img-middle {
      top:993px;
      right: 28px;
    }
    strong {
      font-family: 'Comfortaa', cursive;
      font-size: 48px;
      color:white;
      margin-top: 100px;
    }
    &__data-list{
      z-index: 1;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      column-gap: 20px;
      row-gap: 43px;
      width: 1201px;
      margin-top: 50px;
      margin-bottom: 122px;
    }

  }

</style>

