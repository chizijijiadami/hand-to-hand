<template>
  <div id="app">
    <header>
      <nav><router-link to="/index">index</router-link><router-link to="/list">list</router-link></nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
