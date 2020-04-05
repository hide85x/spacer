<template>
  <div class="wrapper">
    <div class="search">
      <label for="search">Search</label>
      <input v-model="search_query" id="search" type="text" name="search" @keypress="inputHandler" />
      <div>
        <h1>dd</h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const url_base = "https://images-api.nasa.gov/search?q=";
export default {
  name: "Search",
  data() {
    return {
      search_query: "" // daje nam dostep to two way binding w  vmodel w input, musi miec inicjalną wartość!
    };
  },
  methods: {
    inputHandler(e) {
      if (e.key == "Enter") {
        console.log(this.search_query);
        axios
          .get(`${url_base}${this.search_query}&media_type=image`)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        return;
      }
    }
  }
};
</script>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 30px;
  margin: 0;
}
.search {
  width: 300px;
  display: flex;
  flex-direction: column;

  label {
    font-family: "Montserrat", sans-serif;
    align-self: center;
  }

  input {
    height: 50px;
    border: none;
    border-bottom: 1px solid black;
    text-align: center;
  }
}
</style>
