<template>
  <!-- zamiast :class={dark : dark} -->
  <div class="searchWrapper">
    <input
      :class="{dark}"
      id="search"
      name="search"
      placeholder="space stuff search..."
      @input="handleChange"
    />
  </div>
</template>

<script>
export default {
  name: "SearchInput",

  props: {
    dark: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleChange(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style lang='scss' scoped>
.searchWrapper {
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    display: flex;
    align-self: center;
    width: 50%;
    margin-top: 50px;
    margin-bottom: 20px;
    height: 40px;
    font-size: 23px;
    font-weight: 200;
    border: 0;
    border-bottom: 2px solid rgba(255, 255, 255, 0.301);
    text-align: center;
    background: none;
    color: white;
    transition: box-shadow ease-in 0.2s;
  }
  input:focus {
    outline: none !important ;
    box-shadow: 0 12px 9px -9px white;
  }
  .dark {
    color: black;
    border-bottom: 2px solid rgba(3, 3, 3, 0.644);
  }
  .dark:focus {
    outline: none !important ;
    box-shadow: 0 12px 9px -9px black;
  }
}
</style>