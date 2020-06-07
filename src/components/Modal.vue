<template>
  <div class="outerWrapper">
    <div class="innerWrapper">
      <div class="photo">
        <img :src="photo" alt />
      </div>
      <div class="descr">
        <h2 class="title">{{title}}</h2>
        <p class="description">{{descr}}</p>
      </div>
    </div>
    <div class="close" @click="$emit('closeModal')" />
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
  data() {
    return {
      photo: null,
      title: null,
      descr: null
    };
  },
  mounted() {
      this.photo = this.item.links[0].href,
      this.title = this.item.data[0].title,
      this.descr = this.item.data[0].description.substring(0, 100);
  }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 50%;
}
.innerWrapper {
  display: flex;
  justify-content: space-between;
  padding: 30px;
  width: 100%;
  color: black;
  text-align: center;
  // @media (min-width: 1024px) {
  //   flex-direction: row;
  //   .photo {
  //     min-width: 50%;
  //     margin-right: 20px;
  //   }
  // }
  @media (max-width: 1000px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    padding: 0;
    .descr {
      font-size: 1rem;
    }
  }
  p {
    margin: auto;
  }

}
.photo {
  display: flex;
  margin: auto;
  max-width: 100%;
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