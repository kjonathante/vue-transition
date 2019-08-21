<template>
  <div>
    <h1>Transition</h1>
    <nav>
      <router-link :to="{ name: 'sample1' }">Sample 1</router-link>
    </nav>
    <router-view />
  </div>
</template>
