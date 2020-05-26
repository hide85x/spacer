<template>
  <div class="searchWrapper">
    <Claim />
    <SearchInput />
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput.vue'
import Claim from '@/components/Claim'  //@ jest sciezka src

export default {
  name: "Search",
  components: {
    Claim, SearchInput
    },
 
  
};
</script>

<style lang="scss">
.searchWrapper {
  color:white;
  font-size: 23px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 30px;
    margin: 0;
    background-image: url('../assets/jar.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  #img {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #image {
    width: 500px;
    height: 500px;
  }

</style>
