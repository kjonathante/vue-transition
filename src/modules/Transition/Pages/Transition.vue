<template>
  <div>
    <h1>Transition</h1>
    <nav>
      <!-- <router-link :to="{ name: 'sample1' }">Sample 1</router-link> -->
      <router-link v-bind="{ to: { name: 'sample1' } }">Sample 1</router-link>
      <router-link v-bind:to="{ name: 'CSSTransitions' }"
        >CSS Transitions</router-link
      >
      <router-link v-bind:to="{ name: 'CSSAnimations' }"
        >CSS Animations</router-link
      >
      <router-link v-bind:to="{ name: 'CustomTransitionClasses' }"
        >Custom Transition Classes</router-link
      >
      <router-link v-bind:to="{ name: 'JavaScriptHooks' }"
        >JavaScript Hooks</router-link
      >
    </nav>
    <router-view />
  </div>
</template>
