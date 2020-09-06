<template>
  <div :class="[{flexStart: step===1}, 'wrapper']">
    <transition name="slide">
      <img
        class="logo"
        src="https://raw.githubusercontent.com/helloroman/spacer-helloroman/master/src/assets/logo.svg"
        alt
        v-if="step === 1"
      />
    </transition>

    <transition name="fade">
      <HeroImg v-if="step===0" />
    </transition>
    <Claim v-if="step===0" />
    <SearchInput v-model="search_query" @input="inputHandler" :dark="step ===1" />
    <div v-if="results && !loading && step ===1" class="results">
      <!-- uzwamy click.native , poniewaz nie emitujemy niz z wewnatrz komponentu . Za kazdym razem kiedy chcemy cos zrobic z komponentem a ten nic nie emituje z wew siebie uzywamy native  -->
      <Item
        v-for="item in results"
        :item="item"
        :key="item.data[0].nasa_id"
        @click.native="handleModalOpen(item)"
      />
    </div>
   
   
    <div class="lds-dual-ring" v-if="step===1 && loading"/>
    <Modal v-if="modalOpen" :item="modalItem" @X="modalOpen= false" />

    <!-- wczesniej w Modal mielismy @(wyemitowany z comp event) -->
    <!-- :item to data wysyłane do komonentu MODAL odbieramy je inicjalizucjąc najppierw item w props i dalej mamy do niej dostep w obiekcie mounted i data -->
    <!-- closeModal to wyemitowany z komponentu modal event -->
  </div>
</template>

<script>
import axios from "axios";
import debounce from "lodash.debounce";


import HeroImg from "@/components/HeroImg.vue";
import SearchInput from "@/components/SearchInput.vue";
import Claim from "@/components/Claim.vue"; //@ jest sciezka src
import Item from "@/components/Item.vue";
import Modal from "@/components/Modal.vue";

const url_base = "https://images-api.nasa.gov/search?q=";
export default {
  name: "App",
  components: {
    Claim,
    SearchInput,
    HeroImg,
    Item,
    Modal
  },
  data() {
    return {
      loading: false,
      step: 0,
      search_query: "", // daje nam dostep to two way binding w  vmodel w input, musi miec inicjalną wartość!
      results: [],
      modalOpen: false,
      modalItem: null
    };
  },
  methods: {
    
    inputHandler: debounce(function() {
      const imageTag = document.querySelector("#image");
      this.loading = true;

      axios
        .get(`${url_base}${this.search_query}&media_type=image`)
        .then(res => {
          !res.data.collection.items.length
            ? alert("couldnt find anything....")
            : null;

          this.results = res.data.collection.items;
          this.loading = false;
          this.step = 1;
        })
        .catch(err => {
          console.log(err);
        });
    }, 600),

    handleModalOpen(item) {
      console.log(item);
      this.modalOpen = true;
      this.modalItem = item;
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap");

html,
* {
  // background: linear-gradient(rgba(0, 0, 255, 0.178), dodgerblue);
  // background-repeat: no-repeat;
  // background-size: contain;
  // background-position: center;
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}
.wrapper {
  position: relative;
  font-style: "Fira Code", sans-serif;
  color: rgb(255, 255, 255);
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  margin: auto;
  &.flexStart {
    justify-content: flex-start;
  }
}
.logo {
  position: absolute;
  top: 15px;
}

.results {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 22;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: margin-top ease-in 0.3s;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  margin-top: -50px;
}
// loader
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid rgb(88, 88, 88);
  border-color: rgb(39, 39, 39) transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
