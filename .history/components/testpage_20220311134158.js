import React from "react";
import { useState } from "react";
import "../components/Test.module.css";
export const Testpage = () => {
  return <><div id="app">
  <div class="flex flex-wrap px-5">
  <vue-dropdown animation="fade" color="red"></vue-dropdown>
  
  <vue-dropdown animation="slide-in-up" color="green"></vue-dropdown>

  <vue-dropdown animation="slide-in-right" color="blue"></vue-dropdown>

  <vue-dropdown animation="slide-in-left" color="yellow"></vue-dropdown>
    
  <vue-dropdown animation="scale" color="indigo"></vue-dropdown>
    
  <vue-dropdown animation="rotate" color="pink"></vue-dropdown>
  </div>
</div>



<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

<script>


const app = new Vue({
  el: '#app',
});
</script>



<style>
button{
  cursor:pointer;
  &:focus{
    outline:none;
  }
}

/* Animations */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Slide-in-up animation*/
.slide-in-up-enter-active, .slide-in-up-leave-active {
  transition: all .5s;
  transform: translateY(0);
}

</style></>;
};
