<template>
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
      title: this.item.data[0].title,
      
    };
  },
  // bez tego szaju niżej nie działą, wczesniej mielismy style zwracane z funkcji data  w obiekcie i nie działo
    computed: {
    style() {
      return `background-image: url("${this.photo}")`;
    },
  },
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
  transition: transform 0.3s ease-in, box-shadow 0.5s ease-in;
//   &:hover {
//       transform: scale(1.8);
//       z-index: 33;
//       align-items: center;
//       box-shadow: 0 0 30px 500px rgba(0, 0, 0, 0.863);
//       cursor: pointer;
// }
}
</style>