<template>
  <div>
    <h1>Transition</h1>
    <nav>
      <!-- <router-link :to="{ name: 'sample1' }">Sample 1</router-link> -->
      <router-link v-bind="{ to: { name: 'sample1' } }" class="link">Sample 1</router-link>
      <router-link v-bind:to="{ name: 'CSSTransitions' }" class="link">CSS Transitions</router-link>
      <router-link v-bind:to="{ name: 'CSSAnimations' }" class="link">CSS Animations</router-link>
      <router-link
        v-bind:to="{ name: 'CustomTransitionClasses' }"
        class="link"
      >Custom Transition Classes</router-link>
      <router-link v-bind:to="{ name: 'JavaScriptHooks' }" class="link">JavaScript Hooks</router-link>
      <router-link
        v-bind:to="{ name: 'ListEnteringLeavingTransitions' }"
        class="link"
      >List Entering/Leaving Transitions</router-link>
      <router-link v-bind:to="{ name: 'ListMoveTransitions' }" class="link">List Move Transitions</router-link>
    </nav>
    <router-view class="main" />
  </div>
</template>
<style scoped lang="scss">
nav {
  padding: 30px;
  text-align: left;
  display: inline-block;
  .link {
    display: block;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.main {
  display: inline-block;
  width: 50%;
}
</style>
