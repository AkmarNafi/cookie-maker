<template>
  <div class="container">
    <h1 class="mb-2">Cook a Cookie</h1>
    <custom-button @clicked="cookACookie">Cook Cookie</custom-button>
    <h1 class="mb-2 mt-6">Your cookies</h1>
    <span v-for="(cookie, index) in cookies" :key="index" class="cookies">
      {{ cookie }}
    </span>

    <div v-if="noCookie">You don't have any cookies yet, Start cookin 🍪</div>
  </div>
</template>

<script>
import { cookCookie } from "../services/cookieCookingService";
import CustomButton from "../components/CustomButton.vue";
export default {
  data() {
    return {
      cookies: [],
    };
  },
  components: {
    CustomButton,
  },
  methods: {
    async cookACookie() {
      try {
        let cookie = await cookCookie();
        this.cookies.push(cookie);
      } catch (error) {
        this.$buefy.toast.open({
          duration: 1000,
          message: error,
          position: "is-bottom",
          type: "is-danger",
        });
      }
    },
  },
  computed: {
    noCookie() {
      return this.cookies.length === 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.cookies {
  font-size: 50px;
}
</style>
