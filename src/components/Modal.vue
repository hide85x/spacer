<template functional>
  <div class="outerWrapper">
    <div class="innerWrapper">
      <div class="photo">
        <img :src="props.item.links[0].href" alt />
      </div>
      <div class="descr">
        <h2 class="title">{{props.item.data[0].title}}</h2>
        <p class="description">{{props.item.data[0].description}}</p>
      </div>
    </div>
    <div class="close" @click="listeners['X']('closeModal')" />  
                 <!--wczesniej było -> @click="$emit('closeModal')" /
            jeśli chcemy zeby emitowal event z functional comp to musmiy wysłac event e taki sposob-->
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  // data() {
  //   return {
  //     photo: null,
  //     title: null,
  //     descr: null
  //   };
  // },
  // mounted() {
  //     this.photo = this.item.links[0].href,
  //     this.title = this.item.data[0].title,
  //     this.descr = this.item.data[0].description.substring(0, 100);
  // }
};
</script>

<style lang="scss" scoped>
.outerWrapper {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.836);
  z-index: 333;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  // @media (min-width: 1024px) {
  //   max-width: 70%;
  //   height: 70%;
  //   left: 0;
  //   right: 0;
  //   top: 0;
  //   bottom: 0;
  //   margin: auto;
  // }
}

.descr {
  margin: auto;
  padding: 15px;
  width: 50%;
  flex: 1;
}
.innerWrapper {
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  color: black;
  text-align: center;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .descr {
      padding: 5px;
      font-size: 0.9rem;
    }
  }
  p {
    margin: auto;
  }

}
.photo {
  display: flex;
  margin: auto;
  justify-content: center;
  flex:1;
  img {
    max-width: 100%;
    height: auto;
  }
  
}
.close {
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 0.938);
  position: absolute;
  right: 20px;
  margin:auto;
  top: 40px;
  padding: 20px;
  width: 20px;
  height: 20px;

  &:hover {
    cursor: pointer;
    z-index: 999;
  }

  &::before,
  &::after {
    position: absolute;
    content: "";
    display: block;
    width: 20px;
    height: 2px;
    right: 10px;
    margin: auto;
    background: black;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
}
</style>