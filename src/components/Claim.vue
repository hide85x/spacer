<template>
  <div class="claimWrapper">
    <h1 class="claim">SPACER</h1>
    <p class="subclaim">
        Reach for the stars !
    </p>
    <p  class="subclaim">I mean really!  go get them tiger! Wubaladubdub!!!</p>
  </div>
</template>

<script >
export default {
  name: "Claim"
};
</script>

<style lang="scss" scoped>
@import url(https://cdn.rawgit.com/tonsky/FiraCode/1.205/distr/fira_code.css);


    .claimWrapper {
  font-style: 'Fira Code', sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-bottom: 50px;
        padding: 0 50px;
    }
    h1 {
      font-size: 5rem;
      @media (max-width:500px) {
        font-size: 4rem;
      }
    }
    p {
      font-size: 1.2rem;
      font-weight: 300;
    }
</style>