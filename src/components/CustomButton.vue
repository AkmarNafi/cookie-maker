<template>
  <button @click="clickHandler" :disabled="isDisabled"><slot /></button>
</template>

<script>
export default {
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    async clickHandler() {
      this.$emit("clicked");
    },
  },
};
</script>
