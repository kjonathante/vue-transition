<template>
  <div>
    <link
      href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1"
      rel="stylesheet"
      type="text/css"
    />

    <h1>Custom Transition Classes</h1>
    <div class="demo">
      <button @click="show = !show">Toggle render</button>
      <transition
        name="custom-classes-transition"
        enter-active-class="animated tada"
        leave-active-class="animated bounceOutRight"
      >
        <p v-if="show" class="p">hello</p>
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
<style scoped>
.demo {
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 25px 35px;
  /* margin-top: 1em;
  margin-bottom: 40px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow-x: auto; */
  width: 500px;
  margin: 0 auto;
}
.p {
  /* line-height: 1.6em;
  margin: 0;
  padding: 0; */
  text-align: left;
}
</style>
