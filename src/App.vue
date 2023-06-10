<template>
  <div>
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/layouts/header.vue'
import Footer from '@/components/layouts/footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import './assets/styles/main.css';
</style>