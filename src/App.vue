<template>
  <div id="app">
    <div class="container" id="nav">
      <img src="@/assets/images/logo.png" alt="" class="logo" />

      <div class="navlinks">
        <router-link :to="{name: 'Home'}">Home</router-link>
				<router-link :to="{name: 'Buttons'}">Buttons</router-link>
      </div>
    </div>
    <FadeTransition :duration="200" mode="out-in">
      <router-view />
    </FadeTransition>
  </div>
</template>

<script>
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    FadeTransition,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Poppins";
	background: #F5F5F5;
	min-height: 100vh;
  #nav {
    display: flex;
    margin-bottom: 50px;

    .logo {
      height: 50px;
    }
    .navlinks {
      margin-left: auto;
      order: 2;
      a {
        margin-left: 40px;
        font-weight: 600;

        font-size: 17px;
        position: relative;
        top: 15px;
      }
    }

    padding-top: 40px;
  }
}
</style>
