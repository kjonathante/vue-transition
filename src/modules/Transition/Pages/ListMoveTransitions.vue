<template>
  <div>
    <h2>List Move Transitions</h2>
    <div>
      <button v-on:click="shuffle">Shuffle</button>
      <transition-group name="flip-list" tag="ul">
        <li v-for="item in items" v-bind:key="item">{{ item }}</li>
      </transition-group>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
export default {
  data: () => ({
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }),
  methods: {
    shuffle: function() {
      this.items = _.shuffle(this.items)
    }
  }
}
</script>
<style>
.flip-list-move {
  transition: transform 1s;
}
</style>
