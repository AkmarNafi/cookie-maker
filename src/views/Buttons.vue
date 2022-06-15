<template>
  <div class="container">
    <div>
      <label> Normal Button: <button>Cookie</button></label>
    </div>

    <div class="mt-3">
      <label> Disabled Button: <button disabled>Cookie disabled</button></label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},
};
</script>

<style lang="scss" scoped>
button {
  background: #ffffff;
  border-radius: 8px;
  min-width: 87px;
  height: 30px;
  border: none;
}

button:hover {
  cursor: poiner;
  box-shadow: 0px 1px 2px rgba(40, 39, 43, 0.04), 0px 1px 4px rgba(40, 39, 43, 0.12);
}

button:focus {
  box-shadow: 0px 1px 2px rgba(40, 39, 43, 0.04), 0px 1px 4px rgba(40, 39, 43, 0.12);
  outline: 2px solid #6270d4;
  outline-offset: 2px;
}
button:disabled {
  color: #b2b1b6;
}
</style>
