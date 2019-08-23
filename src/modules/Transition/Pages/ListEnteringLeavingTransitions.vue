<template>
  <div>
    <h2>List Entering/Leaving Transitions</h2>
    <div>
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>
      <transition-group name="list" tag="p">
        <span v-for="item in items" v-bind:key="item" class="list-item">
          {{ item }}
        </span>
      </transition-group>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    nextNum: 10
  }),
  methods: {
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function() {
      this.items.splice(this.randomIndex(), 1)
    }
  }
}
</script>
<style scoped>
/* .list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
} */

.list-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-enter, .list-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-leave-active {
  position: absolute;
}
</style>
