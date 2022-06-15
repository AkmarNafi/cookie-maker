<template>
  <div class="container">
    <h1 class="mb-2">Cook a Cookie</h1>
    <button @click="cookACookie">Cook Cookie</button>

    <hr>

    <h1 class="mb-2">Your cookies</h1>
    <span v-for="(cookie, index) in cookies" :key="index" class="cookies">
      {{ cookie }}
    </span>

		<div v-if="noCookie">You dont have any cookies yet, Start cookin 🍪 </div>
  </div>
</template>

<script>
import { cookCookie } from "../services/cookieCookingService";
export default {
  data() {
    return {
      cookies: [],
    };
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
		noCookie(){
			return this.cookies.length === 0
		}
	},
};
</script>

<style lang="scss" scoped>
.cookies {
  font-size: 50px;
}
</style>
