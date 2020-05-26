<template>
  <div class="wrapper">
    <div class="search">
      <label for="search">Search</label>
      <input v-model="search_query" id="search" type="text" name="search" @keypress="inputHandler" />
      <ul>
        <li v-for="result in results" :key="result.data[0].nasa_id">
          {{result.data[0]}}
        </li>
      </ul>
      <!-- <div id="img">
        <h1>image</h1>
        <img id="image" alt />
      </div>-->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import debounce from 'lodash.debounce' ;
const url_base = "https://images-api.nasa.gov/search?q=";

export default {
  name: "Search",
  data() {
    return {
      search_query: "" , // daje nam dostep to two way binding w  vmodel w input, musi miec inicjalną wartość!
      results: []
    };
  },
  methods: {
    inputHandler: debounce(function() {
      const imageTag = document.querySelector("#image");

        axios
          .get(`${url_base}${this.search_query}&media_type=image`)
          .then(res => {
            !res.data.collection.items.length ? alert('couldnt find anything....'): null;
              
            
            this.results = res.data.collection.items;

          })
          .catch(err => {
            console.log(err);
          });
      }, 500 )   
}
  
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
