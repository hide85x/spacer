<template>
<!-- :style to tyle samo co v-bind:class -->
  <div :style="style" class="item"></div> 
</template>

<script>
export default {
  name: "Item",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      photo: this.item.links[0].href,
      
    };
  },
  // bez tego szaju niżej nie działą, wczesniej mielismy style zwracane z funkcji data  w obiekcie i nie działo
  // obiekt data był zwrascany zanim komponent został zamontowany, dlatego nie milismy dostepu do propsa ITEM w APP

  //compured robi update za kazdym razem kiedy obiekt data ulega zmienie
    computed: {
    style() {
      return `background-image: url("${this.photo}")`;
    },
  },

  //kolejny sposob
  // mounted() {
  //   this.photo= this.item.links[0].href,
  // }
};
</script>

<style lang="scss" scoped>
.item {
    color: black;
    margin: 2px;
  width: 300px;
  height: 300px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 22;
  transition: transform 0.3s ease-in, box-shadow 0.3s ease-in;
  &:hover {
    box-shadow: 0 13px 23px black;
    z-index: 333;
      transform: scale(1.1);
      cursor: pointer;
}
}

</style>