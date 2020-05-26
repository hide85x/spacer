<template>
  <div class="wrapper">
    <input v-model="search_query" 
    id="search" 
    name="search" 
    placeholder="search"
    @input="inputHandler"
     />
    <!-- <ul>
        <li v-for="result in results" :key="result.data[0].nasa_id">
          {{result.data[0].description}}
        </li>
    </ul>-->
    <!-- <div id="img">
        <h1>image</h1>
        <img id="image" alt />
    </div>-->
  </div>
</template>

<script>
import axios from "axios";
import debounce from 'lodash.debounce' ;

const url_base = "https://images-api.nasa.gov/search?q=";


export default {
  name: "SearchInput",
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

<style lang='scss' scoped>
  .wrapper {
      width: 100%;
    display: flex;
    flex-direction: column;
  
  
    input {
        align-self: center;
        width: 50%;
        margin-top: 50px;
      height: 50px;
      font-size: 23px;
      border: 0;
      border-bottom: 2px solid black;
      text-align: center;
      background: none;
      color: white;
      ;
    }
  }
</style>