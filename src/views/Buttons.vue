<template>
  <div class="container">
    <div>
      <label> Normal Button: <custom-button>Cookie</custom-button></label>
    </div>

    <div class="mt-3">
      <label>
        Disabled Button: <custom-button disabled>Cookie disabled</custom-button></label
      >
    </div>
  </div>
</template>

<script>
import CustomButton from "../components/CustomButton.vue";
export default {
  data() {
    return {};
  },
  components: {
    CustomButton,
  },
  mounted() {},
};
</script>
