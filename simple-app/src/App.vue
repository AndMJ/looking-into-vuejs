<template>
    <Header></Header>
    <main>
      <router-view></router-view>
    </main>
</template>

<script>
import router from './router'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    router,
    Header
  }
}
</script>
