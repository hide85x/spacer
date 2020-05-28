<template>
  <div class="heroImg"/>

</template>

<script>
export default {
  name: "HeroImg"
};

</script>

<style lang="scss" scoped>
.heroImg {
    position: fixed;
    top:0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    background-image: url('../assets/view.jpeg');
    background-size: cover;
    background-position: 100% 50%;
    background-repeat: no-repeat;

}
.heroImg::after {
    content: "";
    width: 100%;
    height: 100vh;
    opacity: 0.5;
    top: 0;
    left: 0;
    z-index: 1;
    position: absolute;
    background: black;
}
</style>