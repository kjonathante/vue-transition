<template>
  <div>
    <h3>Sample 1</h3>

    <div>
      <button v-on:click="show = !show">Toggle</button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    show: true
  })
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
